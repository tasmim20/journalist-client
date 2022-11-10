import { data } from 'autoprefixer';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReview from './MyReview/MyReview';

const MyReviews = () => {
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([])

  
    useEffect(() =>{
       fetch(`http://localhost:5000/reviews?email=${user?.email}`)
       .then(res => res.json())
       .then(data => setReviews(data))
    },[user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure. You want to delete this review.?');
        if(proceed){
           fetch(`http://localhost:5000/reviews/${id}`,{
               method:'DELETE'
           })
           .then(res => res.json())
           .then(data => console.log(data))
           if(data.deletedCount > 0){
            alert('Deleted Successfully')
            const remaining = reviews.filter(review => review._id !== id)
            setReviews(remaining);
           }
           else if(data.deletedCount === 0){
            <h2 className='text-center text-red-500'>No Reviews were added</h2>
           }
        }
   }

    return (
        <div className='bg-white'>
           
        
          {
            reviews.map(review => <MyReview key={review._id} review={review} handleDelete={handleDelete} ></MyReview>)
          }
        </div>
    );
};

export default MyReviews;
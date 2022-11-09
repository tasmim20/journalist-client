import React from 'react';

const Blog = () => {
    return (
        <div className='flex justify-center  bg-white'>
<div className="card w-full  shadow-xl text-black">
  <div className="card-body bg-slate-100 my-4 mx-10 rounded-xl">
    <h2 className="card-title text-2xl text-red-600">1.Difference between SQL and NoSQL..</h2>
    <div>
        <ul>
            <li>SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database. </li>
            <li>Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.</li>
            <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
            <li>SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.</li>
        </ul>
    </div>
  </div>
  <div className="card-body bg-slate-100 my-4 mx-10 rounded-xl">
    <h2 className="card-title text-2xl text-red-600">2.What is JWT, and how does it work?</h2>
    <div>
        <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.

Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
    </div>
  </div>
  <div className="card-body bg-slate-100 my-4 mx-10 rounded-xl">
    <h2 className="card-title text-2xl text-red-600">3.What is the difference between javascript and NodeJS?.</h2>
    <div>
        <p>NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. </p>
        <p>Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
    </div>
  </div>
  <div className="card-body bg-slate-100 my-4 mx-10 rounded-xl">
    <h2 className="card-title text-2xl text-red-600">4.How does NodeJS handle multiple requests at the same time?</h2>
    <div>
        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Blog;
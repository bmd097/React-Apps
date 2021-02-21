import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const products=[
  {
    id : 4584,
    catagory : "TOPIC 1",
    like : true,
    name:"Shirt X Pro",
    photo : "https://cdn.shopify.com/s/files/1/0684/2619/products/men_scardigan_600x.jpg?v=1606325519",
    star : 4,
    price : 400
  },
  {
    id : 4584,
    catagory : "TOPIC 2",
    like : false,
    name:"Jacket X Pro",
    photo : "https://i.pinimg.com/originals/17/78/f6/1778f69937e6016518f96c239581e9f8.jpg",
    star : 3,
    price : 7500
  },
  {
    id : 4584,
    catagory : "TOPIC 2",
    like : true,
    name:"Shirt Lite",
    photo : "https://i.pinimg.com/474x/e6/48/62/e648622a7b662e050c36d6e5e406a932.jpg",
    star : 4,
    price : 4500
  },
  {
    id : 4584,
    catagory : "TOPIC 1",
    like : true,
    name:"Jacket Max",
    photo : "https://cdn.shopify.com/s/files/1/0684/2619/products/men_scardigan_600x.jpg?v=1606325519",
    star : 4,
    price : 7500
  },
  {
    id : 4584,
    catagory : "TOPIC 2",
    like : false,
    name:"Calliber Main",
    photo : "https://cdn6.bigcommerce.com/s-6bakw5/product_images/uploaded_images/simon-and-mary-traditonal-mountain-hats.jpg?t=1477792675",
    star : 3,
    price : 4500
  },
  {
    id : 4584,
    catagory : "TOPIC 1",
    like : false,
    name:"Triple XDR",
    photo : "https://www.essence.com/wp-content/uploads/2016/07/1468425974/445A9094.jpg",
    star : 2,
    price : 1500
  },
  {
    id : 4584,
    catagory : "TOPIC 1",
    like : true,
    name:"Shirti lo",
    photo : "https://cdn.shopify.com/s/files/1/0684/2619/products/men_scardigan_600x.jpg?v=1606325519",
    star : 4,
    price : 400
  },
  {
    id : 4584,
    catagory : "TOPIC 2",
    like : false,
    name:"Shirjiyt",
    photo : "https://i.pinimg.com/originals/17/78/f6/1778f69937e6016518f96c239581e9f8.jpg",
    star : 3,
    price : 7500
  },
  {
    id : 4584,
    catagory : "TOPIC 2",
    like : true,
    name:"Shiroonijy",
    photo : "https://i.pinimg.com/474x/e6/48/62/e648622a7b662e050c36d6e5e406a932.jpg",
    star : 4,
    price : 4500
  },
  {
    id : 4584,
    catagory : "TOPIC 1",
    like : true,
    name:"Jemini",
    photo : "https://cdn.shopify.com/s/files/1/0684/2619/products/men_scardigan_600x.jpg?v=1606325519",
    star : 4,
    price : 7500
  }];
ReactDOM.render(
  <React.StrictMode>
    <App products={products}/>
  </React.StrictMode>,
  document.getElementById('root')
);


import React, { useState } from "react";
import Navbar from "./component/navbar";
import ProductList from "./component/ProductList";
import Image from "./images/13pro.png";
import Image1 from "./images/2.jpg";
import Image2 from "./images/3.jpg";
import Image3 from "./images/4.png";
import Image4 from "./images/5.jpeg";
import Image5 from "./images/5.webp";
import Image6 from "./images/6.jpg";
import Image7 from "./images/7.jpg";
import "./index.css";
import Footer from "./component/footer";

export default function App() {
  const product = [
    {
      id: 1,
      imgs: Image,
      MobName: "IPhone 13 Pro",
      Price: 50000,
      Quantity: 0,
    },
    {
      id: 2,
      imgs: Image1,
      MobName: "Redmi Note 11",
      Price: 20000,
      Quantity: 0,
    },
    {
      id: 3,
      imgs: Image2,
      MobName: "Vivo V20 Pro",
      Price: 25000,
      Quantity: 0,
    },
    {
      id: 4,
      imgs: Image3,
      MobName: "Vivo Y20 Pro",
      Price: 15000,
      Quantity: 0,
    },
    {
      id: 5,
      imgs: Image4,
      MobName: "Vivo V15 Pro",
      Price: 25000,
      Quantity: 0,
    },
    {
      id: 6,
      imgs: Image5,
      MobName: "IPhone 13",
      Price: 255500,
      Quantity: 0,
    },
    {
      id: 7,
      imgs: Image6,
      MobName: "IPhone 13Mini",
      Price: 250000,
      Quantity: 0,
    },
    {
      id: 8,
      imgs: Image7,
      MobName: "Oppo A53",
      Price: 30000,
      Quantity: 0,
    },
  ];
  let [productList, setproductList] = useState(product);
  let incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].Quantity++;
    setproductList(newProductList);
  };
  let decrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].Quantity--;
    setproductList(newProductList);
  };
  return (
    <>
      <Navbar />
      <div className="main">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
        />
      </div>
      <Footer/>
    </>
  );
}

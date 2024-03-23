import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/action";
import { Footer, Navbar } from "../components";
import { product } from "./items";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Shop = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.handleCart);

  useEffect(() => {
    // Load cart items from localStorage on component mount
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (storedCartItems.length > 0) {
      storedCartItems.forEach((item) => dispatch(addCart(item)));
    }
  }, [dispatch]);


  const addProduct = (product) => {
    dispatch(addCart(product));
    toast.success("Product added successfully", {
      position: "top-left",
    });
    // Update localStorage
    const updatedCartItems = [...cartItems, product];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h2>Shop now</h2>
        <div className="products">
          {product?.map((product) => (
            <div key={product._id} className="product">
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <div className="details">
                <span>{product.desc}</span>
                <span className="price">ksh{product.price}</span>
              </div>
              <button
                className="btn btn-outline-dark"
                onClick={() => addProduct(product)}>
                Add to Cart
              </button>

            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;

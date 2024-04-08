import React, { Fragment, useEffect } from "react";
import { CgPhone } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProducts } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import About from "../../images/new images.png";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProducts());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Smart Mart Store"} />
          <div className="banner">
            <p>Welcome to Smart Mart Store</p>
            <h1 className="banner-head">
              Smart Mart Store : The<span> One-stop Shopping Destination </span>{" "}
            </h1>
            <p>E-commerce is revolutionizing the way we all shop in India. </p>

            <a href="tel:1234567890">
              <button>
                <CgPhone /> Contact Us
              </button>
            </a>
          </div>

          <div>
          </div>

          <div className="about_us">
            <img src={About} alt="" />

            <div>
              <h2>We're Ecommerce Agency Works on Interacts</h2>
             <p> We’re also experienced (and slightly jaded) advertising guys
              who’ve seen the best (and worst) solutions that promise to grow
              your business. We rarely sit still and find it nearly impossible
              to settle for status quo. But enough about us. We want to know
              about you and your business. What are your goals? We’d like to
              help you achieve them. </p>
              <p></p>
              <a href="tel:1234567890"> Contact Us</a>

            </div>
          </div>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container product" id="container">
            {products &&
              products.map((product) => <ProductCard product={product} />)}
          </div>
        </Fragment>
      )}
      <Fragment></Fragment>
    </Fragment>
  );
};

export default Home;

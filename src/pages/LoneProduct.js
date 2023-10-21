import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Colors from "../components/Colors";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import imageMain from "../images/watch.jpg";
import { Link } from "react-router-dom";

const LoneProduct = () => {

  const props = {
    width: 400,
    height: 500,
    zoomWidth: 600,
    img: {imageMain},
  };

  const [orderedProduct, setorderedProduct] = useState(true);

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-10">
                <div>
                  <img src={imageMain} alt="" className="img-fluid"></img>
                </div>
                <div>
                  <img src={imageMain} alt="" className="img-fluid"></img>
                </div>
                <div>
                  <img src={imageMain} alt="" className="img-fluid"></img>
                </div>
                <div>
                  <img src={imageMain} alt="" className="img-fluid"></img>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kid's Headphones Bulk 10 Pack Multi Colored For Students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">Kes. 15,500/=</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">( 3 Reviews )</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a Review
                  </a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data">Headphones</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">Beats</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data">Headphones</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">Headphones</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Availability :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        S
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        M
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        L
                      </span>
                      <span className="badge border border-1 bg-white text-dark border-secondary">
                        XL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Color :</h3>
                    <Colors />
                  </div>
                  <div className="d-flex align-items-center gap-10 flex-row mt-2 mb-3">
                    <h3 className="product-heading">Quantity :</h3>
                    <div className="">
                      <input
                        type="number"
                        className="form-control"
                        name=""
                        min={1}
                        max={10}
                        style={{ width: "60px" }}
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center gap-25 ms-4">
                      <button className="button border-0" type="submit">
                        Add To Cart
                      </button>
                      <button className="button signup" type="submit">
                        Buy Now
                      </button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <Link to="/compare-product">
                        <TbGitCompare className="fs-5 me-2" />
                        Add to Compare
                      </Link>
                    </div>
                    <div>
                      <Link to="/wishlist">
                        <AiOutlineHeart className="fs-5 me-2" />
                        Add to Wishlist
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping & Returns :</h3>
                    <p className="product-data">
                      Free shipping and returns available on all orders! <br />{" "}
                      We ship all domestic ( Kenyan ) orders within &nbsp;
                      <b>7 - 10 Business Days!</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-3">
                    <h3 className="product-heading">Product Link :</h3>
                    <Link to={{javascript:void(0)}}
                      onClick={() => {
                        copyToClipboard("");
                      }}
                    >
                      Copy Product Link
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className="mb-2">Description</h4>
              <div className="bg-white p-3">
                <p>
                  sdjshjkfhzfskjfzvkbjzkzkb;bksfjdzkfbsjgb;sgjewg
                  sfdjbjk\bdsfbjfhjfhjv\lehfvrhjevfwjhvf;vbjwfwbfw
                  wejfbjkfbjkwbfkjbwjkebfkjwbjfbkwjsbfkjbkwjbfkjbw
                  wfjbbfjbefkjbefberkjbfkrejbekrfbjrekgbrjgbejkgb
                  erbfjekrbjrkebjfrbjbjfbrejkbjekrfbkjbfjebrfjkbrjkb
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reviews-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 3 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a
                        className="text-dark text-decoration-underline"
                        href=" "
                      >
                        Write a Review.
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-3">
                  <h4>Write a Review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        size={24}
                        value={3}
                        edit={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control mb-0"
                        cols="30"
                        rows="4"
                        placeholder="Say something..."
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-2">
                  <div className="review">
                    <div className="d-flex gap-15 align-items-center">
                      <h5 className="mb-0">Boorayan</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-2">
                      djhbdfsbhjsbdfhbhbfshdbfhsbfhsbfbsdsjfsbfjsbfshfbjdhfbhsdf
                      fdnfsdjskdfjjfskdfksfbdkjsfbjksdbfkjsfbksjbfksjfbjksdbjkbdf
                      fjsfskjskjfbjkfkjnfnfjkdnsfk;dkfkflskfndlsfnfdnskfnsdfnlfnd
                      sdfknsfdknsdfknlsfnlsdfnlsfnlkfnklsdfnlkdfnkldfnklsdnflkfnd
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Other Popular Products</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default LoneProduct;

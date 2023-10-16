import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";


const LoneProduct = () => {
  const props = {
    width: "100%",
    height: 250,
    zoomWidth: 500,
    img: " ",
  };
  const [orderedProduct, setorderedProduct] = useState(true);

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
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img src="" alt="" className="img-fluid"></img>
                </div>
                <div>
                  <img src="" alt="" className="img-fluid"></img>
                </div>
                <div>
                  <img src="" alt="" className="img-fluid"></img>
                </div>
                <div>
                  <img src="" alt="" className="img-fluid"></img>
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
                    <p className="mb-0">(3 Reviews)</p>
                  </div>
                  <a href="#review">Write a Review</a>
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
      <section className="reviews-wrapper home-wrapper-2">
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
                <div className="review-form py-4">
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
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h6 className="mb-0">Boorayan</h6>
                      <ReactStars
                        count={5}
                        size={24}
                        value={4}
                        edit={false}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
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
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default LoneProduct;

import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";

//Pit confirm: 8:34:19
const Checkout = () => {
  return (
    <>
      <Meta title={"Checkout"} />
      <BreadCrumb title="Checkout" />
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <h3 className="website-name">Ediani Tech</h3>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark" to="/cart">
                        Cart
                      </Link>
                    </li>
                    &nbsp; &gt;
                    <li className="breadcrumb-item active" aria-current="page">
                      Contact Information
                    </li>
                    &nbsp; &gt;
                    <li className="breadcrumb-item active">Shipping</li>
                    &nbsp; &gt;
                    <li className="breadcrumb-item active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h3 className="title total">Contact Information</h3>
                <p className="user-details">
                  Burayo Saka (brianoumo505@gmail.com)
                </p>
                <h4 className="mb-2">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex gap-15 flex-wrap justify-content-between"
                >
                  <div className="w-100">
                    <select name="" className="form-control form-select" id="">
                      <option>Select Country</option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartment, suite, etc. (Optional)"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <select name="" className="form-control form-select" id="">
                      <option value="" selected disabled>
                        Select Location
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="ZIP Code"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <BiArrowBack />
                        Return To Cart
                      </Link>
                      <Link to="/cart" className="button">
                        Continue To Shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ top: "-10px", right: "2px" }}
                        className="badge bg-secondary text-white rounded-circle p-3 position-absolute"
                      >
                        1
                      </span>
                      <img className="img-fluid" src={watch} alt="product" />
                    </div>
                    <div>
                      <h5 className="total-price">Bbboooooray</h5>
                      <p>Mavitu</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h5>Kes.10,000/=</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="total">Subtotal</p>
                  <p className="total-price">Kes 100,000/=</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-2 total">Shipping</p>
                  <p className="mb-2 total-price">Kes 10,000/=</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-3">
                <h4 className="total">Total</h4>
                <h5 className="total-price">Kes 110,000/=</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;

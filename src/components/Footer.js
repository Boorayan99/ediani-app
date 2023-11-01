import React from "react";
import { Link } from "react-router-dom";
import { BsWhatsapp, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter Your Email Address Here..."
                  aria-label="Enter Your Email Address Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Ediani Tech Solutions <br />
                  P. O. Box 387 - 00511 <br />
                  Ongata Rongai <br />
                  Maasai Lodge Road
                </address>
                <a
                  href="tel:+254 715 018 013"
                  className="mt-4 d-block mb-2 text-white"
                >
                  +254 715 018 013
                </a>
                <a
                  href="mailto:info@ediani.co.ke"
                  className="mt-4 d-block mb-2 text-white"
                >
                  info@ediani.co.ke
                </a>
                <div className="social-icons d-flex align-items-center gap-20 mt-4">
                  <Link to="#" className="text-white">
                    <BsWhatsapp className="fs-5" />
                  </Link>
                  <Link to="#" className="text-white">
                    <BsTwitter className="fs-5" />
                  </Link>
                  <Link to="#" className="text-white">
                    <BsInstagram className="fs-5" />
                  </Link>
                  <Link to="#" className="text-white">
                    <BsYoutube className="fs-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy Policy
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping Policy
                </Link>
                <Link to="/termsandconditions" className="text-white py-2 mb-1">
                  Terms of Service
                </Link>
                <Link to="/blog" className="text-white py-2 mb-1">
                  Blog
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link to="/about" className="text-white py-2 mb-1">
                  About Us
                </Link>
                <Link to="/faq" className="text-white py-2 mb-1">
                  FAQ
                </Link>
                <Link to="contact" className="text-white py-2 mb-1">
                  Contact
                </Link>
                <Link className="text-white py-2 mb-1">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Accessories</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
                <Link className="text-white py-2 mb-1">Smart Watches</Link>
                <Link className="text-white py-2 mb-1">Tablets</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}: Powered by Boorayan eSports
                Racing Team
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

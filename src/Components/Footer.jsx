import React, { useState } from "react";
import "../assets/css/style.css";
import logo from "../assets/images/logonewnew (2).svg";
import footerbg from "../assets/images/footer-bg.png";
import { IonIcon } from "@ionic/react";
import { Link, useNavigate } from "react-router-dom";
import {
  logoYoutube,
  logoFacebook,
  logoTwitter,
  logoInstagram,
  logoLinkedin,
} from "ionicons/icons";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { contactUs } from "../actions/other";
import { useEffect } from "react";
const Footer = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  const { loading, error, message } = useSelector((state) => state.other);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const subscribe = async (e) => {
    e.preventDefault();
    await dispatch(contactUs(email));
    await setEmail("");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <footer className="footer" style={{ backgroundImage: { footerbg } }}>
      <div className="footer-top section">
        <div className="container grid-list">
          <div className="footer-brand">
            <a href="/" className="logo">
              <img src={logo} width="162" height="50" alt="EduWeb logo" />
            </a>

            <p className="footer-brand-text">
              At Encodingo, we are more than just a coding platform. We are a
              community of passionate educators and coders who are dedicated to
              making a positive impact on the lives of children. We believe that
              coding has the power to change the world, and we are excited to be
              a part of the journey.
            </p>

            {/* <div className="wrapper">
            <span className="span">Add:</span>

            <address className="address">70-80 Upper St Norwich NR2</address>
          </div>  */}

            <div className="wrapper">
              <span className="span">Call:</span>

              <a href="tel:+918271742953" className="footer-link">
                +91 827 1742 953
              </a>
            </div>

            <div className="wrapper">
              <span className="span">Email:</span>

              <a href="mailto:info@eduweb.com" className="footer-link">
                info@encodingo.com
              </a>
            </div>
          </div>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Online Platform</p>
            </li>

            <li>
              <Link to="/about" className="footer-link">
                About
              </Link>
            </li>

            <li>
              <Link to="/courses" className="footer-link">
                Courses
              </Link>
            </li>

            <li>
              <Link to="/bootcamp" className="footer-link">
                Bootcamp
              </Link>
            </li>

            {/* <li>
              <a href="/" className="footer-link">
                Events
              </a>
            </li> */}

            {/* <li>
              <a href="/" className="footer-link">
                Instructor Profile
              </a>
            </li> */}

            <li>
              <a
                href="https://forms.gle/Ty2pCDdZUhaTcaAh9"
                target="_blank"
                className="footer-link"
              >
                Internship
              </a>
            </li>
          </ul>

          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Links</p>
            </li>

            {/* <li>
              <a href="/" className="footer-link">
                Contact Us
              </a>
            </li> */}

            <li>
              <a href="/tnc" target="_blank" className="footer-link">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/pp" target="_blank" className="footer-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/refund" target="_blank" className="footer-link">
                Refund Policy
              </a>
            </li>

            {/* <li>
              <a href="/" className="footer-link">
                Schools
              </a>
            </li> */}

            {/* <li>
              <Link to={"/"} className="footer-link">
                FAQ's
              </Link>
            </li> */}

            {isAuthenticated ? (
              <li>
                <Link to="/user_dashboard" className="footer-link">
                  Dashboard
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    toast.success("Click on Login");
                  }}
                  className="footer-link"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>

          <div className="footer-list">
            <p className="footer-list-title">Contacts</p>

            <p className="footer-list-text">
              Enter your email address to register to our newsletter
              subscription
            </p>

            <form className="newsletter-form">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email_address"
                placeholder="Your email"
                required
                value={email}
                className="input-field"
              />

              <button
                type="submit"
                className="btn has-before"
                onClick={subscribe}
              >
                {!loading ? (
                  <span className="span">Subscribe</span>
                ) : (
                  <span className="span">Loading...</span>
                )}
                {/* <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"></ion-icon> */}
              </button>
            </form>

            <ul className="social-list">
              <li>
                <a
                  href="https://www.facebook.com/encodingo/"
                  target="_blank"
                  className="social-link"
                >
                  <IonIcon icon={logoFacebook} aria-hidden="true" />
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/company/encodingo/"
                  target="_blank"
                  className="social-link"
                >
                  <IonIcon icon={logoLinkedin} aria-hidden="true" />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IonIcon icon={logoInstagram} aria-hidden="true" />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IonIcon icon={logoTwitter} aria-hidden="true" />
                </a>
              </li>

              <li>
                <a href="#" className="social-link">
                  <IonIcon icon={logoYoutube} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Copyright 2023 All Rights Reserved by{" "}
            <p
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                toast.success("Login To Explore");
              }}
              className="copyright-link"
            >
              Encodingo
            </p>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

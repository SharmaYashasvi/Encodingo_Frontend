import React, { useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import tutorImg from "../../assets/images/tutor.png";
import aboutshape3 from "../../assets/images/about-shape-3.png";
import aboutshape4 from "../../assets/images/about-shape-4.svg";
import { IonIcon } from "@ionic/react";
import { checkmarkDoneOutline } from "ionicons/icons";

const Tutor = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Header />
      <div className="tutor">
        <section
          className="section about"
          id="about"
          aria-label="about"
          style={{ marginBottom: "-150px", marginTop: "70px" }}
        >
          <div className="container">
            <figure className="about-banner">
              <div
                className="img-holder"
                style={{ width: "520", height: "370" }}
              >
                <img
                  src={tutorImg}
                  width="520"
                  height="370"
                  loading="lazy"
                  alt="about banner"
                  className="img-cover"
                />
                {/* <!-- <img src="./assets/images/about-shape-1.svg" width="360" height="420" loading="lazy" alt=""
              class="shape about-shape-1"> --> */}

                {/* <img
                  src={aboutshape2}
                  width="371"
                  height="220"
                  loading="lazy"
                  alt=""
                  className="shape about-shape-2"
                /> */}

                <img
                  src={aboutshape3}
                  width="722"
                  height="528"
                  loading="lazy"
                  alt=""
                  className="shape about-shape-3"
                />
              </div>
            </figure>

            <div className="about-content">
              <p className="section-subtitle">Join Us</p>

              <h2 className="h2 section-title">
                {"Teach Online"}{" "}
                <span className="span">{"English OR Coding"}</span>{" "}
                {"With Encodingo"}
              </h2>

              <p className="section-text">
                {
                  "Emphasize these benefits in your communication with potential tutors to attract qualified and passionate educators to join Encodingo."
                }
              </p>

              <ul className="about-list">
                <li className="about-item">
                  {/* <ion-icon
                  name="checkmark-done-outline"
                  aria-hidden="true"
                ></ion-icon> */}
                  <IonIcon icon={checkmarkDoneOutline} aria-hidden="true" />

                  <span className="span">Best Working Team</span>
                </li>

                <li className="about-item">
                  {/* <ion-icon
                  name="checkmark-done-outline"
                  aria-hidden="true"
                ></ion-icon> */}
                  <IonIcon icon={checkmarkDoneOutline} aria-hidden="true" />

                  <span className="span">Flexibility and Convenience</span>
                </li>

                <li class="about-item">
                  {/* <ion-icon
                  name="checkmark-done-outline"
                  aria-hidden="true"
                ></ion-icon> */}
                  <IonIcon icon={checkmarkDoneOutline} aria-hidden="true" />

                  <span className="span">Personal Branding</span>
                </li>
              </ul>

              <img
                src={aboutshape4}
                width="100"
                height="100"
                loading="lazy"
                alt=""
                className="shape about-shape-4"
              />
            </div>
          </div>
        </section>
        <div className="applyBox">
          <a href="https://forms.gle/Lt7UCoYDbdJzdWct6" target="_blank">
            Apply
          </a>
        </div>
        <div className="tutor_boxes">
          <div className="box" id="box1">
            <h3>Teaching Opportunities</h3>
          </div>
          <div className="box" id="box2">
            <h3>Flexibility and Convenience</h3>
          </div>
          <div className="box" id="box3">
            <h3>Increased Earning Potential</h3>
          </div>
          <div className="box" id="box4">
            <h3>Global Networking</h3>
          </div>
          <div className="box" id="box5">
            <h3>Professional Growth</h3>
          </div>
          <div className="box" id="box6">
            <h3>Personal Branding</h3>
          </div>
          <div className="box" id="box7">
            <h3>Ongoing Development</h3>
          </div>
          <div className="box" id="box8">
            <h3>Making a Difference</h3>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Tutor;

{
  /* <div className="applyBox">
              <input
                type="text"
                name=""
                id=""
                placeholder="What do You want to Teach"
              />
              <a href="https://forms.gle/Lt7UCoYDbdJzdWct6" target="_blank">
                Apply
              </a>
            </div> */
}

{
  /* <div className="mainSection">
          <div className="text">
            <h1>Teach English OR Coding Online With Encodingo</h1>
            <p>
              Emphasize these benefits in your communication with potential
              tutors to attract qualified and passionate educators to join
              Encodingo
            </p>
            <div className="applyBox">
              <a href="https://forms.gle/Lt7UCoYDbdJzdWct6" target="_blank">
                Apply
              </a>
            </div>
          </div>
          <div className="image">
            <img src={tutorImg} alt="" />
          </div>
        </div> */
}

import React from "react";
import "../../assets/css/style.css";
import { IonIcon } from "@ionic/react";
import { Rating } from "@material-ui/lab";
import course1 from "../../assets/images/course-1.jpg";
import { useNavigate } from "react-router-dom";
import "./card.css"
import {
  people,
  libraryOutline,
  starOutline,
  timeOutline,
} from "ionicons/icons";
import { Button } from "@material-ui/core";
import Loader from "../../Components/Loader/Loader";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const BookSessionCard1 = ({
  name,
  poster,
  category,
  link,
  bio,
  rating,
  nos,
  level,
  session,
  loading,
}) => {
  const Navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.user);
  const detailshandler = () => {
    Navigate(bio);
  };

  const options = {
    value: rating,
    readOnly: true,
    precision: 0.5,
  };

  // Function to open the modal and set the YouTube video URL
  const openModal = (key) => {
    const modal = document.getElementById("modalx");
    var videoPlayer = document.getElementById("videoPlayer");
    var videoUrl = `https://www.youtube.com/embed/${key}`;
    videoPlayer.src = videoUrl;
    document.getElementById("modalx");
    modal.style.display = "block";
  };

  // Function to close the modal and stop the video playback
  const closeModal = () => {
    var modal = document.getElementById("modalx");
    var videoPlayer = document.getElementById("videoPlayer");
    videoPlayer.src = "";
    modal.style.display = "none";
  }


  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <button className="button" onClick={openModal}>
            Open Modal
          </button> */}

          {/* <!-- The modal --> */}
          <div id="modalx" className="myModal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <iframe
                id="videoPlayer"
                width="90%"
                height="355"
                src=""
                frameborder="0"
                allowfullscreen></iframe>
            </div>
          </div>

          {/* <!--- /COURSE --> */}
          <div className="course-card">
            <figure
              className="card-banner img-holder"
              style={{ width: "370", height: "220" }}>
              <img
                src={poster.url}
                width="370"
                height="220"
                loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS"
                className="img-cover"
              />
            </figure>

            {/* <div className="abs-badge">
              <IonIcon icon={timeOutline} aria-hidden="true" />

              <span className="span">{duration} Weeks</span>
            </div> */}

            <div className="card-content">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}>
                <span className="badge">{level}</span>
                <span className="badge">{category}</span>
              </div>
              <h3 className="h3 card-title">{name}</h3>

              <div className="wrapper">
                <div className="rating-wrapper">
                  <Rating {...options} />
                </div>

                <p className="rating-text">({`${rating}+`} Rating out of 5)</p>
              </div>

              {/* <card className="price" value="6000">
                {price}
              </card> */}

              <ul className="card-meta-list">
                <li className="card-meta-item">
                  <IonIcon icon={libraryOutline} aria-hidden="true" />

                  <span className="span">{session}+ Sessions</span>
                </li>

                <li className="card-meta-item">
                  <IonIcon icon={people} aria-hidden="true" />
                  <span className="span">{`${nos}+`} Students</span>
                </li>
              </ul>

              {isAuthenticated ? (
                <div className="card-buttons">
                  <Button
                    onClick={() => openModal("P1RGyzt2KPQ")}
                    variant="contained"
                    color="secondary">
                    BIO
                  </Button>
                  <Button variant="contained" color="primary">
                    <a href={link} target="_blank">
                      Book
                    </a>
                  </Button>
                </div>
              ) : (
                <div className="card-buttons">
                  <Button
                    onClick={() => openModal("P1RGyzt2KPQ")}
                    variant="contained"
                    color="secondary">
                    BIO
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => toast.error("Please Login!!")}>
                    Book
                  </Button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookSessionCard1;

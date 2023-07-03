import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/style.css";
import "../../assets/css/authentication_styles.css";
import "../Auth/AuthContainer.css";
import AuthContainer from "../Auth/AuthContainer";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import { useSelector } from "react-redux";

const BookSession = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const handleModal = () => {
    console.log("clicked");
    setShowModal(!showModal);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    if (showModal) {
      body.style.overflowX = "hidden";
    } else {
      body.style.overflowX = "auto";
    }
  }, [showModal]);

  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      {isAuthenticated ? (
        <button
          className="btn has-before"
          onClick={() => navigate("/user_dashboard")}
        >
          <span className="span">Dashboard</span>
        </button>
      ) : (
        <button className="btn has-before" onClick={handleModal}>
          <span className="span">Book A Session</span>
        </button>
      )}

      {showModal && (
        <div className="modal">
          <button className="close-btn" onClick={handleModal}>
            <IonIcon icon={closeOutline} aria-hidden="true" />
          </button>
          <AuthContainer />
        </div>
      )}
    </>
  );
};

export default BookSession;

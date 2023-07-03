import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./card.css";
// import "../UserDashboard.css";
import "../../assets/css/style.css";
import Bottombar from "../Bottombar/Bottombar";
import { useState } from "react";
import { useEffect } from "react";
import BookSessionCard1 from "./BookSessionCard1";
import { useNavigate } from "react-router-dom";
import "./BookSession.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { getAllTeachers } from "../../actions/teacher";
import Loader from "../../Components/Loader/Loader";

import search from "../../assets/images/search.png";

const BookSession = () => {
  const { loading, error, message, teachers } = useSelector(
    (state) => state.teacher
  );
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  // const addToPlaylistHandler = async couseId => {
  //   await dispatch(addToPlaylist(couseId));
  //   dispatch(loadUser());
  // };

  const categories = ["Coding", "English"];

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }

    dispatch(getAllTeachers(category, keyword));
  }, [dispatch, error, message, category, keyword]);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const refresh = () => {
    window.location.reload();
    Navigate("/book_session");
  };

  useEffect(() => {
    // const cat = document.getElementById(category);
    // cat.classList.add("active");
    console.log(category);

    // console.log(cat);

    // Update window width when the window is resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Function to close the modal and stop the video playback
  // function closeModal() {
  //   var modal = document.getElementById("myModal");
  //   var videoPlayer = document.getElementById("videoPlayer");
  //   videoPlayer.src = "";
  //   modal.style.display = "none";
  // }

  return (
    <>
      {windowWidth < 767 ? <Bottombar /> : <Sidebar />}

      <section
        className="home-section section course"
        id="courses"
        aria-label="course">
        {/* <Topbar /> */}
        <div>
          {/* <div id="myModal" className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal()}>
                &times;
              </span>
              <iframe
                id="videoPlayer"
                width="100%"
                height="315"
                src=""
                frameborder="0"
                allowfullscreen></iframe>
            </div>
          </div> */}
          <div className="container" id="containerx">
            {/* <!-- <p className="section-subtitle">Popular Courses</p> --> */}

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}>
              {/* <h2
                className="h2 section-title"
                // style={{ color: "white", marginBottom: "5rem" }}
              >
                All Courses
              </h2> */}

              {/* <button className="Button" minW={"60"} onClick={refresh}>
                All
              </button> */}
              <div className="myBtns">
                {categories.map((item, index) => (
                  <button
                    className="Button sessionBtn"
                    key={index}
                    onClick={() => setCategory(item)}
                    id={item}
                    minW={"60"}>
                    {item}
                  </button>
                ))}
              </div>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button type="submit">
                  <img src={search} width="25" alt="" />
                </button>
              </div>
            </div>
            <ul className="grid-list">
              {loading ? (
                <Loader />
              ) : (
                <>
                  {teachers.length > 0 ? (
                    teachers.map((item) => (
                      <BookSessionCard1
                        key={item._id}
                        poster={item.poster}
                        name={item.name}
                        category={item.category}
                        link={item.link}
                        level={item.level}
                        bio={item.bio}
                        session={item.session}
                        rating={item.rating}
                        nos={item.nos}
                        loading={loading}
                      />
                    ))
                  ) : (
                    <h1>Teachers Not Found</h1>
                  )}
                </>
              )}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookSession;

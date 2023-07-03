import React, { useEffect } from "react";
import "../../assets/css/style.css";
import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUser } from "../../actions/userAction";
import { toast } from "react-hot-toast";

import Sidebar from "../Sidebar/Sidebar";

import "../UserDashboard.css";
import Bottombar from "../Bottombar/Bottombar";
import { useState } from "react";
import { updateProfile } from "../../actions/profile";

const UserProfileCard = () => {
  // const { user } = useSelector((state) => state.user);

  // const dispatch = useDispatch();
  const Navigate = useNavigate();
  const updatepass = () => {
    Navigate("/user_changepass");
  };
  const updateprofile = () => {
    Navigate("/user_updateprofile");
  };

  const { user } = useSelector((state) => state.user);
  const { loading , error , message } = useSelector((state) => state.profile);

  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [phone, setPhone] = useState(user.phone);
  const [address, setAddress] = useState(user.address ? user.address : "");
  const [grade, setGrade] = useState(user.grade ? user.grade : "");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const submitHandler = async (e) => {
  //   e.preventDefault();
  //   await dispatch(updateProfile(name, email, phone, address, grade));
  //   await dispatch(loadUser());
  //   navigate("/user_profile");
  // };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
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

  return (
    <>
      {windowWidth < 767 ? <Bottombar /> : <Sidebar />}

      <section className="home-section">
        <div>
          <div className="container">
            <div class="formbold-main-wrapper">
              <div class="formbold-form-wrapper">
                <form>
                  <div class="formbold-form-title">
                    <h2 class="">Your Profile</h2>
                  </div>

                  <div class="formbold-mb-3">
                    <label for="username" class="formbold-form-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      id="address"
                      disabled
                      class="formbold-form-input"
                    />
                  </div>

                  
                    <div class="formbold-mb-3">
                      <label for="email" class="formbold-form-label">
                        {" "}
                        Email{" "}
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        disabled
                        class="formbold-form-input"
                      />
                    </div>

                    <div class="formbold-mb-3">
                      <label for="phone" class="formbold-form-label">
                        {" "}
                        Phone number{" "}
                      </label>
                      <input
                        type="number"
                        id="phone"
                        value={phone}
                        disabled
                        class="formbold-form-input"
                      />
                    </div>
                  

                  <div class="formbold-mb-3">
                    <label for="address" class="formbold-form-label">
                      User Created
                    </label>
                    <input
                      type="text"
                      id="address"
                      disabled
                      value={user.createdAt.split("T")[0]}
                      class="formbold-form-input"
                    />
                  </div>
                  <div class="formbold-mb-3">
                    <label for="address" class="formbold-form-label">
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      value={address}
                      disabled
                      class="formbold-form-input"
                    />
                  </div>

                  <div class="formbold-mb-3">
                    <label for="grades" class="formbold-form-label">
                      Grades
                    </label>
                    <input
                      type="number"
                      value={grade}
                      id="address"
                      disabled
                      class="formbold-form-input"
                    />
                  </div>

                  <div
                    className="card-buttons-user"
                    style={{ flexDirection: "row" }}>
                    <button
                      type="submit"
                      class="formbold-btn"
                      style={{ background: "#f50057" }}
                      onClick={updateprofile}>
                      Update
                    </button>

                    <button
                      type="submit"
                      class="formbold-btn"
                      onClick={updatepass}>
                      Change Pass
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

//       <div className="blog-card">
//         <div className="card-content">
//           <h3 className="h3">Name : {user.name}</h3>

//           <h3 className="h3">Email : {user.email}</h3>

//           <h3 className="h3">Phone : {user.phone}</h3>
//           <h3 className="h3">Created : {user.createdAt.split("T")[0]}</h3>
//           {user.grade ? (
//             <h3 className="h3">Grade : {user.grade}</h3>
//           ) : (
//             <h3 className="h3">Grade : No data</h3>
//           )}
//           {user.address ? (
//             <h3 className="h3">Address : {user.address}</h3>
//           ) : (
//             <h3 className="h3">Address : No data</h3>
//           )}
// <div className="card-buttons-user">
//   <Button
//     variant="contained"
//     color="secondary"
//     style={{ width: "10vw", marginTop: "20px", fontSize: "12px" }}
//     onClick={updateprofile}
//   >
//     Update Profile
//   </Button>
//   <Button
//     variant="contained"
//     color="primary"
//     style={{ width: "12vw", marginTop: "20px", fontSize: "12px" }}
//     onClick={updatepass}
//   >
//     Change Pass
//   </Button>
// </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default UserProfileCard;

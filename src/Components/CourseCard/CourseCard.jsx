import React from "react";
import "../../assets/css/style.css";
import { IonIcon } from "@ionic/react";
import { Rating } from "@material-ui/lab";
import { useNavigate } from "react-router-dom";
import { people, libraryOutline, timeOutline } from "ionicons/icons";
import { Button } from "@material-ui/core";
import Loader from "../Loader/Loader";
import axios from "axios";
import { useSelector } from "react-redux";
import { server } from "../../store";
import { toast } from "react-hot-toast";
const CourseCard = ({
  poster,
  title,
  category,
  level,
  duration,
  rating,
  users,
  id,
  price,
  details,
  numOfVideos,
  loading,
  isUserCourse,
}) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const options = {
    value: rating,
    readOnly: true,
    precision: 0.5,
  };

  // handeling razor pay
  const handlePay = async () => {
    toast.success("Wait!!! payment in process...");
    const {
      data: { order },
    } = await axios.post(`${server}/checkout`, {
      price,
    });

    // console.log(order);
    // console.log(price, id);
    const {
      data: { key },
    } = await axios.post(`${server}/getkey`);
    // console.log(key);

    var options = {
      key: key,
      // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Vidyayan Eduventure Pvt Ltd",
      description: "Test Transaction",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQFvqR2yqXYzsQ/company-logo_200_200/0/1680119587249?e=1693440000&v=beta&t=fiQMknfmCrszgJ9Z062TFdDes2iTU2g2-Fi-ArhVSss",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      // "handler": function (response){
      //   axios.post(`apipay/paymentVerification`,{
      //     id,user
      //   });
      // },
      callback_url: `${server}/paymentverification?id=${id}&&userName=${user.name}&&userEmail=${user.email}&&mobileNumber=${user.phone}&&paidAmount=${price}`,
      prefill: {
        name: user.name,
        email: user.email,
        contact: user.phone,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {/* <!--- /COURSE --> */}
          <div className="course-card">
            <figure
              className="card-banner img-holder"
              style={{ width: "370", height: "220" }}
            >
              <img
                src={poster.url}
                width="370"
                height="220"
                loading="lazy"
                alt="Build Responsive Real- World Websites with HTML and CSS"
                className="img-cover"
              />
            </figure>

            <div className="abs-badge">
              <IonIcon icon={timeOutline} aria-hidden="true" />

              <span className="span">{duration} Weeks</span>
            </div>

            <div className="card-content">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <span className="badge">{level}</span>
                <span className="badge">{category}</span>
              </div>
              <h3 className="h3 card-title">{title}</h3>

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

                  <span className="span">{numOfVideos} Lessons</span>
                </li>

                <li className="card-meta-item">
                  <IonIcon icon={people} aria-hidden="true" />
                  <span className="span">{`${users}+`} Students</span>
                </li>
              </ul>

              {isUserCourse ? (
                <div className="card-buttons">
                  <Button
                    style={{ width: "100%" }}
                    variant="contained"
                    onClick={() => console.log("start Learning")}
                    color="primary"
                  >
                    Start Learning
                  </Button>
                </div>
              ) : isAuthenticated ? (
                <div className="card-buttons">
                  <Button variant="contained" color="secondary">
                    <a href={details} target="_blank" rel="noopener noreferrer">
                      Details
                    </a>
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handlePay}
                    color="primary"
                  >
                    {price} ₹
                  </Button>
                </div>
              ) : (
                <div className="card-buttons">
                  <Button
                    // style={{ width: "100%" }}
                    variant="contained"
                    color="secondary"
                  >
                    <a href={details} target="_blank" rel="noopener noreferrer">
                      Details
                    </a>
                  </Button>
                  <Button
                    // style={{ width: "100%" }}
                    variant="contained"
                    color="primary"
                    onClick={()=> toast.error("Please Login!!") }
                  >
                    {price} ₹
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

export default CourseCard;

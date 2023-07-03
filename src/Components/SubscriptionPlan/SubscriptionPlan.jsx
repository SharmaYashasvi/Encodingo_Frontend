import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { server } from "../../store";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const cardButtonStyle = {
  border: "2px solid #FF2171",
  borderRadius: "15px",
  margin: "auto",
  marginTop: "10px",
  padding: "0px 15px 0px 15px",
};

const cardStyle = {
  border: "2px solid #FF2171",
  borderRadius: "20px",
  padding: "15px",
  margin: "10px",
  textAlign: "center",
};
const cardSaveStyle = {
  backgroundColor: "#E7B10A",
  fontWeight: "bold",
  color: "black",
  borderRadius: "20px",
  fontSize: "13px",
  width: "50%",
  textAlign: "center",
  margin: "auto",
};
const cardCutStyle = {
  textDecoration: "line-through",
  textDecorationColor: "red",
  fontSize: "20px",
};
const cardPriceStyle = {
  fontWeight: "bold",
  fontSize: "30px",
};

const Card = ({ session, originalPrice, price, isAuthenticated, onClick }) => {
  const savePercentage = Math.ceil(
    ((originalPrice - price) * 100) / originalPrice
  );

  return (
    <div style={cardStyle}>
      <h3>{session} Sessions</h3>
      <p style={cardCutStyle}>₹{originalPrice}</p>
      <p style={cardPriceStyle}>₹{price}</p>
      <span style={cardSaveStyle}>Save {savePercentage}%</span>
      {isAuthenticated ? (
        <button onClick={onClick} style={cardButtonStyle}>
          Subscribe
        </button>
      ) : (
        <button
          onClick={() => toast.error("Please Login!!")}
          style={cardButtonStyle}
        >
          Subscribe
        </button>
      )}
    </div>
  );
};

const SubscriptionPlan = () => {
  const { subscriptionplans } = useSelector((state) => state.subplan);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [selectedPlan, setSelectedPlan] = useState([]);
  const [selectedButton, setSelectedButton] = useState("1");
  const dispatch = useDispatch();

  useEffect(() => {
    handlePlanSelection("1"); // Select 1-month plan by default
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handlePlanSelection = (plan) => {
    setSelectedButton(plan);
    if (plan === "1" || plan === "") {
      setSelectedPlan(subscriptionplans.filter((plan) => plan.duration === 1));
    } else if (plan === "2" || plan === "") {
      setSelectedPlan(subscriptionplans.filter((plan) => plan.duration === 2));
    } else if (plan === "3" || plan === "") {
      setSelectedPlan(subscriptionplans.filter((plan) => plan.duration === 3));
    }
  };

  const handlePay = async (session, price) => {
    toast.success("Wait!!! payment in process...");
    const {
      data: { order },
    } = await axios.post(`${server}/checkout`, {
      price,
    });

    const {
      data: { key },
    } = await axios.post(`${server}/getkey`);

    var options = {
      key: key,
      amount: order.amount,
      currency: "INR",
      name: "Encodingo",
      description: "Test Transaction",
      image:
        "https://media.licdn.com/dms/image/C4D0BAQFtBLGRZheO1g/company-logo_200_200/0/1680117752366?e=1695859200&v=beta&t=_FpoVRBERwBTxlq2nF1K_QDNdAGHv578-hIOYp2rVRo",
      order_id: order.id,
      callback_url: `${server}/paymentverification?userSession=${session}&&userName=${
        user.name
      }&&userEmail=${user.email}&&mobileNumber=${
        user.phone
      }&&paidAmount=${price}&&isSubscriber=${true}`,
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
      <div>
        <h2
          style={{ textAlign: "center", color: "#FF2171", marginTop: "120px" }}
        >
          Subscription Plans
        </h2>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            margin: "0 10px",
            width: "120px",
            height: "50px",
            border: "1px solid #FF2171",
            borderRadius: "10px",
            fontWeight: "bold",
            backgroundColor: selectedButton === "1" ? "#FF2171" : "",
            color: selectedButton === "1" ? "white" : "#FF2171",
          }}
          onClick={() => handlePlanSelection("1")}
        >
          1 Month
        </button>
        <button
          style={{
            margin: "0 10px",
            width: "120px",
            height: "50px",
            border: "1px solid #FF2171",
            borderRadius: "10px",
            fontWeight: "bold",
            backgroundColor: selectedButton === "2" ? "#FF2171" : "",
            color: selectedButton === "2" ? "white" : "#FF2171",
          }}
          onClick={() => handlePlanSelection("2")}
        >
          2 Month
        </button>
        <button
          style={{
            margin: "0 10px",
            width: "120px",
            height: "50px",
            border: "1px solid #FF2171",
            borderRadius: "10px",
            fontWeight: "bold",
            backgroundColor: selectedButton === "3" ? "#FF2171" : "",
            color: selectedButton === "3" ? "white" : "#FF2171",
          }}
          onClick={() => handlePlanSelection("3")}
        >
          3 Month
        </button>
      </div>

      {/* Subscribe Cards */}

      <div
        className="card-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {selectedPlan.length > 0 ? (
          selectedPlan.map((plan) => (
            <Card
              key={plan._id}
              session={plan.sessions}
              originalPrice={plan.originalprice}
              price={plan.discountprice}
              isAuthenticated={isAuthenticated}
              onClick={() => handlePay(plan.sessions, plan.discountprice)}
            />
          ))
        ) : (
          <div style={{ fontSize: "4rem", marginTop: "30px" }}>
            {" "}
            No Plan Found!!{" "}
          </div>
        )}
      </div>
    </>
  );
};

export default SubscriptionPlan;

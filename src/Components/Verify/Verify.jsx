import React, { useState, useEffect } from "react";
import "./Verify.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, verify } from "../../actions/userAction";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const { isVerified, loading, error, isAuthenticated, user } = useSelector(
    (state) => state.user
  );
  
  const [otp, setOtp] = useState("");
  const [showExpiredMessage, setShowExpiredMessage] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let timer;

  let otpExpiry = new Date(user.otp_expiry);
  let currentTime = new Date();
  const [remainingTime, setRemainingTime] = useState(Math.floor((otpExpiry - currentTime) / 1000));
  useEffect(() => {
    const calculateRemainingTime = () => {
      //  const otpExpiry = new Date(user.otp_expiry);
      //  const currentTime = new Date();
      const timeDiffInSeconds = Math.floor((otpExpiry - currentTime) / 1000);

      if (timeDiffInSeconds <= 0) {
        setShowExpiredMessage(true);
      } else {
        setRemainingTime(timeDiffInSeconds);
        startTimer();
      }
    };

    if (user && user.otp_expiry) {
      calculateRemainingTime();
    }
    if(user && user.otp_expiry == null){
      setRemainingTime(2*60*1000)
    }
  }, [user,setShowExpiredMessage]);

  const startTimer = () => {
    timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const handleVerifyClick = (e) => {
    e.preventDefault();
    dispatch(verify(otp));
  };

  const goDashboard = () => {
    navigate("/user_dashboard");
  };

  const goHome = () => {
    dispatch(logout())
    navigate("/");
  };

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (remainingTime <= 0) {
      clearInterval(timer);
      if(user && !user.verified && user.otp_expiry !== null ){
          setShowExpiredMessage(true);
          // setTimeout(() => {
          //   window.location.reload();
            
          // }, 10000);
      }
    }
  }, [remainingTime]);

  return (
    <div className="otp-container">
      <h1>OTP Verification</h1>
      <input
        type="number"
        placeholder="Enter OTP"
        value={otp}
        onChange={handleOtpChange}
      />
      <button onClick={handleVerifyClick}>Verify</button>
      {showExpiredMessage ? (
        <div>
          <p style={{fontSize:'2rem' , marginTop:'2rem' , color:'crimson'}}>Either too late to verify your OTP Or Site refreshed!! Please register again!!</p>
          <button onClick={goHome}>Go Back Home</button>
        </div>
      ) : (
        <>
          {user && !user.verified && (
            <p style={{fontSize:'2rem' , marginTop:'2rem'}}>
              Time remaining: {Math.floor(remainingTime / 60)}:
              {remainingTime % 60}
            </p>
          )}
          {user && user.verified && (<>
            <button onClick={goDashboard}>Dashboard</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Verify;

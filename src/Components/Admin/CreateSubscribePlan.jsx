import React, { Fragment, useEffect, useState } from "react";
import "./CreateCourse.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
// import MetaData from "../layout/MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import AdminSidebar from "./AdminSidebar";
import { toast } from "react-hot-toast";
import { createCourse, createPlan } from "../../actions/admin";
import { useNavigate } from "react-router-dom";

const CreateSubscribePlan = () => {
  const Navigate = useNavigate();
  const [duration, setDuration] = useState("");
  const [sessions, setSessions] = useState([]);
  const [originalprice, setOriginalprice] = useState("");
  const [discountprice, setDiscountprice] = useState("");
  const [selectedSession, setSelectedSession] = useState("");

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector((state) => state.admin);

  const months = [1, 2, 3];

  const handleDurationChange = (e) => {
    const selectedMonth = parseInt(e.target.value);
    setDuration(selectedMonth);

    // Update session options based on selected month
    if (selectedMonth === 1) {
      setSessions([5, 10, 20]);
    } else if (selectedMonth === 2) {
      setSessions([20, 30, 40]);
    } else if (selectedMonth === 3) {
      setSessions([40, 50, 60]);
    } else {
      setSessions([]);
    }
  };


  const handleSessionChange = (e) => {
    const selectedSessionValue = e.target.value;
    // setSessions(Number(selectedSessionValue));
    setSelectedSession(selectedSessionValue);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createPlan(duration, selectedSession, originalprice, discountprice));
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
    <Fragment>
      <div className="admin-dashboard">
        <AdminSidebar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={submitHandler}
          >
            <h1>Create Subscribe Plan</h1>

            <div>
              <AccountTreeIcon />
              <select onChange={handleDurationChange} value={duration}>
                <option value="">Choose Duration</option>
                {months.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>



            {sessions !== null && (
              <div>
                <AccountTreeIcon />
                <select
                  value={selectedSession} // Use the selectedSession state variable here
                  onChange={handleSessionChange}
                >
                  <option value="">Choose Sessions</option>
                  {sessions.length > 0 && sessions.map((session) => (
                    <option key={session} value={session}>
                      {session} Sessions
                    </option>
                  ))}
                </select>
              </div>
            )}




            {/* <div>
              <AccountTreeIcon />
              <select value={sessions} onChange={(e) => setSessions(Number(e.target.value))}>
                <option value="">Choose Sessions</option>
                {sessions.length > 0 && sessions.map((session) => (
                  <option key={session} value={session}>
                    {session} Sessions
                  </option>
                ))}
              </select>
            </div> */}

            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Original Price"
                required
                value={originalprice}
                onChange={(e) => setOriginalprice(e.target.value)}
              />
            </div>

            <div>
              <AttachMoneyIcon />
              <input
                type="number"
                placeholder="Discount Price"
                required
                value={discountprice}
                onChange={(e) => setDiscountprice(e.target.value)}
              />
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default CreateSubscribePlan;

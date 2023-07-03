import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./CourseList.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import { deleteTeacher, getAllSubscriptionPayments } from "../../actions/admin";
import { toast } from "react-hot-toast";
import AdminSidebar from "./AdminSidebar";

const SubscriptionPayment = () => {
  const { subpayments, loading, error, message } = useSelector(
    (state) => state.admin
  );
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  //   const updateHandler = (userId) => {
  //     console.log(userId);
  //     dispatch(updateUserRole(userId));
  //   };
  const deleteButtonHandler = (userId) => {
    dispatch(deleteTeacher(userId));
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

    dispatch(getAllSubscriptionPayments());
  }, [dispatch, error, message]);

  const columns = [
    { field: "id", headerName: "Subscription ID", minWidth: 180, flex: 4 },

    {
      field: "userEmail",
      headerName: "Email",
      minWidth: 200,
      flex: 4,
    },

    {
      field: "userPhone",
      headerName: "Phone",
      minWidth: 200,
      flex: 1,
    },
    {
      field: "userName",
      headerName: "Name",
      minWidth: 150,
      flex: 1,
    },

    {
      field: "paidAmount",
      headerName: "Ammount",
      minWidth: 150,
      flex: 1,
    },

    {
      field: "userSession",
      headerName: "Sessions",
      minWidth: 150,
      flex: 1,
    },

    {
      field: "razorpayOrderId",
      headerName: "Order Id",
      minWidth: 250,
      flex: 2,
    },
    {
      field: "razorpayPaymentId",
      headerName: "Payment Id",
      minWidth: 180,
      flex: 2,
    },
  ];

  const rows = [];

  subpayments &&
  subpayments.forEach((item) => {
      rows.push({
        id: item._id,
        userEmail: item.userEmail,
        userName: item.userName,
        userPhone: item.userPhone,
        paidAmount: item.paidAmount,
        userSession: item.userSession,
        razorpayOrderId: item.razorpayOrderId,
        razorpayPaymentId: item.razorpayPaymentId,
      });
    });

  return (
    <Fragment>
      {/* <MetaData title={`ALL USERS - Admin`} /> */}

      <div className="admin-dashboard">
        <AdminSidebar />
        <div className="courseListContainer">
          <h1 id="courseListHeading">ALL PAYMENTS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="courseListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default SubscriptionPayment;

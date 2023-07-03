import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./CourseList.css";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
// import MetaData from "../layout/MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { deletePlan, deleteTeacher, getAllPlansAdmin, getAllTeachersAdmin} from "../../actions/admin";
import { toast } from "react-hot-toast";
import AdminSidebar from "./AdminSidebar";
import { getAllTeachers } from "../../actions/teacher";

const PlanList = () => {
  const { plans, loading, error, message } = useSelector(
    (state) => state.admin
  );
  const { user } = useSelector((state) => state.user);
  
  const dispatch = useDispatch();

//   const updateHandler = (userId) => {
//     console.log(userId);
//     dispatch(updateUserRole(userId));
//   };
  const deleteButtonHandler = (planId) => {
    dispatch(deletePlan(planId));
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

    dispatch(getAllPlansAdmin());
  }, [dispatch, error, message]);

  const columns = [
    { field: "id", headerName: "Plan ID", minWidth: 180, flex: 0.4 },

    {
        field: "duration",
        headerName: "Duration",
        minWidth: 150,
        flex: 0.3,
      },

      {
        field: "sessions",
        headerName: "Sessions",
        minWidth: 150,
        flex: 0,
      },

      {
        field: "originalprice",
        headerName: "Original Price",
        minWidth: 150,
        flex: 0,
      },

      {
        field: "discountprice",
        headerName: "Discount Price",
        minWidth: 150,
        flex: 0,
      },
    
    

   

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Button
            onClick={() =>
              deleteButtonHandler(params.getValue(params.id, "id"))
            }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];

  plans &&
    plans.forEach((item) => {
      rows.push({
        id: item._id,
        duration: item.duration,
        sessions: item.sessions,
        originalprice: item.originalprice,
        discountprice: item.discountprice,
      });
    });

  return (
    <Fragment>
      {/* <MetaData title={`ALL USERS - Admin`} /> */}

      <div className="admin-dashboard">
        <AdminSidebar />
        <div className="courseListContainer">
          <h1 id="courseListHeading">ALL Plans</h1>

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

export default PlanList;

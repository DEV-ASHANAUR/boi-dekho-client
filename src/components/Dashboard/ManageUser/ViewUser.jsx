import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Tooltip, Typography } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { Delete } from "@mui/icons-material";
import GavelIcon from "@mui/icons-material/Gavel";
import toast, { Toaster } from "react-hot-toast";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import {
  fetchUsers,
  removeUser,
  resetState,
  updateUser,
} from "../../../features/User/UserSlice";

export default function ViewUser() {
  const { users } = useSelector((state) => state.users);
  const { currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // console.log("users", users);

  const rows = users?.map((item, index) => {
    return {
      id: item._id,
      ...item,
    };
  });

  const handleDelete = (id) => {
    if (id === currentUser?._id) {
      toast.error("You can to delete yourself!");
    } else {
      if (window.confirm("Delete! Are you sure!")) {
        dispatch(removeUser(id));
        toast.success("User deleted Successfully!");
        dispatch(resetState());
      } else {
        console.log("cancle");
      }
    }
  };

  const handleAdmin = (status, id) => {
    if (id === currentUser?._id) {
      toast.error("You can to change your role!");
    } else {
      const filteredData = users.find((item) => item._id === id);
      let data = { ...filteredData, isAdmin: status };
      dispatch(updateUser({ id, data }));
      toast.success("Role changed successfully!");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "username", headerName: "Full Name", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "isVarified", headerName: "Verified", width: 100 },
    {
      field: "isAdmin",
      headerName: "Role",
      width: 100,
      renderCell: (params) => {
        return <>{params.value === true ? "Admin" : "User"}</>;
      },
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            {params.row.isAdmin === true ? (
              <Tooltip title="Remove Admin">
                <IconButton>
                  <PersonRemoveIcon
                    onClick={() => handleAdmin(false, params.id)}
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Make Admin">
                <IconButton>
                  <GavelIcon onClick={() => handleAdmin(true, params.id)} />
                </IconButton>
              </Tooltip>
            )}

            <Tooltip title="Delete this author">
              <IconButton sx={{ color: "red" }}>
                <Delete onClick={() => handleDelete(params.id)} />
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="row bg-white py-3">
        <div className="col-md-12">
          <Typography
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Users List</Typography>
            {/* <IconButton
              sx={{ mr: 1 }}
              onClick={() => navigate("/dashboard/create-author")}
            >
              <AddIcon />
            </IconButton> */}
          </Typography>
          <div style={{ height: 400, width: "100%", marginTop: "16px" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
}

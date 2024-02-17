import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  removeCategory,
  resetState,
} from "../../../features/Category/CategorySlice";
import { Delete, Edit } from "@mui/icons-material";
import toast, { Toaster } from "react-hot-toast";

export default function ViewCategory() {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // console.log("categories", categories);

  const rows = categories?.map((item, index) => {
    return {
      id: item._id,
      category: item.category,
    };
  });
  //   console.log("row", rows);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Delete! Are you sure!")) {
      dispatch(removeCategory(id));
      toast.success("Category deleted Successfully!");
      dispatch(resetState());
    } else {
      console.log("cancle");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 250 },
    { field: "category", headerName: "Category", width: 130 },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Tooltip title="Edit this room">
              <IconButton>
                <Edit
                  onClick={() =>
                    navigate(`/dashboard/manage-category/${params.id}`)
                  }
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete this room">
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
            <Typography variant="h5">Category List</Typography>
            <IconButton
              sx={{ mr: 1 }}
              onClick={() => navigate("/dashboard/create-category")}
            >
              <AddIcon />
            </IconButton>
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

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Delete, Edit } from "@mui/icons-material";
import toast, { Toaster } from "react-hot-toast";
import {
  fetchSubCategories,
  removeSubCategory,
  resetState,
} from "../../../features/SubCategory/SubCategorySlice";

export default function ViewSubCategory() {
  const { subcategories } = useSelector((state) => state.subCategory);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchSubCategories());
  }, [dispatch]);

  // console.log("sub categories", subcategories);

  const rows = subcategories?.map((item, index) => {
    return {
      id: item._id,
      category: item.category,
      subCategory: item.subCategory,
    };
  });
  //   console.log("row", rows);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Delete! Are you sure!")) {
      dispatch(removeSubCategory(id));
      toast.success("Sub Category deleted Successfully!");
      dispatch(resetState());
    } else {
      console.log("cancle");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 250 },
    { field: "category", headerName: "Category", width: 200 },
    { field: "subCategory", headerName: "Sub Category", width: 200 },
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
                    navigate(`/dashboard/manage-sub-category/${params.id}`)
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
            <Typography variant="h5">Sub Category List</Typography>
            <IconButton
              sx={{ mr: 1 }}
              onClick={() => navigate("/dashboard/create-sub-category")}
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

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../features/Category/CategorySlice";
import { Delete, Edit } from "@mui/icons-material";

const columns = [
  { field: "_id", headerName: "ID", width: 70 },
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
              <Edit />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete this room">
            <IconButton sx={{color:"red"}}
            >
              <Delete onClick={()=> console.log("id",params.id)} />
            </IconButton>
          </Tooltip>
        </>
      );
    },
  },
];

export default function ViewCategory() {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  console.log("categories", categories);

  const rows = categories?.map((item, index) => {
    return {
      id: item._id,
      category: item.category,
    };
  });
//   console.log("row", rows);
  const navigate = useNavigate();
  return (
    <>
      <Typography
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Category List</Typography>
        <IconButton sx={{ mr: 1 }} onClick={() => navigate("/dashboard/create-category")}>
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
    </>
  );
}

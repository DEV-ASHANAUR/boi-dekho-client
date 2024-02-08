import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit } from "@mui/icons-material";
import toast,{Toaster} from "react-hot-toast";
import { fetchManageBooks, removeBook, resetState } from "../../../features/books/ManageBooksSlice";

export default function ViewBook() {
  const { books } = useSelector((state) => state.managebooks);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchManageBooks());
  }, [dispatch]);

  // console.log("books", books);

  const rows = books?.map((item, index) => {
    return {
      id: item._id,
      ...item
    };
  });
console.log("row", rows);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Delete! Are you sure!")) {
      dispatch(removeBook(id));
      toast.success("Book deleted Successfully!");
      dispatch(resetState());
    } else {
      console.log("cancle")
    }
  }


  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "bookTitle", headerName: "Book Title", width: 150 },
    { field: "publisher", headerName: "publisher", width: 150 },
    { field: "categories", headerName: "category", width: 150 },
    { field: "price", headerName: "Price (tk)", width: 100 },
    { field: "quantity", headerName: "Available", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Tooltip title="Edit this book">
              <IconButton>
                <Edit onClick={()=> navigate(`/dashboard/manage-book/${params.id}`)} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete this book">
              <IconButton sx={{color:"red"}}
              >
                <Delete onClick={()=> handleDelete(params.id)} />
              </IconButton>
            </Tooltip>
          </>
        );
      },
    },
  ];

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
        <Typography variant="h5">Books List</Typography>
        <IconButton sx={{ mr: 1 }} onClick={() => navigate("/dashboard/create-book")}>
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
      <Toaster />
    </>
  );
}

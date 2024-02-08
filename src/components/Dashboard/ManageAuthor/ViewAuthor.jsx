import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit } from "@mui/icons-material";
import toast,{Toaster} from "react-hot-toast";
import { fetchAuthors, removeAuthor, resetState } from "../../../features/Author/AuthorSlice";



export default function ViewAuthor() {
  const { authors } = useSelector((state) => state.author);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAuthors());
  }, [dispatch]);

  // console.log("categories", categories);

  const rows = authors?.map((item, index) => {
    return {
      id: item._id,
      author: item.author,
    };
  });
//   console.log("row", rows);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Delete! Are you sure!")) {
      dispatch(removeAuthor(id));
      toast.success("Author deleted Successfully!");
      dispatch(resetState());
    } else {
      console.log("cancle")
    }
  }


  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "author", headerName: "Author", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Tooltip title="Edit this author">
              <IconButton>
                <Edit onClick={()=> navigate(`/dashboard/manage-author/${params.id}`)} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete this author">
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
        <Typography variant="h5">Author List</Typography>
        <IconButton sx={{ mr: 1 }} onClick={() => navigate("/dashboard/create-author")}>
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

import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit } from "@mui/icons-material";
import toast,{Toaster} from "react-hot-toast";
import { fetchPublishers, removePublisher, resetState } from "../../../features/Publisher/PublisherSlice";




export default function ViewPublisher() {
  const { publishers } = useSelector((state) => state.publisher);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPublishers());
  }, [dispatch]);

  // console.log("categories", categories);

  const rows = publishers?.map((item, index) => {
    return {
      id: item._id,
      publisher: item.publisher,
    };
  });
//   console.log("row", rows);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Delete! Are you sure!")) {
      dispatch(removePublisher(id));
      toast.success("Publisher deleted Successfully!");
      dispatch(resetState());
    } else {
      console.log("cancle")
    }
  }


  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "publisher", headerName: "Publisher", width: 200 },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Tooltip title="Edit this publisher">
              <IconButton>
                <Edit onClick={()=> navigate(`/dashboard/manage-publisher/${params.id}`)} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete this publisher">
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
        <Typography variant="h5">Publisher List</Typography>
        <IconButton sx={{ mr: 1 }} onClick={() => navigate("/dashboard/create-publisher")}>
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

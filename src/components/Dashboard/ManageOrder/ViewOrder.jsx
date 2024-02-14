import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton, Tooltip, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Delete, Edit } from "@mui/icons-material";
import toast, { Toaster } from "react-hot-toast";
import { fetchAllOrders, removeOrder, restOrderMessage } from "../../../features/order/OrderSlice";
import Moment from "react-moment";

export default function ViewOrder() {
  const { orders } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchAllOrders());
  }, [dispatch]);

  // console.log("books", books);

  const rows = orders?.map((item, index) => {
    return {
      id: item._id,
      ...item,
    };
  });
  console.log("row", rows);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (window.confirm("Delete! Are you sure!")) {
      dispatch(removeOrder(id));
      toast.success("Order deleted Successfully!");
      dispatch(restOrderMessage());
    } else {
      console.log("cancle");
    }
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "tranId", headerName: "TranId", width: 150 },
    {
      field: "createdAt ",
      headerName: "Order Date",
      width: 100,
      renderCell: (params) => {
        return <Moment format="DD-MMM-YYYY">{params.row.createdAt}</Moment>;
      },
    },
    { field: "paymentMethod", headerName: "Payment Method", width: 170 },
    { field: "payment", headerName: "Payment", width: 80 },
    { field: "total", headerName: "Total Price(tk)", width: 100 },
    { field: "status", headerName: "Status", width: 100 },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Tooltip title="Change Status">
              <IconButton>
                <Edit
                  onClick={() =>
                    navigate(`/dashboard/manage-order/${params.id}`)
                  }
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete this order">
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
      <Typography
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Order List</Typography>
        <IconButton
          sx={{ mr: 1 }}
          onClick={() => navigate("/dashboard/create-book")}
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
      <Toaster />
    </>
  );
}

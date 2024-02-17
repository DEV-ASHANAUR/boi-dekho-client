import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import Person2Icon from "@mui/icons-material/Person2";
import PublishIcon from "@mui/icons-material/Publish";
import MonthlySalesChart from "../../../components/Dashboard/SalesReport/MonthlySalesChart";
import SalesPieChart from "../../../components/Dashboard/SalesReport/SalesPieChart";
import PendingIcon from "@mui/icons-material/Pending";
import CheckIcon from "@mui/icons-material/Check";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAuthors } from "../../../features/Author/AuthorSlice";
import { fetchPublishers } from "../../../features/Publisher/PublisherSlice";
import { fetchCategories } from "../../../features/Category/CategorySlice";
import { fetchManageBooks } from "../../../features/books/ManageBooksSlice";
import { fetchSalesData,fetchAllOrders, fetchDiffSalesData } from "../../../features/order/OrderSlice";
const Home = () => {
  const { authors } = useSelector((state) => state.author);
  const { publishers } = useSelector((state) => state.publisher);
  const { categories } = useSelector((state) => state.category);
  const { books } = useSelector((state) => state.managebooks);
  const { orders,salesData,diffSalesData } = useSelector((state) => state.order);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthors());
    dispatch(fetchPublishers());
    dispatch(fetchCategories());
    dispatch(fetchManageBooks());
    dispatch(fetchSalesData());
    dispatch(fetchAllOrders());
    dispatch(fetchDiffSalesData());
  }, [dispatch]);

  const pending = orders?.filter((item)=> item?.status === "pending").length;
  const confirmed = orders?.filter((item)=> item?.status === "confirmed").length;
  const processing = orders?.filter((item)=> item?.status === "processing").length;
  const delivered = orders?.filter((item)=> item?.status === "delivered").length;
  return (
    <>
      <div className="mb-3">
        <h4 className="m-0 d-flex align-items-center gap-3">
          <DashboardIcon /> Dashboard
        </h4>
      </div>
      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Total Publisher
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {publishers?.length}
                  </div>
                </div>
                <div className="col-auto">
                  <PublishIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Total Author
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {authors?.length}
                  </div>
                </div>
                <div className="col-auto">
                  <Person2Icon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Total Category
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {categories?.length}
                  </div>
                </div>
                <div className="col-auto">
                  <CategoryIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Total book
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {books?.length}
                  </div>
                </div>
                <div className="col-auto">
                  <LibraryBooksIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Total Pending
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {pending}
                  </div>
                </div>
                <div className="col-auto">
                  <PendingIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Total Confirmed
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {confirmed}
                  </div>
                </div>
                <div className="col-auto">
                  <CheckIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Total Processing
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {processing}
                  </div>
                </div>
                <div className="col-auto">
                  <RunningWithErrorsIcon />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Total Delivered
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">
                    {delivered}
                  </div>
                </div>
                <div className="col-auto">
                  <AllInboxIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row bg-white">
        <div className="col-md-6">
          <h4 className="my-3">Monthly Sales Chart</h4>
          <MonthlySalesChart data={salesData} />
        </div>
        <div className="col-md-6">
          <h4 className="my-3">Sales Pie Chart</h4>
          <SalesPieChart data={diffSalesData} />
        </div>
      </div>
    </>
  );
};

export default Home;

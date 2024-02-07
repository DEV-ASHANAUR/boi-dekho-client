import { IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories
} from "../../../features/Category/CategorySlice";
import { useEffect } from "react";
import { createSubCategory, resetState } from "../../../features/SubCategory/SubCategorySlice";

const AddSubCategory = () => {
  const { categories } = useSelector((state) => state.category);
  const { isLoading,isError,message,isSuccess } = useSelector((state) => state.subCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      category: "",
    },
  });

  // console.log("status",isLoading,isSuccess,message)

  const handleAddCategory = (data) => {
    console.log("first", data);
    dispatch(createSubCategory(data));
  };

  if (!isLoading && isSuccess) {
    toast.success(message);
    dispatch(resetState());
  }

  if (!isLoading && isError) {
    // toast.error(error);
    dispatch(resetState());
  }


  const navigate = useNavigate();
  return (
    <>
      <div className="checkout-main-area">
        <div className="container">
          <Typography
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5"></Typography>
            <IconButton
              sx={{ mr: 1 }}
              onClick={() => navigate("/dashboard/manage-sub-category")}
            >
              <CalendarViewDayIcon />
            </IconButton>
          </Typography>
          <div className="row">
            <div className="col-md-8">
              <div className="pt-4 px-3">
                <h4 className="mb-4">Create Sub Category</h4>
                <form onSubmit={handleSubmit(handleAddCategory)}>
                  <div class="row">
                    <div className="col-md-6">
                      <label htmlFor="category">Category</label>
                      <select
                        id="category"
                        className="form-control mt-2"
                        {...register("category", {
                          required: "Category is required!",
                        })}
                      >
                        <option value="" disabled>
                          Select a category
                        </option>
                        {categories?.map((category) => (
                          <option key={category._id} value={category.category}>
                            {category.category}
                          </option>
                        ))}
                      </select>
                      {errors.category && (
                        <span className="error_message" role="alert">
                          {errors.category?.message}
                        </span>
                      )}
                    </div>
                    <div class="col-md-6">
                      <label htmlFor="">Title</label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        name="subcategory"
                        placeholder="Enter Name"
                        {...register("subCategory", {
                          required: "sub category is required!",
                          minLength: {
                            value: 3,
                            message: "Min length is 3!",
                          },
                        })}
                      />
                      {errors.subCategory && (
                        <span className="error_message" role="alert">
                          {errors.subCategory?.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    className="btn btn-flat btn-dark d-block mt-2 mb-3 text-capitalize"
                    type="submit"
                    disabled={isLoading}
                  >
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Toaster />
        </div>
      </div>
    </>
  );
};

export default AddSubCategory;

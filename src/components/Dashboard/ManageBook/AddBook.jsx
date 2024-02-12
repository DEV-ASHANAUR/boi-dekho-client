import { IconButton, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  createPublisher,
  fetchPublishers,
  resetState,
} from "../../../features/Publisher/PublisherSlice";
import { Select } from "antd";
import { useEffect, useRef, useState } from "react";
import { fetchCategories } from "../../../features/Category/CategorySlice";
import { fetchSubCategories } from "../../../features/SubCategory/SubCategorySlice";
import { fetchAuthors } from "../../../features/Author/AuthorSlice";
import JoditEditor from "jodit-react";
import axios from "axios";

const AddBook = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.publisher
  );
  const { authors } = useSelector((state) => state.author);
  const { publishers } = useSelector((state) => state.publisher);
  const { categories } = useSelector((state) => state.category);
  const { subcategories } = useSelector((state) => state.subCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAuthors());
    dispatch(fetchPublishers());
    dispatch(fetchCategories());
    dispatch(fetchSubCategories());
  }, [dispatch]);

  const authorsOptions = authors?.map((item) => {
    return {
      label: item.author,
      value: item.author,
    };
  });

  const publishersOptions = publishers?.map((item) => {
    return {
      label: item.publisher,
      value: item.publisher,
    };
  });

  const categoriesOptions = categories?.map((item) => {
    return {
      label: item.category,
      value: item.category,
    };
  });

  const subcategoriesOptions = subcategories?.map((item) => {
    return {
      label: item.subCategory,
      value: item.subCategory,
    };
  });

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm({
    defaultValues: {
      publisher: "",
    },
  });

  const onImageChange = async (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      if (img) {
        const data = new FormData();
        data.append("file", img);
        data.append("upload_preset", "waeorw8w");
        try {
          const res = await axios.post(
            "https://api.cloudinary.com/v1_1/dmgagw7ec/image/upload",
            data
          );
          const imageUrl = res.data.url;
          setValue("coverImage", imageUrl);
          setCoverImage(imageUrl);
        } catch (error) {
          console.log(error);
          toast.error("someting went worng!");
        }
      }
    }
  };
  
  // console.log("status",isLoading,isSuccess,message)

  const handleAddCategory = (data) => {
    console.log("value", data);
    // dispatch(createPublisher(data));
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
              onClick={() => navigate("/dashboard/manage-publisher")}
            >
              <CalendarViewDayIcon />
            </IconButton>
          </Typography>
          <div className="row">
            <div className="col-md-12">
              <div className="pt-4 px-3">
                <h4 className="mb-4">Create Book</h4>
                <div dangerouslySetInnerHTML={{ __html: content }} />
                <form onSubmit={handleSubmit(handleAddCategory)}>
                  <div class="row">
                    <div class="col-md-4 mt-2">
                      <label htmlFor="">Book title</label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        name="publisher"
                        placeholder="Enter Name"
                        {...register("bookTitle", {
                          required: "Book Title is required!",
                          minLength: {
                            value: 3,
                            message: "Min length is 3!",
                          },
                        })}
                      />
                      {errors.bookTitle && (
                        <span className="error_message" role="alert">
                          {errors.bookTitle?.message}
                        </span>
                      )}
                    </div>
                    <div class="col-md-4 mt-2">
                      <label htmlFor="">Tags</label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        name="publisher"
                        placeholder="Enter Tag with (,)"
                        {...register("tag")}
                      />
                      {errors.tag && (
                        <span className="error_message" role="alert">
                          {errors.tag?.message}
                        </span>
                      )}
                    </div>
                    <div class="col-md-4 mt-2">
                      <label htmlFor="">Book Price</label>
                      <input
                        type="number"
                        className="form-control mt-2"
                        name="price"
                        placeholder="Enter price"
                        {...register("price", {
                          required: "Price is required!",
                        })}
                      />
                      {errors.price && (
                        <span className="error_message" role="alert">
                          {errors.price?.message}
                        </span>
                      )}
                    </div>
                    <div class="col-md-4 mt-2">
                      <label htmlFor="">Discount</label>
                      <input
                        type="number"
                        className="form-control mt-2"
                        name="price"
                        placeholder="Enter discount"
                        {...register("price")}
                      />
                      {errors.discount && (
                        <span className="error_message" role="alert">
                          {errors.discount?.message}
                        </span>
                      )}
                    </div>
                    <div class="col-md-4 mt-2">
                      <label htmlFor="">Quantity</label>
                      <input
                        type="number"
                        className="form-control mt-2"
                        name="price"
                        placeholder="Enter Quantity"
                        {...register("quantity", {
                          required: "Quantity is required!",
                          minLength: {
                            value: 1,
                            message: "Min length is 1!",
                          },
                        })}
                      />
                      {errors.quantity && (
                        <span className="error_message" role="alert">
                          {errors.quantity?.message}
                        </span>
                      )}
                    </div>
                    <div class="col-md-4 mt-2">
                      <label htmlFor="">Total page</label>
                      <input
                        type="number"
                        className="form-control mt-2"
                        name="totalPageCount"
                        placeholder="Page Number"
                        {...register("totalPageCount", {
                          required: "Total Page is required!",
                        })}
                      />
                      {errors.totalPageCount && (
                        <span className="error_message" role="alert">
                          {errors.totalPageCount?.message}
                        </span>
                      )}
                    </div>

                    <div class="col-md-4 mt-2">
                      <label htmlFor="">Cover Type</label>
                      <input
                        type="number"
                        className="form-control mt-2"
                        name="coverType"
                        placeholder="Enter price"
                        {...register("coverType", {
                          required: "Total Page is required!",
                        })}
                      />
                      {errors.coverType && (
                        <span className="error_message" role="alert">
                          {errors.coverType?.message}
                        </span>
                      )}
                    </div>

                    <div class="col-md-4 mt-2">
                      <label htmlFor="">language</label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        name="coverType"
                        placeholder="Enter language"
                        {...register("language", {
                          required: "Total Page is required!",
                        })}
                      />
                      {errors.language && (
                        <span className="error_message" role="alert">
                          {errors.language?.message}
                        </span>
                      )}
                    </div>

                    <div class="col-md-4 mt-2">
                      <label htmlFor="">Version</label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        name="version"
                        placeholder="Book version"
                        {...register("version", {
                          required: "Version is required!",
                        })}
                      />
                      {errors.version && (
                        <span className="error_message" role="alert">
                          {errors.version?.message}
                        </span>
                      )}
                    </div>
                    <div class="col-md-4 mt-2">
                      <label htmlFor="">Publish Date</label>
                      <input
                        type="date"
                        className="form-control mt-2"
                        name="publishDate"
                        placeholder="publish Date"
                        {...register("publishDate", {
                          required: "Publish Date is required!",
                        })}
                      />
                      {errors.publishDate && (
                        <span className="error_message" role="alert">
                          {errors.publishDate?.message}
                        </span>
                      )}
                    </div>
                    <div class="col-md-4 mt-2">
                      <label htmlFor="">Select Author</label>
                      <br />
                      <Select
                        mode="multiple"
                        style={{ width: "100%" }}
                        placeholder="Select Authors.."
                        name="authors"
                        className="mt-2"
                        onChange={(value) => setValue("authors", value)}
                        options={authorsOptions}
                      />
                      {errors.authors && (
                        <span className="error_message" role="alert">
                          {errors.authors?.message}
                        </span>
                      )}
                    </div>
                    <div class="col-md-4 mt-2">
                      <label htmlFor="">Select publisher</label>
                      <br />
                      <Select
                        mode="multiple"
                        style={{ width: "100%" }}
                        placeholder="Select publisher.."
                        name="publisher"
                        className="mt-2"
                        onChange={(value) => setValue("publisher", value)}
                        options={publishersOptions}
                      />
                      {errors.publisher && (
                        <span className="error_message" role="alert">
                          {errors.publisher?.message}
                        </span>
                      )}
                    </div>
                    <div class="col-md-4 mt-2">
                      <label htmlFor="">Select Category</label>
                      <br />
                      <Select
                        mode="multiple"
                        style={{ width: "100%" }}
                        placeholder="Select categories.."
                        name="categories"
                        className="mt-2"
                        onChange={(value) => setValue("categories", value)}
                        options={categoriesOptions}
                      />
                      {errors.categories && (
                        <span className="error_message" role="alert">
                          {errors.categories?.message}
                        </span>
                      )}
                    </div>

                    <div class="col-md-4 mt-2">
                      <label htmlFor="">Select Sub Category</label>
                      <br />
                      <Select
                        mode="multiple"
                        style={{ width: "100%" }}
                        placeholder="Select Sub categories.."
                        name="subcategories"
                        className="mt-2"
                        onChange={(value) => setValue("subCategories", value)}
                        options={subcategoriesOptions}
                      />
                      {errors.subCategories && (
                        <span className="error_message" role="alert">
                          {errors.subCategories?.message}
                        </span>
                      )}
                    </div>
                    <div className="col-md-4">
                      <label htmlFor="" className="my-2">
                        Cover Image
                      </label>
                      <input
                        type="file"
                        name="profileImage"
                        onChange={onImageChange}
                      />
                    </div>

                    <div class="col-md-4 mt-2">
                      <label htmlFor="">Book preview pdf url</label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        name="preview"
                        placeholder="Enter preview url"
                        {...register("preview", {
                          required: "Book preview is required!",
                        })}
                      />
                      {errors.preview && (
                        <span className="error_message" role="alert">
                          {errors.preview?.message}
                        </span>
                      )}
                    </div>

                    <div className="col-md-4 my-2">
                      {coverImage && (
                        <>
                          <label htmlFor="" className="my-2">
                            Preview Cover Image
                          </label>
                          <img
                            class="img-fluid"
                            src={coverImage}
                            alt="coverImage"
                          />
                        </>
                      )}
                    </div>


                    <div class="col-md-12 mt-2">
                      <label htmlFor="" className="my-2">
                        Enter Product Description
                      </label>
                      <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={(newContent) =>
                          setValue("description", newContent)
                        }
                      />
                    </div>
                  </div>
                  <button
                    className="btn btn-flat btn-dark d-block my-3 mb-3 text-capitalize"
                    onClick={handleAddCategory}
                    disabled={isLoading}
                  >
                    Create
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

export default AddBook;

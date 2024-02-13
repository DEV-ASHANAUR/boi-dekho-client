import { IconButton, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchPublishers } from "../../../features/Publisher/PublisherSlice";
import { DatePicker, Select } from "antd";
import { useEffect, useRef, useState } from "react";
import { fetchCategories } from "../../../features/Category/CategorySlice";
import { fetchSubCategories } from "../../../features/SubCategory/SubCategorySlice";
import { fetchAuthors } from "../../../features/Author/AuthorSlice";
import JoditEditor from "jodit-react";
import axios from "axios";
import { Row, Space, Spin } from "antd";
import {
  resetState,
  updateBook,
} from "../../../features/books/ManageBooksSlice";
import axoisInstance from "../../../utils/axois";
import moment from "moment";

const UpdateBook = () => {
  const editor = useRef(null);
  const [loading, setIsLoading] = useState(false);
  const [bookData, setBookData] = useState({});
  const [content, setContent] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const { bookId } = useParams();
  const [selectedPublishers, setSelectedPublishers] = useState([]);
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState([]);
  const { isLoading, isError, message, isSuccess, error } = useSelector(
    (state) => state.managebooks
  );
  const { authors } = useSelector((state) => state.author);
  const { publishers } = useSelector((state) => state.publisher);
  const { categories } = useSelector((state) => state.category);
  const { subcategories } = useSelector((state) => state.subCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPublisherIdById = async (id) => {
      setIsLoading(true);
      try {
        const result = await axoisInstance.get(`/book/${id}`);
        if (result?.data) {
          setBookData(result.data.book);
          setTimeout(() => {
            setIsLoading(false);
          }, 2000);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchPublisherIdById(bookId);
  }, [bookId]);

  // console.log("selectedSubCategories", selectedSubCategories);

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

  useEffect(() => {
    // Set default values after data is fetched

    setValue("bookTitle", bookData.bookTitle);
    // const tag = bookData.tag.
    setValue("tag", bookData.tag?.toString());
    setValue("price", bookData.price);
    setValue("totalPageCount", bookData.totalPageCount);
    setValue("coverType", bookData.coverType);
    setValue("discount", bookData.discount);
    setValue("preOrder", bookData.preOrder);
    setValue("language", bookData.language);
    setValue("version", bookData.version);
    setValue("quantity", bookData.quantity);
    setValue("publishDate", bookData.publishDate);
    setValue("featured", bookData.featured);
    setValue("preview", bookData.preview);
    setValue("coverImage", bookData.coverImage);
    setValue("publisher", bookData.publisher);
    setValue("authors", bookData.authors);
    setValue("categories", bookData.categories);
    setValue("subCategories", bookData.subCategories);

    setSelectedPublishers(
      bookData.publisher?.map((item) => {
        return {
          label: item,
          value: item,
        };
      })
    );
    setSelectedAuthors(
      bookData.authors?.map((item) => {
        return {
          label: item,
          value: item,
        };
      })
    );
    setSelectedCategories(
      bookData.categories?.map((item) => {
        return {
          label: item,
          value: item,
        };
      })
    );
    setSelectedSubCategories(
      bookData.subCategories?.map((item) => {
        return {
          label: item,
          value: item,
        };
      })
    );

    // setSelectedSubCategories(sub);
    setCoverImage(bookData.coverImage);
    setContent(bookData.description);
  }, [
    loading,
    setValue,
    bookData.bookTitle,
    bookData.tag,
    bookData.price,
    bookData.totalPageCount,
    bookData.coverType,
    bookData.discount,
    bookData.preOrder,
    bookData.language,
    bookData.version,
    bookData.quantity,
    bookData.publishDate,
    bookData.featured,
    bookData.categories,
    bookData.subCategories,
    bookData.authors,
    bookData.publisher,
    bookData.preview,
    bookData.coverImage,
    bookData.description,
  ]);

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

  const handleBook = (data) => {
    data.tag = data.tag.split(",");
    data.price = parseInt(data.price);
    data.totalPageCount = parseInt(data.totalPageCount);
    data.discount = parseInt(data.discount);
    data.quantity = parseInt(data.quantity);

    dispatch(updateBook({ id: bookId, data }));
  };

  if (!isLoading && isSuccess) {
    toast.success(message);
    dispatch(resetState());
  }

  if (!isLoading && isError) {
    toast.error(error);
    dispatch(resetState());
  }
  const navigate = useNavigate();

  if (loading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  } else {
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
                onClick={() => navigate("/dashboard/manage-book")}
              >
                <CalendarViewDayIcon />
              </IconButton>
            </Typography>
            <div className="row">
              <div className="col-md-12">
                <div className="pt-4 px-3">
                  <h4 className="mb-4">Update Book</h4>
                  {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
                  <form onSubmit={handleSubmit(handleBook)}>
                    <div class="row">
                      <div class="col-md-4 mt-2">
                        <label htmlFor="">Book title</label>
                        <input
                          type="text"
                          className="form-control mt-2"
                          name="bookTitle"
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
                          name="tag"
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
                          {...register("discount")}
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
                          type="text"
                          className="form-control mt-2"
                          name="coverType"
                          placeholder="Enter cover type"
                          {...register("coverType", {
                            required: "Cover type is required!",
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
                        <br />
                        <DatePicker
                          style={{ width: "100%" }}
                          onChange={(value) => setValue("publishDate", value)}
                          value={moment(bookData.publishDate)}
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
                          defaultValue={selectedAuthors}
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
                          defaultValue={selectedPublishers}
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
                          defaultValue={selectedCategories}
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
                          // defaultValue={[{label:"History",value:"History"}]}
                          defaultValue={selectedSubCategories}
                        />
                        {errors.subCategories && (
                          <span className="error_message" role="alert">
                            {errors.subCategories?.message}
                          </span>
                        )}
                      </div>
                      <div class="col-md-4 mt-2">
                        <label htmlFor="">Pre Order</label>
                        <br />
                        <Select
                          style={{ width: "100%" }}
                          placeholder="select one"
                          name="preOrder"
                          className="mt-2"
                          onChange={(value) => setValue("preOrder", value)}
                          options={[
                            { label: "True", value: true },
                            { label: "Fasle", value: false },
                          ]}
                          defaultValue={bookData.preOrder}
                        />
                        {errors.preOrder && (
                          <span className="error_message" role="alert">
                            {errors.preOrder?.message}
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

                      <div className="col-md-4 my-2">
                        {coverImage && (
                          <>
                            <label htmlFor="" className="my-2">
                              Preview Cover Image
                            </label>
                            <br />
                            <img
                              class="img-fluid"
                              src={coverImage}
                              alt="coverImage"
                            />
                          </>
                        )}
                      </div>

                      <div class="col-md-4 mt-2">
                        <label htmlFor="">Book preview pdf url</label>
                        <input
                          type="url"
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
                      type="submit"
                      className="btn btn-flat btn-dark d-block my-3 mb-3 text-capitalize"
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
  }
};

export default UpdateBook;

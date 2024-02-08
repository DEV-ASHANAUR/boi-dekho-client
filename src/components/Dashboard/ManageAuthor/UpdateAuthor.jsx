import { IconButton, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axoisInstance from "../../../utils/axois";
import { resetState, updateAuthor } from "../../../features/Author/AuthorSlice";

const UpdateAuthor = () => {
  const [authorData, setAuthorData] = useState({});
  const [loading, setIsLoading] = useState(false);
  const { authorId } = useParams();
  const { isLoading, isError, message, isSuccess } = useSelector(
    (state) => state.author
  );

  useEffect(() => {
    const fetchAythorById = async (id) => {
      try {
        const result = await axoisInstance.get(`/author/${id}`);
        if (result?.data) {
          setAuthorData(result.data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchAythorById(authorId);
  }, [authorId]);

  const dispatch = useDispatch();

  const {
    register,
    setValue, // Added setValue from useForm
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    // Set default values after data is fetched
    if (!loading) {
      setValue("author", authorData.author);
    }
  }, [loading, authorData.author, setValue]);

  const handleAddCategory = (data) => {
    dispatch(updateAuthor({ id: authorId, data }));
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
              onClick={() => navigate("/dashboard/manage-author")}
            >
              <CalendarViewDayIcon />
            </IconButton>
          </Typography>
          <div className="row">
            <div className="col-md-8">
              <div className="pt-4 px-3">
                <h4 className="mb-4">Edit Author</h4>
                <form onSubmit={handleSubmit(handleAddCategory)}>
                  <div class="row">
                    <div class="col-md-6">
                      <label htmlFor="">Author</label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        name="username"
                        placeholder="Enter Name"
                        {...register("author", {
                          required: "Author is required!",
                          minLength: {
                            value: 3,
                            message: "Min length is 3!",
                          },
                        })}
                      />
                      {errors.author && (
                        <span className="error_message" role="alert">
                          {errors.author?.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    className="btn btn-flat btn-dark d-block mt-2 mb-3 text-capitalize"
                    onClick={handleAddCategory}
                    disabled={isLoading}
                  >
                    Edit
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

export default UpdateAuthor;

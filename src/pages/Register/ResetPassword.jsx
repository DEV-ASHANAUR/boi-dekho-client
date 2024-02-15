import { sendPasswordResetEmail } from "firebase/auth";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import auth from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
// import {auth} from "fi"

const ResetPassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
//   const navigate = useNavigate();
  const handleChangePassword = (data) => {
    sendPasswordResetEmail(auth, data.email)
      .then((data) => {
        // navigate("/login");
        toast.success("Check your gmail");
        reset();
        
        // alert("Check your gmail")
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <div className="container">
      <div className="row pt-4 pb-4">
        <div className="col-lg-5 col-md-5 m-auto">
          <div className="row">
            <Toaster />
            <div className="col-md-12">
              <div className="address__wrapper shadow-sm">
                <h4>Reset password</h4>
                <form onSubmit={handleSubmit(handleChangePassword)}>
                  <div class="row mt-3">
                    <div class="col-md-12">
                      <label htmlFor="">Enter Email</label>
                      <input
                        type="text"
                        className="form-control mt-2"
                        placeholder="Enter Email"
                        {...register("email", {
                          required: "Email is required!",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email address",
                          },
                        })}
                      />
                      {errors.email && (
                        <span className="error_message" role="alert">
                          {errors.email?.message}
                        </span>
                      )}
                    </div>
                    <Link to="/login" className="forget__text my-1">
                      Login
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-flat btn-primary mt-1 d-block w-25 mb-3"
                  >
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

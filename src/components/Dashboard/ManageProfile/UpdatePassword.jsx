import React from "react";
import { FaHome } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { sendPasswordResetEmail } from "firebase/auth";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import auth from "../../../firebase/firebase.config";
// import {auth} from "fi"

const UpdatePassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    defaultValues: {
      email: "",
    },
  });
  const handleChangePassword = (data) => {
    sendPasswordResetEmail(auth,data.email).then(data=>{
        toast.success("Check your gmail");
        reset();
        // alert("Check your gmail")
    }).catch(err=>{
        toast.error(err.code)
    })
  };

  return (
    <div className="container">
      <div className="breadcrum">
        <FaHome style={{ color: "#ffa500", fontSize: "1.2rem" }} />{" "}
        <RiArrowRightSLine style={{ fontWeight: "700", fontSize: "1.2rem" }} />
        <span className="account">Account</span>
      </div>
      <div className="row pt-4 pb-4">
        <div className="col-lg-12 col-md-12">
          <div className="row">
            <Toaster />
            <div className="col-md-12">
              <div className="address__wrapper shadow-sm">
                <h4>Reset password</h4>
                <form onSubmit={handleSubmit(handleChangePassword)}>
                  <div class="row mt-5">
                    <div class="col-md-6">
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
                  </div>

                  <button
                    type="submit"
                    className="btn btn-flat btn-primary d-block mt-3 w-25 mb-3"
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

export default UpdatePassword;

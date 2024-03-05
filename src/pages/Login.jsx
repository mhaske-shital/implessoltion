import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import loginImg from "../assets/EmsLogo.png";
import { login } from "../redux/apiHelper";
import { MdEmail, MdKey } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const loginData = await login(values);
        if (loginData) {
          toast.success("login Successfully");
          resetForm();
        }
      } catch (error) {
        toast.error(error);
      }
    },
  });

  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-md-6 h-100">
            <div>
              <div className="card-title  fs-1">Login</div>
              <h6 className="mb-5">Welcome! log in to ypour account</h6>
              <div className="form-group">
                <label>Email</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1">
                    <MdEmail />
                  </span>

                  <input
                    type="text"
                    class="form-control"
                    placeholder="Email"
                    value={formik.values.email}
                    name="email"
                    onChange={formik.handleChange}
                  />
                </div>
                <span>{formik.touched.email && formik.errors.email}</span>
              </div>
              <div>
                <label>Password</label>
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon1">
                    <MdKey />
                  </span>

                  <input
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    value={formik.values.password}
                    name="password"
                    onChange={formik.handleChange}
                  />
                </div>
                <span>{formik.touched.password && formik.errors.password}</span>
              </div>
              <button
                onClick={formik.handleSubmit}
                className="btn btn-primary text-light mt-5 w-100"
              >
                Login
              </button>
            </div>
          </div>
          <div className="col-md-6 bg-info  h-100">
            <img src={loginImg} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

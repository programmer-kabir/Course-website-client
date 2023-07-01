import React, { useContext } from "react";
import useAuth from "../../../Component/Hooks/UseAuth";
import { useNavigate } from "react-router-dom";
import Container from "../../../Component/Container/Container";
import { Link } from "react-router-dom";
import SocialAccount from "../SocialAccount/SocailAccount";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";
import { RegisterUser } from "../../../Component/Apis/UserApi";

const Register = () => {
  const { newRegister, updateUserProfile, loading } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMGUPLOADKEY
  }`;
  //   console.log(url);
  const onSubmit = (data) => {
    // console.log(data);

    // Image upload to imgbb
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        // console.log(imageResponse.data.display_url)
        const photo = imageResponse.data.display_url;

        // New Register to user
        newRegister(data.email, data.password)
          .then((result) => {
            const loggedUser = result.user;
            // console.log(loggedUser);

            // upload a photo and name

            updateUserProfile(data.name, photo)
              .then(() => {
                  RegisterUser(result.user)
                })
                .then(res => res.json())
                .then(data => {
                  console.log(data);
                })

                toast.success("Registration Successfully");
              })
              .catch((err) => {
                toast(err.message);
              });
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      };
  return (
    <Container>
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-400">Welcome to Programming</p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  {...register("name", { required: true })}
                  placeholder="Enter Your Name Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
                {errors.name && (
                  <span className="text-red-600 font-medium">
                    This Name is required
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="image" className="block mb-2 text-sm">
                  Select Image:
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  {...register("image")}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", { required: true })}
                  placeholder="Enter Your Email Here"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
                {errors.email && (
                  <span className="text-red-600 font-medium">
                    This Email is required
                  </span>
                )}
              </div>

              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  {...register("password", {
                    required: true,
                    minLength: 8,
                    maxLength: 18,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                  })}
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.password?.type == "required" && (
                  <span className="text-red-600 font-medium">
                    This Password is required
                  </span>
                )}
                {errors.password?.type == "minLength" && (
                  <span className="text-red-600 font-medium">
                    {" "}
                    Password Must be 6 characters
                  </span>
                )}
                {errors.password?.type == "maxLength" && (
                  <span className="text-red-600 font-medium">
                    {" "}
                    Password no be a 20 characters
                  </span>
                )}
                {errors.password?.type == "pattern" && (
                  <span className="text-red-600 font-medium">
                    Password Must have one uppercase and one lower case le, one
                    Number and one special characters
                  </span>
                )}
              </div>
              {/* <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="text-sm mb-2">
                   Confirm Password
                  </label>
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 8,
                    maxLength: 18,
                    pattern:
                      /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/,
                  })}
                  placeholder="*******"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                />
                {errors.confirmPassword?.type == "required" && (
                  <span className="text-red-600 font-medium">
                    This Password is required
                  </span>
                )}
                {errors.confirmPassword?.type == "minLength" && (
                  <span className="text-red-600 font-medium">
                    {" "}
                    Password Must be 6 characters
                  </span>
                )}
                {errors.confirmPassword?.type == "maxLength" && (
                  <span className="text-red-600 font-medium">
                    {" "}
                    Password no be a 20 characters
                  </span>
                )}
                {errors.confirmPassword?.type == "pattern" && (
                  <span className="text-red-600 font-medium">
                    Password Must have one uppercase and one lower case le, one
                    Number and one special characters
                  </span>
                )}
              </div> */}
            </div>

            <div>
              <button
                type="submit"
                className="bg-rose-500 w-full rounded-md py-3 text-white"
              >
                {loading ? (
                  <ImSpinner9 className="m-auto animate-spin" size={24} />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
          <SocialAccount />
          <p className="px-6 text-sm text-center text-gray-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="hover:underline hover:text-rose-500 text-gray-600"
            >
              Login
            </Link>
            .
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Register;

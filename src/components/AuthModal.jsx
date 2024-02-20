import React, { useRef, useState } from "react";
import "daisyui/dist/full.css";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function AuthModal() {
  const signupEmailRef = useRef();
  const signupPasswordRef = useRef();
  const signupPasswordConfirmRef = useRef();
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const forgotPasswordEmailRef = useRef();
  const { signup, login, resetPassword } = useAuth();
  const [signupError, setSignupError] = useState("");
  const [signinError, setSigninError] = useState("");
  const [forgotPasswordError, setForgotPasswordError] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();
    if (
      signupPasswordRef.current.value !== signupPasswordConfirmRef.current.value
    ) {
      return setSignupError("Passwords do not match");
    }
    try {
      setSignupError("");
      setLoading(true);
      await signup(
        signupEmailRef.current.value,
        signupPasswordRef.current.value
      );
      navigate("/dashboard");
    } catch {
      setSignupError("Failed to create an account");
    }

    setLoading(false);
  }

  async function handleLogin(e) {
    e.preventDefault();
    try {
      setSigninError("");
      setLoading(true);
      await login(loginEmailRef.current.value, loginPasswordRef.current.value);
      navigate("/dashboard");
    } catch {
      setSigninError("Failed to Login");
    }

    setLoading(false);
  }

  async function handleResetPassword(e) {
    e.preventDefault();
    try {
      setCheckEmail("");
      setForgotPasswordError("");
      setLoading(true);
      await resetPassword(forgotPasswordEmailRef.current.value);
      setCheckEmail("Check your email for further instructions");
    } catch {
      setForgotPasswordError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => document.getElementById("my_modal").showModal()}
      >
        Get Started / Login
      </button>
      <dialog id="my_modal" className="modal">
        <div className="modal-box">
          <div role="tablist" className="tabs tabs-lifted">
            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Sign Up"
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <h2 className="text-2xl font-bold mb-10 ">Create an account</h2>
              <form className="space-y-4" onSubmit={handleSignup}>
                <div>
                  <label className="input input-bordered flex items-center gap-2 mb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow"
                      placeholder="Email"
                      ref={signupEmailRef}
                      required
                    />
                  </label>

                  <label className="input input-bordered flex items-center gap-2 mb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="password"
                      className="grow"
                      placeholder="Password"
                      ref={signupPasswordRef}
                      required
                    />
                  </label>
                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="password"
                      className="grow"
                      placeholder="Confirm Password"
                      ref={signupPasswordConfirmRef}
                      required
                    />
                  </label>
                </div>
                <button
                  className="btn btn-primary w-full mt-4 mb-2"
                  type="submit"
                  disabled={loading}
                >
                  Sign Up
                </button>
                {signupError && (
                  <div role="alert" className="alert border-error">
                    <span className="text-xs opacity-100 text-error">
                      {signupError}
                    </span>
                  </div>
                )}
              </form>
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Log In"
              checked
            />
            <div
              role="tabpanel"
              className="tab-content bg-base-100 border-base-300 rounded-box p-6"
            >
              <h2 className="text-2xl font-bold mb-10 text-center">LOG IN</h2>
              <form className="space-y-4" onSubmit={handleLogin}>
                <div>
                  <label className="input input-bordered flex items-center gap-2 mb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                      <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input
                      type="text"
                      className="grow"
                      placeholder="Email"
                      ref={loginEmailRef}
                      required
                    />
                  </label>

                  <label className="input input-bordered flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="w-4 h-4 opacity-70"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <input
                      type="password"
                      className="grow"
                      placeholder="Password"
                      ref={loginPasswordRef}
                      required
                    />
                  </label>
                </div>

                <button
                  className="btn btn-primary w-full mt-4 mb-2"
                  type="submit"
                  disabled={loading}
                >
                  Log In
                </button>
                {signinError && (
                  <div role="alert" className="alert border-error">
                    <span className="text-xs opacity-100 text-error">
                      {signinError}
                    </span>
                  </div>
                )}
              </form>
              <div className="flex justify-end mt-3">
                <button
                  className="link link-primary text-xs"
                  onClick={() => setForgotPassword(!forgotPassword)}
                >
                  Forgot Password?
                </button>
              </div>
            </div>
            {forgotPassword && (
              <>
                <input
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className="tab"
                  aria-label="Reset Password"
                />
                <div
                  role="tabpanel"
                  className="tab-content bg-base-100 border-base-300 rounded-box p-6"
                >
                  <h2 className="text-2xl font-bold mb-10 text-center">
                    Please Enter Your Email
                  </h2>
                  <form className="space-y-4" onSubmit={handleResetPassword}>
                    <div>
                      <label className="input input-bordered flex items-center gap-2 mb-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-4 h-4 opacity-70"
                        >
                          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input
                          type="text"
                          className="grow"
                          placeholder="Email"
                          ref={forgotPasswordEmailRef}
                          required
                        />
                      </label>
                    </div>

                    <button
                      className="btn btn-primary w-full mt-4 mb-2"
                      type="submit"
                      disabled={loading}
                    >
                      Reset Password
                    </button>
                    {forgotPasswordError && (
                      <div role="alert" className="alert border-error">
                        <span className="text-xs opacity-100 text-error">
                          {forgotPasswordError}
                        </span>
                      </div>
                    )}
                    {checkEmail && (
                      <div role="alert" className="alert border-success">
                        <span className="text-xs opacity-100 text-success">
                          {checkEmail}
                        </span>
                      </div>
                    )}
                  </form>
                </div>
              </>
            )}
          </div>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default AuthModal;

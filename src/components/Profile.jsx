import React, { useRef, useState } from "react";
import MainNavbar from "./MainNavbar";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const usernameRef = useRef();
  const photoRef = useRef();
  const {
    currentUser,
    updateEmail,
    updatePassword,
    updateProfileDisplayName,
    updateProfilePhotoUrl,
  } = useAuth();
  const { email, displayName, photoURL, uid } = currentUser;

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    const promises = [];
    setLoading(true);
    setError("");
    // if (
    //   emailRef.current.value &&
    //   emailRef.current.value !== currentUser.email
    // ) {
    //   promises.push(updateEmail(emailRef.current.value));
    // }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    if (usernameRef.current.value) {
      promises.push(updateProfileDisplayName(usernameRef.current.value));
    }
    // if (photoRef.current.files[0]) {
    //   promises.push(
    //     updateProfilePhotoUrl(URL.createObjectURL(photoRef.current.files[0]))
    //   );
    // }
    Promise.all(promises)
      .then(() => {
        // navigate("/dashboard");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div className="font-mono static h-dvh text-primary">
      <MainNavbar />
      <div className="container mx-auto h-full py-32">
        <div className="card h-fit w-auto max-w-xl mx-auto border border-primary shadow-xl">
          <div className="card-body">
            <h2 className="card-title ">Profile</h2>

            <div className="card w-full h-full">
              <div className="card-body">
                {/* <div className="avatar">
                  <div className="w-24 rounded-full outline outline-primary">
                    <img src={photoURL} />
                  </div>
                </div> */}
                <div className="space-y-4">
                  <h2 className="text-xl font-bold mt-4 mb-10 ">
                    Account's Info <br />
                    <span className="opacity-50 text-sm">ID: {uid}</span>
                  </h2>
                  <div>
                    <h2 className="text-lg mb-4 ">
                      <span className="font-bold ">Username: </span>
                      {displayName}
                    </h2>
                    <h2 className="text-lg mb-4">
                      <span className="font-bold">Email: </span>
                      {email}
                    </h2>
                    <h2 className="text-lg mb-4"></h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly">
              <button
                className="btn btn-ghost mt-4 w-56 hover:border-primary bg-primary text-black hover:text-primary hover:bg-transparent"
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
              >
                Update Profile
              </button>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                  <h2 className="text-xl font-bold ">Update Account's Info</h2>
                  <h3 className="text-xs opacity-60 mb-10">
                    Update one or more Info / click outside to cancel
                  </h3>
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      {/* <label>
                        <h2 className="text-sm font-bold mb-2">
                          Profile Photo
                        </h2>
                        <input
                          type="file"
                          className="file-input input-bordered w-full mb-5"
                          accept="image/*"
                          ref={photoRef}
                        />
                      </label> */}

                      <label className="input input-bordered flex items-center gap-2 mb-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="w-4 h-4 opacity-70"
                        >
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                        </svg>

                        <input
                          type="text"
                          className="grow"
                          placeholder="Username"
                          ref={usernameRef}
                        />
                      </label>
                      {/* <label className="input input-bordered flex items-center gap-2 mb-5">
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
                        ref={emailRef}
                      />
                    </label> */}

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
                          ref={passwordRef}
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
                          ref={passwordConfirmRef}
                        />
                      </label>
                    </div>
                    <button
                      className="btn btn-primary w-full mt-4 mb-2"
                      type="submit"
                      disabled={loading}
                      onClick={() =>
                        document.getElementById("my_modal_2").close()
                      }
                    >
                      Confirm
                    </button>
                    {error && (
                      <div role="alert" className="alert border-error">
                        <span className="text-xs opacity-100 text-error">
                          {error}
                        </span>
                      </div>
                    )}
                  </form>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function Settings() {
  return (
    <div>
      <button
        className="btn btn-ghost mt-4 w-56 hover:border-primary bg-primary text-black hover:text-primary hover:bg-transparent"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Change Preference
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <h2 className="text-xl font-bold ">Change Account's Preference</h2>
          <h3 className="text-xs opacity-60 mb-10">
            Change one or more Prefernce / click outside to cancel
          </h3>
          <form className="space-y-4">
            <div></div>
            <button
              className="btn btn-primary w-full mt-4 mb-2"
              type="submit"
              // disabled={loading}
            >
              Confirm
            </button>
            {/* {error && (
                    <div role="alert" className="alert border-error">
                      <span className="text-xs opacity-100 text-error">
                        {error}
                      </span>
                    </div>
                  )} */}
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

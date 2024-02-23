import React, { useState, useEffect } from "react";
import MainNavbar from "./MainNavbar";
import { useAuth } from "../contexts/AuthContext";

export default function Dashboard() {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  }, []);

  const { currentUser } = useAuth();
  const { displayName } = currentUser;

  return (
    <div className="font-mono static h-dvh">
      <MainNavbar />
      <div className="container mx-auto h-full pt-20 text-primary">
        <div className="mb-4">
          <h1 className="text-2xl">Hello {displayName}</h1>
          <h2 className="text-sm opacity-70">{currentDate}</h2>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full">
            <div className="col-span-1 row-span-1 border-primary border rounded-lg h-56 p-4">
              <div className="flex flex-col justify-center">
                <h2 className="text-xl">Income:</h2>
                <h2 className="text-4xl text-success self-center mt-12">
                  $2000
                </h2>
              </div>
            </div>
            <div className="col-span-1 row-span-1 border-primary border rounded-lg p-4">
              <div className="flex flex-col justify-center">
                <h2 className="text-xl">Savings:</h2>
                <h2 className="text-4xl text-warning self-center mt-12">
                  $1000
                </h2>
              </div>
            </div>
            <div className="col-span-1 row-span-1 border-primary border rounded-lg p-4">
              <div className="flex flex-col justify-center">
                <h2 className="text-xl">Expenses:</h2>
                <h2 className="text-4xl text-error self-center mt-12">$1000</h2>
              </div>
            </div>
            <div className="col-span-1 row-span-3 border-primary border rounded-lg p-4">
              <div className="flex justify-between">
                <h2 className="text-xl">Financial Goals</h2>
                <button
                  className="btn btn-ghost btn-circle text-lg btn-sm"
                  onClick={() =>
                    document.getElementById("my_modal_4").showModal()
                  }
                >
                  +
                </button>
                <dialog id="my_modal_4" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      Press ESC key or click on ✕ button to close
                    </p>
                  </div>
                </dialog>
              </div>
            </div>
            <div className="col-span-3 row-span-2 border-primary border rounded-lg p-4">
              <div className="flex justify-between">
                <h2 className="text-xl">Latest Transactions</h2>
                <button
                  className="btn btn-ghost btn-circle text-lg btn-sm"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  +
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">
                      Press ESC key or click on ✕ button to close
                    </p>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

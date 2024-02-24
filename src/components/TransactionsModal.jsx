import React, { useRef, useState } from "react";
import { useFirestore } from "../contexts/UserContext";
import { useAuth } from "../contexts/AuthContext";

export default function TransactionsModal() {
  const { currentUser } = useAuth();
  const { addDocument } = useFirestore();
  const { uid } = currentUser;
  const typeRef = useRef();
  const nameRef = useRef();
  const dateRef = useRef();
  const amountRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const newTransaction = {
      type: typeRef.current.value,
      name: nameRef.current.value,
      date: dateRef.current.value,
      amount: amountRef.current.value,
      userId: uid,
    };
    await addDocument("transactions", newTransaction);
  }

  return (
    <div>
      <button
        className="btn btn-ghost btn-circle text-lg btn-sm"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        +
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <form onSubmit={handleSubmit}>
            <label className="form-control w-full max-w-xs mb-4">
              <div className="label">
                <span className="label-text">transaction Type</span>
              </div>
              <select className="select select-bordered" ref={typeRef}>
                <option disabled selected>
                  Choose transaction type...
                </option>
                <option>Rent/Mortage</option>
                <option>Subscription</option>
                <option>Fees</option>
                <option>Fun(Entertainment)</option>
              </select>
            </label>
            <label className="form-control w-full max-w-xs mb-4">
              <div className="label">
                <span className="label-text">Transaction Name</span>
              </div>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Transaction name"
                ref={nameRef}
              />
            </label>
            <label className="form-control w-full max-w-xs mb-4">
              <div className="label">
                <span className="label-text">Transaction Date</span>
              </div>
              <input
                type="date"
                className="input input-bordered"
                placeholder="Transaction Date"
                ref={dateRef}
              />
            </label>
            <label className="form-control w-full max-w-xs mb-8">
              <div className="label">
                <span className="label-text">Transaction Amount</span>
              </div>
              <input
                type="number"
                className="input input-bordered"
                placeholder="Transaction Amount"
                ref={amountRef}
              />
            </label>
            <button
              type="submit"
              className="btn btn-primary w-full max-w-full"
              onClick={() => document.getElementById("my_modal_2").close()}
            >
              Add Transaction
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
}

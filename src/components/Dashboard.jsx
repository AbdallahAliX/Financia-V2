import React, { useState, useEffect } from "react";
import MainNavbar from "./MainNavbar";
import { useAuth } from "../contexts/AuthContext";
import { useFirestore } from "../contexts/UserContext";
import TransactionsModal from "./TransactionsModal";
import GoalsModal from "./GoalsModal";

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
    getGoals();
    getTransactions();
  }, []);

  const { currentUser } = useAuth();
  const { displayName, uid } = currentUser;

  const {
    getDocuments,
    deleteDocument,
    goals,
    getGoals,
    transactions,
    getTransactions,
  } = useFirestore();

  async function handleTransactionDelete(id) {
    await deleteDocument("transactions", id);
    getTransactions();
  }
  async function handleGoalDelete(id) {
    await deleteDocument("goals", id);
    getGoals();
  }

  let income = transactions
    .filter(
      (transaction) =>
        transaction.userId === uid && transaction.type === "Income"
    )
    .reduce(
      (acc, transaction) =>
        transaction.userId === uid && acc + parseInt(transaction.amount),
      0
    );

  let expenses = transactions
    .filter(
      (transaction) =>
        transaction.userId === uid && transaction.type === "Expense"
    )
    .reduce(
      (acc, transaction) =>
        transaction.userId === uid && acc + parseInt(transaction.amount),
      0
    );

  let savings = income - expenses;

  return (
    <div className="font-mono static h-dvh">
      <MainNavbar />
      <div className="container mx-auto h-full pt-20 text-primary">
        <div className="mb-4">
          <h1 className="text-2xl">Hello {displayName}</h1>
          <h2 className="text-sm opacity-70">{currentDate}</h2>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-5 grid-rows-3 gap-4 w-full">
            <div className="col-span-1 row-span-1 border-primary border rounded-lg h-56 p-4">
              <div className="flex flex-col justify-center">
                <h2 className="text-xl">Income:</h2>
                <h2 className="text-4xl text-success self-center mt-12">
                  ${income}
                </h2>
              </div>
            </div>
            <div className="col-span-1 row-span-1 border-primary border rounded-lg p-4">
              <div className="flex flex-col justify-center">
                <h2 className="text-xl">Savings:</h2>
                <h2 className="text-4xl text-warning self-center mt-12">
                  ${savings}
                </h2>
              </div>
            </div>
            <div className="col-span-1 row-span-1 border-primary border rounded-lg p-4">
              <div className="flex flex-col justify-center">
                <h2 className="text-xl">Expenses:</h2>
                <h2 className="text-4xl text-error self-center mt-12">
                  ${expenses}
                </h2>
              </div>
            </div>
            <div className="col-span-2 row-span-3 border-primary border rounded-lg p-4">
              <div className="flex justify-between">
                <h2 className="text-xl">Financial Goals</h2>
                <div className="flex ">
                  <GoalsModal />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="grid grid-cols-4 grid-rows-auto text-center border-b border-primary py-2 mb-4">
                  <h2>Name</h2>
                  <h2>Date</h2>
                  <h2>Amount</h2>
                </div>
                {goals.map(
                  (goal) =>
                    goal.userId === uid && (
                      <div
                        key={goal.id}
                        className="grid grid-cols-4 grid-rows-auto text-center border-b border-primary py-2"
                      >
                        <h2>{goal.name}</h2>
                        <h2>{goal.date}</h2>
                        <h2 className="text-warning">${goal.amount}</h2>
                        <div className="text-sm">
                          <button
                            onClick={() => {
                              handleGoalDelete(goal.id);
                            }}
                            className="btn text-warning btn-xs  border-warning border rounded-md"
                          >
                            Delete
                          </button>
                        </div>
                        <div className="col-span-4">
                          <progress
                            className="progress progress-warning w-full mt-4 mr-4"
                            value={savings}
                            max={goal.amount}
                          ></progress>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
            <div className="col-span-3 row-span-2 border-primary border rounded-lg p-4">
              <div className="flex justify-between">
                <h2 className="text-xl">Latest Transactions</h2>

                <div className="flex ">
                  <TransactionsModal />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="grid grid-cols-5 grid-rows-auto text-center border-b border-primary py-2 mb-4">
                  <h2>Type</h2>
                  <h2>Name</h2>
                  <h2>Date</h2>
                  <h2>Amount</h2>
                </div>
                {transactions.map(
                  (transaction) =>
                    transaction.userId === uid && (
                      <div
                        key={transaction.id}
                        className="grid grid-cols-5 grid-rows-auto text-center border-b border-primary py-2"
                      >
                        <h2>{transaction.type}</h2>
                        <h2>{transaction.name}</h2>
                        <h2>{transaction.date}</h2>
                        <h2 className="text-error">${transaction.amount}</h2>
                        <div className="text-sm">
                          <button
                            onClick={() => {
                              handleTransactionDelete(transaction.id);
                            }}
                            className="btn text-error btn-xs  border-error border rounded-md"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

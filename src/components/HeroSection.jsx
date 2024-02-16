import React from "react";
import "daisyui/dist/full.css";
import SignupModal from "./SignupModal";

function HeroSection() {
  return (
    <div className="container mx-auto mt-40 text-center border-accent border py-24 px-48 rounded-3xl w-fit ">
      <h2 className="text-2xl font-bold mb-4">What is Financia?</h2>
      <p className="text-sm mb-8">
        Financia is a web application that helps you manage your finances. It
        allows you to keep track of your income and expenses, and provides you
        with a summary of your financial situation. Financia also provides you
        with a budgeting tool that helps you plan your spending and save money
      </p>
      <h2 className="text-2xl font-bold mb-4">Get Started</h2>
      <p className="text-sm mb-8">
        Sign up for an account and start managing your finances today!
      </p>
      <SignupModal />
    </div>
  );
}

export default HeroSection;

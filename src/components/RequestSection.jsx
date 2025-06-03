import React from "react";

const RequestSection = () => {
  return (
    <section className="py-16 border-b-1 border-gray-200 bg-[#f7f7f7]">
      <div className="container justify-center">
        <div className="w-[100%] md:w-[60%] flex flex-col items-center gap-4" >
          <h3 className="text-3xl mt-4 text-center text-secondary">
            List your Restaurant at Foodmandu! Reach 2,00,000 + new customers.
          </h3>
          <a href="" className="bg-primary px-4 py-1 font-light">Send a request</a>
        </div>
      </div>
    </section>
  );
};

export default RequestSection;

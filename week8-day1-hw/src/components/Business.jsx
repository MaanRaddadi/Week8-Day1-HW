import React from "react";

function Business() {
  return (
    <div className="w-full flex justify-center items-center mt-10 ">
      <div className="grid grid-cols-none justify-center items-center gap-x-3	max-sm:flex max-sm:flex-col max-sm:gap-5 max-sm:px-5	">
        <img
          className="w-[20rem] row-span-2 object-cover"
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/ef9d9b9f-freshgoods-about_100000000000000000001o.jpg"
        ></img>

        <h1 className="text-5xl font-bold max-sm:order-first ">
          Some more <br></br> information about <br></br>your business
        </h1>
        <h1 className="text-lg mt-5 col-start-2  ">
          Share a little about yourself as a business owner, or maybe <br></br> describe
          what makes your product or service unique. Give <br></br>visitors one more
          reason to care about your offer and want to buy <br></br> from you.
        </h1>
      </div>
    </div>
  );
}

export default Business;

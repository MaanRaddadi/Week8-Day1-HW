import React from "react";

function CustomersHeader() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-10 bg-cover bg-center bg-no-repeat bg-[url('https://lying-move-262.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F69d3b502-87ee-4689-8097-3171d8f07c07%2Fb065d811-70a9-454e-947e-699ec2801a37%2FScreen_Shot_2023-11-26_at_11.01.17_AM_cleanup.png?table=block&id=cd60fb4a-9f52-41cc-af20-1716ed4e8a7d&spaceId=69d3b502-87ee-4689-8097-3171d8f07c07&width=1440&userId=&cache=v2')]">
      <h1 className="text-center font-bold text-white text-lg">
        What Our Customers Say
      </h1>
      <h1 className="text-9xl font-bold text-[#ffb400]">،،</h1>
      <p className="text-4xl text-white text-center  mt-5">
        Share a real testimonial that hits some of your benefits <br></br> (but isn’t too
        sales-y).
      </p>
      <div className="flex flex-col justify-center items-center mt-5">
        <img
          src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/1a1f4659-freshgoods-testimonial_1000000000000000000028.png"
          className="mt-10"
        ></img>
        <h1 className="font-bold text-xl text-center text-white mt-2">
          REAL NAME
        </h1>
        <h1 className="font-bold text-lg text-center text-white ">Location</h1>
        <img src="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/adb06479-stars.svg"></img>
      </div>
    </div>
  );
}

export default CustomersHeader;

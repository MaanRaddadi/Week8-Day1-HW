import React from "react";
import BenifitsItem from "./BenifitsItem";

function Benifits() {
  return (
    <div className="h=[100vh] bg-white w-full p-10">
      <div className="flex flex-col justify-center items-center mt-15 w-full">
        <h1 className="text-center text-4xl">
          Here are some of the benifits of your offer
        </h1>
        <p className="text-center text-lg  mt-10">
          Explain what makes your product or service great. <br></br> Talk about features
          in a way that highlights the real value people get out of them.
        </p>
      </div>
      <div className="w-full flex items-center mt-10 justify-evenly flex-wrap">
        <BenifitsItem
          benifitName="Benefit 1"
          benifitImg="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/3a18a275-freshgoods-benefit1-icon_1000000000000000000028.png"
          benifitText="For example, restaurants and bakeries could outline the health benefits of their all-natural ingredients."
        ></BenifitsItem>
        <BenifitsItem
          benifitName="Benefit 2"
          benifitImg="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/b41bc87d-freshgoods-benefit2-icon_1000000000000000000028.png"
          benifitText="Florists and other small retailers might use this space to describe how their products make delightful, one-of-a-kind gifts."
        ></BenifitsItem>
        <BenifitsItem
          benifitName="Benefit 3"
          benifitImg="https://d9hhrg4mnvzow.cloudfront.net/templates.unbounce.com/freshgoods/6622ad60-freshgoods-benefit3-icon_1000000000000000000028.png"
          benifitText="You could also add buttons to this section and share links to other products or available delivery methods."
        ></BenifitsItem>
      </div>
    </div>
  );
}

export default Benifits;

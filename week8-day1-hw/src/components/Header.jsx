import React from "react";

function Header() {
  return (
    <div className="w-full flex items-center justify-center bg-no-repeat bg-[url('https://lying-move-262.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F69d3b502-87ee-4689-8097-3171d8f07c07%2F55d7c998-fd67-4237-a21a-c7f9699e229a%2FScreen_Shot_2023-11-26_at_10.49.03_AM_cleanup.png?table=block&id=ed65f816-ff9e-43a2-a201-1c12a5fdd0dc&spaceId=69d3b502-87ee-4689-8097-3171d8f07c07&width=1440&userId=&cache=v2')] bg-cover bg-center">
      <div className=" w-full flex justify-center flex-col text-white  items-start p-10 ">
        <h1 className="text-4xl sm:text-6xl font-display ">
          Fresh<strong>Goods</strong>
        </h1>
        <h1 className="text-3xl mt-2  break-word sm:text-7xl">Concisely<br></br> describe your <br></br> product or service</h1>
        <p className="mt-7 ">No need to get clever. Tell people exactly what you're offering, then <br/> use this space to communicate your key value proposition.</p>
        <a className="px-5 py-2 bg-[#ffb400] text-black font-bold rounded mt-7 hover:bg-[#d6ac4a]" href="#">ORDER NOW</a>
      </div>
    </div>
  );
}

export default Header;

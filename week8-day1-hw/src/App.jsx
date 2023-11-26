import { useState } from "react";
import Header from "./components/Header";
import Benifits from "./components/Benifits";
import CustomersHeader from "./components/CustomersHeader";
import FeatureHeader from "./components/FeatureHeader";
import Business from "./components/Business";
import FinalCall from "./components/FinalCall";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Benifits></Benifits>
      <CustomersHeader></CustomersHeader>
      <FeatureHeader></FeatureHeader>
      <Business></Business>
      <FinalCall></FinalCall>
      <Footer></Footer>
    </>
  );
}

export default App;

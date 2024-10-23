import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Home(){
  return(
    <div>
      <Header/>
     <div className="flex justify-center items-center mx-auto h-[80vh]">This is Main Page</div> 

      <Footer/>
    </div>
  );

};
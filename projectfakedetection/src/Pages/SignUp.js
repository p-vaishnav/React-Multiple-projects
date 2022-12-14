import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const FillDetails = ({
    title,
    placeHolder,
    type
}) => {
    return(
        <div>
            <label><b>{title}</b></label>
            <br></br>
            <input type={type} placeholder={placeHolder}></input>
        </div>    
    );
}

const SignUp = () => {
    
  const obj = [
      {
        title : "Name",
        placeholder : "Enter Name",
        type: "text"
      },
      {
        title : "Phone",
        placeholder : "Enter Phone",
        type: "text"
      },
      {
          title : "Email",
          placeholder : "Enter Email",
          type: "text"
      },
      {
          title : "Password",
          placeholder : "Enter Password",
          type: "password"
      },
      { 
          title : "Re-Type Password",
          placeholder : "Enter Password",
          type : "password"

      }
    ];
  
  return (
    <div>
      <Header/>
      <div>{
          obj.map((content)=>{
           return <FillDetails title={content.title} placeHolder={content.placeholder} type={content.type}/>
          })
      }</div>
      <button className="btn btn-primary">SignUp</button>
      <Footer />
    </div>
  );
};

export default SignUp;

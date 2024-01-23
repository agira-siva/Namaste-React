import React from "react";
import ReactDOM from "react-dom/client";

const body = document.getElementById("container");
const root = ReactDOM.createRoot(body);
const ButtonComponent = () => 
    (
      <>
        {jsxHeading}
        <Heading />
        <Paragraph/>
        <button className="siva">click me</button>
      </>
    );


const Heading = () => React.createElement("h1", {}, "hii i am siva from react");

function Paragraph(){
    return <p>click the below button to know more about me</p>
}

root.render(<ButtonComponent/>);
const jsxHeading = <h1>i am siva from jsx</h1>;






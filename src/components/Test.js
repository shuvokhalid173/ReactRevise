import React from "react";
import Button from "./Button";
import Wrapper from "./Wrapper";
import ReactDOM from "react-dom";

const Test = (props) => {
    const btnClick = (id) => console.log(id);

    return ReactDOM.createPortal(
        <React.Fragment>
            <Button onClick={() => btnClick(1)}>one</Button>
            <Button onClick={() => btnClick(2)}>two</Button>
        </React.Fragment>,
        document.getElementById("modal")
    );
};

export default Test;

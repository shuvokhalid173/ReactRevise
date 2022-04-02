import React from "react";
import "../css/product.css";

const Product = (props) => {
    // console.log(props);
    return (
        <div className="product">
            <div style={{ width: "35%", paddingLeft: "15px" }}>
                {props.data.name}
            </div>
            <div style={{ width: "20%" }}>{props.data.categoryName}</div>
            <div style={{ width: "15%" }}>{props.data.price}</div>
            <div style={{ width: "15%" }}>{props.data.sold} (sold)</div>
            <div style={{ width: "15%" }}>
                {props.data.numberInStock} (stock)
            </div>
        </div>
    );
};

export default Product;

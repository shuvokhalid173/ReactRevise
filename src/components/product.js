import React from "react";
import "../css/product.css";

const Product = (props) => {
    return (
        <div className="product">
            <div style={{ width: "50%", paddingLeft: "15px" }}>
                {props.data.name}
            </div>
            <div style={{ width: "35%" }}>{props.data.categoryName}</div>
            <div style={{ width: "15%" }}>{props.data.price}</div>
        </div>
    );
};

export default Product;

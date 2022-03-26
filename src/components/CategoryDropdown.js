import React from "react";
import "../css/product.css";

const CategoryDropdown = (props) => {
    const handleChange = (event) => {
        props.onCategoryChange(event);
    };
    return (
        <select
            onChange={handleChange}
            className="form-control"
            value={props.category}
        >
            <option value={0}>Category</option>
            {props.categories.map((category) => {
                return (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                );
            })}
        </select>
    );
};

export default CategoryDropdown;

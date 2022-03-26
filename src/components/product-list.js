import Product from "./product";
import "../css/product.css";
import CategoryDropdown from "./CategoryDropdown";
import React, { useState } from "react";

const ProductList = (props) => {
    const [category, setCategory] = useState(0);

    props.products.map((product) => {
        product.categoryName = props.categories.find(
            (category) => category.id == product.category
        ).name;
    });

    const handleProductCategory = (event) => {
        setCategory(event.target.value);
        props.filterByCategory(event.target.value);
    };

    // console.log(props.products);
    return (
        <div>
            <div className="product filter">
                <label>Filtered By</label>
                <CategoryDropdown
                    onCategoryChange={handleProductCategory}
                    categories={props.categories}
                    category={category}
                />
            </div>
            {props.products.map((product) => {
                return <Product key={product.id} data={product} />;
            })}
        </div>
    );
};

export default ProductList;

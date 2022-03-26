import React from "react";
import ProductList from "./product-list";
import "../css/product-list-container.css";

const ProductListContainer = (props) => {
    const filterByCategory = (category) => {
        props.filterByCategory(category);
    };
    return (
        <div className="products-wrapper">
            <ProductList
                products={props.products}
                categories={props.categories}
                filterByCategory={filterByCategory}
            />
        </div>
    );
};

export default ProductListContainer;

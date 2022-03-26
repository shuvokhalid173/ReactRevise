import { useState } from "react";
import "../css/product.css";
import CategoryDropdown from "./CategoryDropdown";

const ProductForm = (props) => {
    const [category, setCategory] = useState(0);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);

    const handleProductName = (event) => {
        setName(event.target.value);
    };

    const handleProductCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleProductPrice = (event) => {
        setPrice(event.target.value);
    };

    const submitForm = () => {
        const data = {
            name,
            category,
            price,
        };
        props.onFormSubmit(data);
    };

    return (
        <div className="form-wrapper">
            <div className="form-group form-group-custom">
                <label>Name</label>
                <input
                    className="form-control"
                    type={"text"}
                    onChange={handleProductName}
                    value={name}
                />
            </div>

            <div className="form-group form-group-custom">
                <label>Category</label>
                <CategoryDropdown
                    onCategoryChange={handleProductCategory}
                    categories={props.categories}
                    category={category}
                />
            </div>

            <div className="form-group form-group-custom">
                <label>Price</label>
                <input
                    onChange={handleProductPrice}
                    className="form-control"
                    type={"number"}
                    value={price}
                />
            </div>

            <div
                className="form-group form-group-custom"
                style={{ paddingTop: "18px" }}
            >
                <button
                    onClick={submitForm}
                    style={{ width: "100%" }}
                    className="btn btn-primary"
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default ProductForm;

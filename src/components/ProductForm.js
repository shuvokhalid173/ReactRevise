import { useState } from "react";
import "../css/product.css";
import CategoryDropdown from "./CategoryDropdown";

const ProductForm = (props) => {
    const [category, setCategory] = useState(0);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [sold, setSold] = useState(0);
    const [numberInStock, setNumberInStock] = useState(0);
    const [isValidName, setIsValidName] = useState(true);

    const handleProductName = (event) => {
        setIsValidName(!!event.target.value);
        setName(event.target.value);
    };

    const handleProductCategory = (event) => {
        setCategory(event.target.value);
    };

    const handleProductPrice = (event) => {
        setPrice(event.target.value);
    };
    const handleProductSold = (event) => {
        setSold(event.target.value);
    };
    const handleProductNumberInStock = (event) => {
        setNumberInStock(event.target.value);
    };

    const submitForm = () => {
        const data = {
            name,
            category,
            price,
            sold,
            numberInStock,
        };
        props.onFormSubmit(data);
    };

    return (
        <div className="form-wrapper">
            <div className="form-group form-group-custom">
                <label>Name</label>
                <input
                    className={
                        "form-control " + (!isValidName ? "invalid-input" : "")
                    }
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
            <div className="form-group form-group-custom">
                <label>Sold</label>
                <input
                    onChange={handleProductSold}
                    className="form-control"
                    type={"number"}
                    value={sold}
                />
            </div>
            <div className="form-group form-group-custom">
                <label>Number in stock</label>
                <input
                    onChange={handleProductNumberInStock}
                    className="form-control"
                    type={"number"}
                    value={numberInStock}
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

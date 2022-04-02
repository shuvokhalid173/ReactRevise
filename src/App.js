import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Main from "./components/Main";
import UserForm from "./components/UserForm";

function App() {
    const categories = [
        {
            id: 1,
            name: "Mobile",
        },
        {
            id: 2,
            name: "Laptop",
        },
    ];

    const rawProducts = [
        {
            id: 1,
            name: "Sumsang Galaxy s9",
            price: "99k",
            category: 1,
            sold: 2,
            numberInStock: 3,
        },
        {
            id: 2,
            name: "OPPO A9",
            price: "25k",
            category: 1,
            sold: 10,
            numberInStock: 4,
        },
        {
            id: 3,
            name: "Assus G3",
            price: "60k",
            category: 2,
            sold: 5,
            numberInStock: 5,
        },
        {
            id: 4,
            name: "Xaomi redmi",
            price: "24k",
            category: 1,
            sold: 12,
            numberInStock: 3,
        },
        {
            id: 5,
            name: "Apple Macbook",
            price: "100k",
            category: 2,
            sold: 2,
            numberInStock: 3,
        },
        {
            id: 6,
            name: "Hp probook",
            price: "50k",
            category: 2,
            sold: 2,
            numberInStock: 13,
        },
    ];

    const [products, setProducts] = useState(rawProducts);

    const addNewProduct = (data) => {
        data.id = products.length + 1;
        data.price = data.price + "k";
        setProducts([data, ...products]);
    };

    const filterByCategory = (category) => {
        if (!category) {
            setProducts(rawProducts);
        } else {
            const filteredProduct = rawProducts.filter(
                (product) => product.category == category
            );
            setProducts([...filteredProduct]);
        }
        return;
    };

    return (
        // <Main
        //     addProduct={addNewProduct}
        //     products={products}
        //     categories={categories}
        //     filterByCategory={filterByCategory}
        // />

        <UserForm />
    );
}

export default App;

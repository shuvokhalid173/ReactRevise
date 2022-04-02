import ProductForm from "./ProductForm";
import ProductListContainer from "./ProductListContainer";
import "../css/main.css";
import Chart from "./Chart";

const Main = (props) => {
    const submitForm = (data) => {
        props.addProduct(data);
    };

    const filterByCategory = (category) => {
        props.filterByCategory(category);
    };
    return (
        <div className="main">
            <ProductForm
                onFormSubmit={submitForm}
                categories={props.categories}
            />
            <ProductListContainer
                products={props.products}
                categories={props.categories}
                filterByCategory={filterByCategory}
            />

            <Chart products={props.products} categories={props.categories} />
        </div>
    );
};

export default Main;

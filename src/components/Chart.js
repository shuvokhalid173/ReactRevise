import React from "react";
import "../css/chart.css";

const Chart = (props) => {
    const { products } = props;
    const barWidth = 100 / products.length;
    props.products.map(
        (product) =>
            (product.soldRate =
                (product.sold * 100) / (product.sold + product.numberInStock))
    );
    return (
        <div className="chart-container">
            {products.map((product) => {
                const { id, name, soldRate, sold, numberInStock } = product;
                return (
                    <div
                        key={id}
                        style={{
                            width: `${barWidth}%`,
                            height: `${soldRate}%`,
                        }}
                        className="chart-bar"
                        title={name + " " + soldRate}
                    >
                        <div
                            style={{
                                width: "100%",
                                height:
                                    (sold / (sold + numberInStock)) * 100 + "%",
                                backgroundColor: "#da9696",
                            }}
                            className="sold"
                        ></div>
                        <div
                            style={{
                                width: "100%",
                                height:
                                    (numberInStock / (sold + numberInStock)) *
                                        100 +
                                    "%",
                                backgroundColor: "#a0dca0",
                            }}
                            className="stock"
                        ></div>
                        <span>{Math.floor(soldRate)}%</span>
                    </div>
                );
            })}
        </div>
    );
};

export default Chart;

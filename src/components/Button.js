import React from "react";

export default function Button(props) {
    return (
        <button className="btn btn-primary" onClick={props.onClick}>
            {props.children}
        </button>
    );
}

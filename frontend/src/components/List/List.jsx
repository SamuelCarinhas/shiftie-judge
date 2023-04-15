import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import "./List.css"

function List(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(props.items);
        console.log("hello");
      }, []);

    const addItem = () => {
        const newItems = [...items, item.current.value]
        setItems(() => newItems);
    }

    const displayItem = (item) => {
        return (
            <li key={item.id}>
                <Link className="itemLink" to={item.link}>{item.name}</Link>
                <div className="bar"></div>
            </li>
        );
    }

    return (
        <ul className="listBlock">
            {items.map(displayItem)}
        </ul>
    );
}

export default List;
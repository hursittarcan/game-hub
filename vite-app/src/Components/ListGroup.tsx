import {useState} from "react";

function ListGroup() {
    let items = [
        'New York',
        'San Fransisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);

    const getMessage = () => {
        return items.length === 0 && <p>No items found</p>;
    }

    return (
        <>
            <h1>Hello World!</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className= { selectedIndex === index ? "list-group-item active" : "list-group-item" }
                        key={item}
                        onClick={ () => setSelectedIndex(index) }
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
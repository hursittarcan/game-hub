import {MouseEvent} from "react";

function ListGroup() {
    let items = [
        'New York',
        'San Fransisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    //items = [];

    const getMessage = () => {
        return items.length === 0 && <p>No items found</p>;
    }

    //Event handler
    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <>
            <h1>Hello World!</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        className="list-group-item"
                        key={item}
                        onClick={handleClick}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
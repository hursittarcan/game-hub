function ListGroup() {
    let items = [
        'New York',
        'San Fransisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    items = [];

    const getMessage = () => {
        return items.length === 0 ? <p>No items found</p> : null;
    }

    return (
        <>
            <h1>Hello World!</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
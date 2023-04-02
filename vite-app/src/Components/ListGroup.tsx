function ListGroup() {
    const items = [
        'New York',
        'San Fransisco',
        'Tokyo',
        'London',
        'Paris'
    ];

    return (
        <>
            <h1>Hello World!</h1>
            <ul className="list-group">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup;
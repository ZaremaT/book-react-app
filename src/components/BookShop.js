
function BookShop(props) {
    console.log(props.books);

    return (
        <div>
            {props.books ? props.books.map((book, idx) => (
                <div key={idx}>
                    <Link to={`${idx}`}>
                        <h2>{book.title}</h2>
                    </Link>
                    <h2>{book.author}</h2>
                    <h2>{book.category}</h2>
                    <hr />
                    <img src={book.img} alt={book.alt} />
                </div>
            )) : <h3>Loading</h3>}
        </div>
    )
}

export default BookShop
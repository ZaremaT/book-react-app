function BookShop(props) {

    return (
        <div>
            {props.books ? props.books.map((book, idx) => (
                <div key={idx}>
                    <h2>Title: {book.volumeInfo.title}</h2>
                    <h2>{book.volumeInfo.authors}</h2>
                    <h2>{book.volumeInfo.categories}</h2>
                    <hr />
                    <img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : ""} alt={book.alt} />
                    <h2>{book.volumeInfo.description}</h2>
                    <button type="button" onClick={() => props.addme(book)}>Add Me!</button>
                </div>
            )) : <h1>No Results (Try searching for books!)</h1>}
        </div>
    )
}

export default BookShop
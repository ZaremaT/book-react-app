import { Link } from 'react-router-dom'

function BookShop(props) {
    console.log(props.books);

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
            )) : <h3>Loading</h3>}
        </div>
    )
}

export default BookShop
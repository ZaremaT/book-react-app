import {Link} from 'react-router-dom'

function Books(props) {
    return (
        <div>
            {props.books ? props.books.map((book, idx) => (
                <div key={idx}>
                    <Link to={`${book._id}`}>
                        <h2>{book.title}</h2>
                    </Link>
                    <h2>{book.author}</h2>
                    <h2>{book.category}</h2>
                    <hr />
                    <img src={book.image} alt={book.alt} />
                    <h2>{book.review}</h2>
                    <button type="button" class="deletebook" onClick={() => props.deleteme(book._id)}>Delete Me!</button>
                </div>
            )) : <h3>Loading</h3>}
        </div>
    )
}

export default Books;
function Book(props) {
    return (
        <div class="book-view">
            <h2>{props.book.title}</h2>
            <h2>{props.book.author}</h2>
            <h2>{props.book.category}</h2>
            <hr />
            <img src={props.book.image} alt={book.alt} />
            <h2>{props.book.review}</h2>
            <button type="button" class="addReview" onClick={() => props.deleteme(book._id)}>Add Review</button>
        </div>
    )
}

export default Book;
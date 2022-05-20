function Book(props) {
    console.log(props.book)
    return (
        <div className="book-view">
            <h2>{props.book.title}</h2>
            <h2>{props.book.author}</h2>
            <h2>{props.book.category}</h2>
            <hr />
            <img src={props.book.image} alt={props.book.alt} />
            <h2>{props.book.description}</h2>
            <h1>Reviews:</h1>
            <div className="reviews">
                {props.book.reviews ? props.book.reviews.map((review, idx) => (
                    <h2 className="review" key={idx}>{review}</h2>
                )) : "No Reviews Yet..."}
            </div>

            <input type="text" id="review" name="fname" />
            <button type="button" className="addReview"
                onClick={() => props.addreview(props.book, document.getElementById('review').value)}>
                Add Review
            </button>
        </div>
    )
}

export default Book;
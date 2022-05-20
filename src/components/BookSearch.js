function BookSearch(props) {
    return (
        <form className="booksearch" onSubmit={props.handleSubmit}>
            <input name="search" placeholder="Search for books..." onChange={props.handleChange} />
        </form>
    )
}

export default BookSearch;

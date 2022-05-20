function BookSearch(props) {
    return (
        <form class="booksearch" onSubmit={props.handleSubmit}>
            <input name="search" placeholder="Search for books..." onChange={props.handleChange} />
        </form>
    )
}

export default BookSearch;

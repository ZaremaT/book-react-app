function BookSearch(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <input name="search" placeholder="Search for books..." onChange={props.handleChange} />
        </form>
    )
}

export default BookSearch;

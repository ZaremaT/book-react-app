import Books from '../components/Books'
import React, { useEffect, useState } from 'react'

function BookWall(props) {
    const BACKEND_URL = 'https://obscure-chamber-02994.herokuapp.com'
    const [books, setBooks] = useState(null)

    function getBooks(q) {
        fetch(`${BACKEND_URL}/books`)
            .then(async response => {
                const data = await response.json();
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    console.log(error)
                } else {
                    setBooks({ books: data })
                }
            }).catch(err => {
                console.log(err)
            })
    }

    function deleteMe(id) {
        fetch(`${BACKEND_URL}/books/${id}`, { method: 'DELETE' })
            .then(() => {
                const b = books.books.filter((book) => {
                    return book._id !== id
                })
                setBooks({ books: b })
            }
            );
    }

    useEffect(() => {
        getBooks();
    }, [])

    const loaded = () => {
        return (
            <div>
                <Books books={books.books} deleteme={deleteMe} />
            </div>
        )
    };
    // Function for when data doesn't exist
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return books ? loaded() : loading();
}

export default BookWall
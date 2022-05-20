import React, { useEffect, useState } from 'react'
import Book from '../components/BookComponent';
import { useParams } from "react-router-dom";


function BookPage() {
    const BACKEND_URL = 'https://obscure-chamber-02994.herokuapp.com'
    const id = useParams();

    const [book, setBook] = useState(null)

    function getBook(id) {
        fetch(`${BACKEND_URL}/books/${id}`)
            .then(async response => {
                const data = await response.json();
                console.log(data)
                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    console.log(error)
                } else {
                    setBook(data)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    function addReview(book, review) {
        if (review.length !== 0) {
            book.reviews.push(review)
        }
        fetch(`${BACKEND_URL}/books/${book._id}`,
            {
                method: 'PUT',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            })
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    console.log(error)
                } else {
                    setBook(book)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getBook(id.id);
    }, [id])

    const loaded = () => {
        return (
            <div>
                <Book book={book} addreview={addReview} />
            </div>
        )
    };
    // Function for when data doesn't exist
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return book ? loaded() : loading();
}

export default BookPage;
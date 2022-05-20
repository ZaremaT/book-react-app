import React, { useEffect, useState } from 'react'
import BookSearch from '../components/BookSearch';
import BookShop from '../components/BookShop';

function BookShopPage() {
    const URL = 'https://www.googleapis.com/books/v1/volumes?maxResults=10&q=';

    const [books, setBooks] = useState(null)

    function getBooks(q) {
        console.log(`${URL}${q}`)
        fetch(`${URL}${q}`)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    console.log(error)
                } else {
                    setBooks({ results: data.items, query: q })
                    console.log('results ' + data.items)
                }
            }).catch(err => {
                err.text().then(errorMessage => {
                    console.log(errorMessage)
                })
            })
    }
    function handleChange(e) {
        getBooks(e.target.value)
    }

    useEffect(() => {
        getBooks('default');
    }, [])

    const loaded = () => {
        return (
            <div>
                <BookSearch handleChange={handleChange} />
                <BookShop books={books.results} />
            </div>
        )
    };
    // Function for when data doesn't exist
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return books ? loaded() : loading();
}

export default BookShopPage;

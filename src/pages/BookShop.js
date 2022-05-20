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
    function addBook(book) {
        const BACKEND_URL = 'https://obscure-chamber-02994.herokuapp.com/add'
        console.log(book.volumeInfo.categories)
        fetch('https://obscure-chamber-02994.herokuapp.com/books', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                'title': book.volumeInfo.title,
                'author': book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : "N/A",
                'category': book.volumeInfo.categories ? book.volumeInfo.categories.join(', ') : "N/A",
                'image': book.volumeInfo.imageLinks.thumbnail,
                'description': book.volumeInfo.description
            })
        }).then(response => response.json()).then(data => {
            console.log(data)
        })
    }


    useEffect(() => {
        getBooks('default');
    }, [])

    const loaded = () => {
        return (
            <div>
                <BookSearch handleChange={handleChange} />
                <BookShop books={books.results} addme={addBook} />
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

import React, { useState, useEffect } from 'react';

function BookShop() {
    const [books, setBooks] = useState(null)
    function getBooks() {
        fetch('https://www.googleapis.com/books/v1/volumes?q=search+terms')
        .then(res => res.json())
        .then(setBooks(res))
    }
    return (
        <>
        <h1>“Good friends, good books, and a sleepy conscience: this is the ideal life.” </h1>
        </>
    )
    }
    

export default BookShop
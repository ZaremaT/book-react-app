import React, { useEffect, useState } from 'react'
import { useParams } from "react-router";


    function getBooks(search) {
    fetch( + search)
    .then((res) => res.json())
    .then((res) => setBooks(res.results))
}

function BookShopPage() {
    const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    
    const [books, setBooks] = useState(null)

    function handleChange(e) {
        const q = e.target.value
        axios.get(`${URL}${q}`)
            .then(res => {
                console.log('results ' + res.data.data)
                setState({ results: res.data.data, query: q })
            })
    }

    return (
        <div>
            <Search handleChange={handleChange} />
            <Results data={state.results} />
        </div>
    )
    const getBooks = async () => {
        try {
            console.log(URL)
            const response = await fetch(URL);
            const data = await response.json();
            console.log(data)
            setShowShip(data);

        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getShip();
    }, [])

    const loaded = () => {
        return (
            <div class="ship">
                <br/>Name: {showShip.name}
                <br/>Model: {showShip.model}
                <br/>Manufacturer: {showShip.manufacturer}
            </div>
        )
    };
    // Function for when data doesn't exist
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return showShip ? loaded() : loading();
}
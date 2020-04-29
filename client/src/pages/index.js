import React, { useState, useEffect } from 'react'
import SearchForm from '../components/searchForm'
import Card from '../components/card'
import Jumbotron from '../components/jumbotron'
import { Container, Row, Col } from 'reactstrap';
import Api from '../utils/api';
import { set } from 'mongoose';
import BookContext from '../utils/bookContext'
export default function Search() {
    const [bookState, setBookState] = useState({
        results: []

    })

    const [refresh, setRefresh] = useState(false)

    const [search, setSearch] = useState("")

    // useEffect(() => {

    //     if (refresh) {
    //         loadApiData(search)

    //     }


    // }, [refresh, search])

    const loadApiData = (title) => {
        Api.googleBooks(title).then((results) => {
            console.log(results)
            setBookState({
               results: results.data
            })
        })

    }

    const handleChange = (event) => {
        const { value } = event.target
        console.log(value)
        setSearch(value)
    }


    const handleSubmit = (event) => {
        loadApiData(search)
    }



    return (
        <BookContext.Provider  value={bookState}>
            <Container>
                {/* {console.log("search: ", search)}
                {console.log("results:", bookState.results)} */}
                <Jumbotron />
                <SearchForm handleSubmit={handleSubmit}  searchValue={search} handleChange={handleChange} />
                <Card   />
            </Container>

        </BookContext.Provider>



    )
}
import React, { useState, useEffect } from 'react'
import SearchForm from '../components/searchForm'
import ListGroup from '../components/ListGroup'
import Api from '../utils/api';
export default function Search() {
    const [bookState, setBookState] = useState({
        results: [],
        search: ""
    })

    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        loadApiData("the hunger games")

    }, [refresh])

  const  loadApiData = (title) => {
        Api.googleBooks(title).then((results) => {
            console.log(results)
        })

    }



    return (


        <div>
            <SearchForm />
            <ListGroup />
        </div>

    )
}
import React, { useState, useEffect } from 'react'
import SearchForm from '../components/searchForm'
import Card from '../components/card'
import Jumbotron from '../components/jumbotron'
import { Container, Row, Col } from 'reactstrap';
import Api from '../utils/api';
import { set } from 'mongoose';
export default function Search() {
    const [bookState, setBookState] = useState({
        results: []
       
    })

    const [refresh, setRefresh] = useState(false)

  const [search, setSearch] = useState("")

    useEffect(() => {

        if(refresh){
            loadApiData(bookState.search)

        }
       
        

    }, [refresh])

  const  loadApiData = (title) => {
        Api.googleBooks(title).then((results) => {
            console.log(results)
        })

    }



    return (


        <Container>
            <Jumbotron />
            <SearchForm />
            <Card />
        </Container>

    )
}
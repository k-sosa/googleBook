import React, {createContext} from 'react'

const BookContext = createContext({
    results:[],
    search: ""
})

export default BookContext;
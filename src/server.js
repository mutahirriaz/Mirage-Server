// import React from 'react'
import {Server} from 'miragejs'
import books from './json/books.json'

export  function  makeServer(){
    let server = new Server({
        
        routes(){
            this.namespace="api"

            // for get method
            this.get("/books",()=>{
                return books
            })

            // for post method
            this.post("/add",(schema,req)=>{
                console.log(req)
                const newBook = JSON.parse(req.requestBody);
                books.push(newBook)
            })
        }

    })
    return server
}
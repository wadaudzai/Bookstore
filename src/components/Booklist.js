import React from "react"
import Book from "./Book";
import AddBook from "./AddBook";
const Booklist = () => {
    return(
    <div>
        <Book title = "Walid" author = "Daudzai"/>
        <Book title = "Alchemist" author = "Paulo Coelho" />
        <AddBook />
    </div>
    )
}

export default Booklist;
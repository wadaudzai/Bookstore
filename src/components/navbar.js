import React from "react";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
    render() {
        return(
            <ul>
                <li><Link to = '/'>Books</Link></li>
                <li><Link to = '/Categories'>Categories</Link></li>
            </ul>
        )
    }
}

export default Navbar;
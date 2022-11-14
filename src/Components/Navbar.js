import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
        <div style={{display:'flex',
         background:"gold",
          color:"white",
          padding:'1rem',
          justifyContent:"center", 
          width: "100%",
          alignItems:"center"
          }}>  
            <Link to="/" style={{textDecoration:"none", color: "white", fontStyle: "italic"}}>
            <h1>Movies App</h1>
            </Link>
            <Link to="/fav" style={{textDecoration:"none" , color: "white"}}>
            <h2 style={{marginLeft:"2rem", fontStyle: "italic"}}>Favourites</h2>
            </Link>
      </div>
    )
  }
}
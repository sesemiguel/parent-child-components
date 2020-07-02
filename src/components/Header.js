import React from "react"

class Header extends React.Component{
    render(){
        const name = 'header'
        return(
            <header className="header"><h1 className="header" style={{color: "#FFF"}}>This is my {name}</h1></header>
        )
    }
}

export default Header;
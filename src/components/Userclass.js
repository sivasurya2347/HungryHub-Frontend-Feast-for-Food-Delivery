import React from "react";

class Userclass extends React.Component{
    constructor (){
        super()
        this.state = {
            Userinfo : {
                login :"dummy",
                id : "vijayawada",
            },
        };
        console.log(this.state.Userinfo.login + " Child constructor");
    }

     async componentDidMount(){
        console.log(this.state.Userinfo.login + " Child Mount");
        const data = await fetch("https://api.github.com/users/sivasurya2347");
        const json = await data.json();
        
        this.setState({
            Userinfo : json,
        })
       
    }

    componentWillUnmount(){
        console.log("Unmounted")
    }
    render(){
        const {login,id}=this.state.Userinfo
        console.log(login + " Child Render")
        return(
            <div className="User-list">
                <h2>Name : {login}</h2>
                <h3>Location : {id}</h3>
            </div>
        )
    }
}

export default Userclass;
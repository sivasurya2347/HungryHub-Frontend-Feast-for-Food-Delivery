// import User from "./User";
import Userclass from "./Userclass";
import React from "react";
import SampleContext from "../utils/sampleContext";

class About extends React.Component{
    constructor(){
        super()
        console.log("parent constructor")
    }

    componentDidMount(){
       console.log("Parent Mount");
    }
    render(){

        console.log("Parent Render")
        return(
            <div>
                <h1>About</h1>
                <h2>This is About Us page</h2>
                <div>
                  <SampleContext.Consumer>
                    {(data)=>{
                        console.log(data.loggeduser)
                    }}
                  </SampleContext.Consumer>
                </div>
                <Userclass/>
            </div>
        )

    }
}

export default About;
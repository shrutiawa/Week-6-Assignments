import {Component} from "react"
import Header from "./header"
import Footer from "./footer"
import Main from "./main"
class App extends Component{
        render(){
            return <div><Header/>
            <Main/>
            <Footer/>
            </div>
        }
    }
    export default App;
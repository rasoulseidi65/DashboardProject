import React, {Component} from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Content from "./Content";
import {BrowserRouter} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <BrowserRouter>
                    <Navbar/>
                    <Sidebar/>
                    <Content/>
                    <Footer/>

                </BrowserRouter>,


            </div>
        );
    }
}

export default App;
import React, {Component} from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Content from "./Content";


class App extends Component {
    render() {
        return (
            <div>
              <Navbar/>
              <Sidebar/>
              <Content/>
              <Footer/>

            </div>
        );
    }
}

export default App;
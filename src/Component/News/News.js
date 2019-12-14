import React, {Component} from 'react';
import {Link} from "react-router-dom";


export default class News extends Component {
    render() {
        return (
            <div className="content-wrapper">

                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>News</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                                    <li className="breadcrumb-item active">News</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </section>

                <div className="container">

                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <table className="table">
                                <thead className="table-danger">
                                <tr>
                                    <th>GroupName</th>
                                    <th>Title</th>
                                    <th>Abstract</th>
                                    <th>Detail</th>
                                    <th>Image</th>
                                    <th>AddNews</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>ajdvbj</th>
                                    <th>ajdvbj</th>
                                    <th>ajdvbj</th>
                                    <th>ajdvbj</th>
                                    <th>ajdvbj</th>
                                    <th>ajdvbj</th>
                                </tr>
                                <tr>
                                    <th>ajdvbj</th>
                                    <th>ajdvbj</th>
                                    <th>ajdvbj</th>
                                    <th>ajdvbj</th>
                                    <th>ajdvbj</th>
                                    <th>ajdvbj</th>
                                </tr>


                                </tbody>
                            </table>

                        </div>

                    </div>

                </div>



            </div>
        );
    }
}

import React, {Component} from 'react';
import {Link} from "react-router-dom";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
export default class GroupNews extends Component {
    render() {
        return (
            <div className="content-wrapper">

                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>GroupNews</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                                    <li className="breadcrumb-item active">GroupNews</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                </section>

                <div className="container">
                    <div className="row">
                        <div className="col-xl-10 col-lg-10 col-md-6">
                            <form action="">
                                <div className="form-group">
                                    <label>GroupNews:</label>
                                    <input className="form-control"/>

                                </div>

                            </form>
                            <button className="btn btn-info">ADD</button>


                        </div>

                    </div>

                    <div className="row">
                        <div className="col-xl-10 col-lg-10">
                            <table className="table" style={{marginTop: '150px'}}>
                                <thead className="table-danger">
                                <tr>
                                    <th>Row</th>
                                    <th>GroupName</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th>ajdvbj</th>
                                    <th>ajdvbj</th>
                                    <th><span >
                                         <div className="App">
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        data=""
                                        onInit={ editor => {

                                            console.log( 'Editor is ready to use!', editor );
                                        } }
                                        onChange={ ( event, editor ) => {
                                            const data = editor.getData();
                                            console.log( { event, editor, data } );
                                        } }
                                        onBlur={ ( event, editor ) => {
                                            console.log( 'Blur.', editor );
                                        } }
                                        onFocus={ ( event, editor ) => {
                                            console.log( 'Focus.', editor );
                                        } }
                                    />
                                </div>
                                    </span></th>
                                    <th><span className="fa fa-trash"></span></th>
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

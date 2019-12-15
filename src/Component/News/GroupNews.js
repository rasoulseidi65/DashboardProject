import React, { Component,useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";


export default class GroupNews extends React.Component {
  state = {
    group_name: '',
  }
  componentDidMount() {
    this.getGroupnews();
    
  }
  handleChange = event => {
    this.setState({ group_name: event.target.value });
  }
  async getGroupnews() {
    await axios
      .get("http://localhost:3000/api/v1/admin/groupnews")
      .then(response => console.log(response.data))
      .catch(error => console.log("err" + error));
  }
  addCustomer=_=>{
    const {customer}=this.state;
    fetch(`http://localhost:3000/api/v1/admin/groupnews?group_name=${this.state.group_name}`)
      
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
}
  async addGroupnews() {
    const group_name = {
      group_name: 'fffff'
    };
    await axios
      .post(`http://localhost:3000/api/v1/admin/groupnews`, {group_name})
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
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
                  <li className="breadcrumb-item">
                    <Link to="/dashboard">Home</Link>
                  </li>
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
                  <input
                    className="form-control"
                    value={this.state.group_name}
                    onChange={this.handleChange}
                  />
                  {this.state.group_name}
                </div>
              </form>
              <button className="btn btn-info" onClick={this.addCustomer}>
                ADD
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-10 col-lg-10">
              <table className="table" style={{ marginTop: "150px" }}>
                <thead className="table-danger">
                  <tr>
                    <th>#</th>
                    <th>GroupName</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>ajdvbj</th>
                    <th>ajdvbj</th>
                   
                    <th>
                      <span className="fa fa-trash"></span>
                    </th>
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

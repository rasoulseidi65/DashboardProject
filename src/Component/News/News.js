import React, { Component } from "react";
import { Link } from "react-router-dom";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { MDBDataTable } from "mdbreact";
const data = {
  columns: [
    {
      label: "Group news",
      field: "name",
      sort: "asc",
      width: 150
    },
    {
      label: " Title news",
      field: "position",
      sort: "asc",
      width: 270
    },
    {
      label: " Abstract",
      field: "office",
      sort: "asc",
      width: 200
    },
    {
      label: "detaile news ",
      field: "age",
      sort: "asc",
      width: 100
    },
    {
      label: "Edit",
      field: "date",
      sort: "asc",
      width: 150
    },
    {
      label: "Delete",
      field: "salary",
      sort: "asc",
      width: 100
    }
  ],
  rows: [
    {
      name: "Tiger Nixon",
      position: "System Architect",
      office: "Edinburgh",
      age: "61",
      date: <i className='fa fa-edit'></i>,
      salary: <i className='fa fa-trash'></i>
    },
    {
      name: "Garrett Winters",
      position: "Accountant",
      office: "Tokyo",
      age: "63",
      date: <i className='fa fa-edit'></i>,
      salary: <i className='fa fa-trash'></i>
    },
    {
      name: "Ashton Cox",
      position: "Junior Technical Author",
      office: "San Francisco",
      age: "66",
      date: <i className='fa fa-edit'></i>,
      salary: <i className='fa fa-trash'></i>
    },
    {
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      office: "Edinburgh",
      age: "22",
      date: <i className='fa fa-edit'></i>,
      salary: <i className='fa fa-trash'></i>
    },
    {
      name: "Airi Satou",
      position: "Accountant",
      office: "Tokyo",
      age: "33",
      date: <i className='fa fa-edit'></i>,
      salary: <i className='fa fa-trash'></i>
    },
    {
      name: "Brielle Williamson",
      position: "Integration Specialist",
      office: "New York",
      age: "61",
      date: <i className='fa fa-edit'></i>,
      salary: <i className='fa fa-trash'></i>
    },
    {
      name: "Herrod Chandler",
      position: "Sales Assistant",
      office: "San Francisco",
      age: "59",
      date: <i className='fa fa-edit'></i>,
      salary: <i className='fa fa-trash'></i>
    },
    {
      name: "Rhona Davidson",
      position: "Integration Specialist",
      office: "Tokyo",
      age: "55",
      date: <i className='fa fa-edit'></i>,
      salary: <i className='fa fa-trash'></i>
    },
    {
      name: "Colleen Hurst",
      position: "Javascript Developer",
      office: "San Francisco",
      age: "39",
      date: <i className='fa fa-edit'></i>,
      salary: <i className='fa fa-trash'></i>
    },
    {
      name: "Sonya Frost",
      position: "Software Engineer",
      office: "Edinburgh",
      age: "23",
      date: <i className='fa fa-edit'></i>,
      salary: <i className='fa fa-trash'></i>
    },
    {
      name: "Jena Gaines",
      position: "Office Manager",
      office: "London",
      age: "30",
      date: <i className='fa fa-edit'></i>,
      salary: <i className='fa fa-trash'></i>
    },
    {
      name: "Quinn Flynn",
      position: "Support Lead",
      office: "Edinburgh",
      age: "22",
      date: <i className='fa fa-edit'></i>,
      salary: <i className='fa fa-trash'></i>
    },
    {
      name: "Charde Marshall",
      position: "Regional Director",
      office: "San Francisco",
      age: "36",
      date: <i className='fa fa-edit'></i>,
      salary: <i className='fa fa-trash'></i>
    },
    {
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      office: "London",
      age: "43",
      date: "2012/12/18",
      salary: "$313"
    },
    {
      name: "Tatyana Fitzpatrick",
      position: "Regional Director",
      office: "London",
      age: "19",
      date: "2010/03/17",
      salary: "$385"
    },
    {
      name: "Michael Silva",
      position: "Marketing Designer",
      office: "London",
      age: "66",
      date: "2012/11/27",
      salary: "$198"
    },
    {
      name: "Paul Byrd",
      position: "Chief Financial Officer (CFO)",
      office: "New York",
      age: "64",
      date: "2010/06/09",
      salary: "$725"
    },
    {
      name: "Gloria Little",
      position: "Systems Administrator",
      office: "New York",
      age: "59",
      date: "2009/04/10",
      salary: "$237"
    },
    {
      name: "Bradley Greer",
      position: "Software Engineer",
      office: "London",
      age: "41",
      date: "2012/10/13",
      salary: "$132"
    },
    {
      name: "Dai Rios",
      position: "Personnel Lead",
      office: "Edinburgh",
      age: "35",
      date: "2012/09/26",
      salary: "$217"
    },
    {
      name: "Jenette Caldwell",
      position: "Development Lead",
      office: "New York",
      age: "30",
      date: "2011/09/03",
      salary: "$345"
    }
  ]
};
export default function News() {
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
                <li className="breadcrumb-item">
                  <Link to="/dashboard">Home</Link>
                </li>
                <li className="breadcrumb-item active">News</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <div className="card card-primary">
        <div className="card-header">
          <h3 className="card-title">Add news</h3>
        </div>

        <form role="form">
          <div className="card-body">
            <div className="form-group">
              <label for="exampleInputEmail1">Group name:</label>
              <select className="form-control">
                <option>House</option>
                <option>Vila</option>
                <option>option 3</option>
                <option>option 4</option>
                <option>option 5</option>
              </select>{" "}
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Title news:</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Title news"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Abstract news:</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Abstract news"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Detail news:</label>
              <CKEditor
                editor={ClassicEditor}
                data=""
                onInit={editor => {
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputFile">Image</label>
              <div className="input-group">
                <div className="custom-file">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="exampleInputFile"
                  />
                  <label className="custom-file-label" for="exampleInputFile">
                    Choose file
                  </label>
                </div>
                <div className="input-group-append">
                  <span className="input-group-text" id="">
                    Upload
                  </span>
                </div>
              </div>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
          </div>

          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="container">
      <MDBDataTable striped bordered hover data={data} />

      </div>
      <style>
      {
        `
        .fa.fa-trash{
          color:#ff3547;
        }
        .fa.fa-edit{
          color:#013856;
        }
        `
      }
      </style>
    </div>
  );
}

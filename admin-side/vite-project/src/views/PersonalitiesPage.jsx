import React from "react";
import SidebarComponent from "../components/SidebarComponent";

function PersonalitiesPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <SidebarComponent />
        <main
          role="main"
          className="col-md-9 ml-sm-auto col-lg-10 px-md-4 content"
        >
          <h2 className="mt-4">Personalities</h2>

          <div
            className="table-responsive mt-4"
            style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <table
              className="table table-bordered"
              style={{
                borderRadius: "20px",
                boxShadow: "5px 5px 10px #101010, -5px -5px 10px #323232",
              }}
            >
              <thead>
                <tr>
                  <th
                    scope="col"
                    style={{
                      width: "30px",
                      textAlign: "center",
                      backgroundColor: "#212121",
                      color: "white",
                      border: "1px solid #ffffff",
                    }}
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    style={{
                      width: "30px",
                      textAlign: "center",
                      backgroundColor: "#212121",
                      color: "white",
                      border: "1px solid #ffffff",
                    }}
                  >
                    Score
                  </th>
                  <th
                    scope="col"
                    style={{
                      textAlign: "center",
                      backgroundColor: "#212121",
                      color: "white",
                      border: "1px solid #ffffff",
                    }}
                  >
                    Personality
                  </th>
                  <th
                    scope="col"
                    style={{
                      width: "200px",
                      textAlign: "center",
                      backgroundColor: "#212121",
                      color: "white",
                      border: "1px solid #ffffff",
                    }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td style={{
                      width: "30px",
                      backgroundColor: "#212121",
                      color: "white",
                      border: "1px solid #ffffff",
                    }} className="text-center" >1</td>
                  <td style={{
                      width: "30px",
                      backgroundColor: "#212121",
                      color: "white",
                      border: "1px solid #ffffff",
                    }} className="text-center">90</td>
                  <td style={{
                      backgroundColor: "#212121",
                      color: "white",
                      border: "1px solid #ffffff",
                    }}>Personality A</td>
                  <td className="text-center" style={{
                      backgroundColor: "#212121",
                      color: "white",
                      border: "1px solid #ffffff",
                      width: "200px",
                    }}>
                    <button className="btn btn-outline-light">Edit</button>
                    <button className="btn btn-outline-danger ml-2">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PersonalitiesPage;

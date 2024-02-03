import React from "react";
import PersonalityComponent from "../components/PersonalityComponent";
import RegisterComponent from "../components/RegisterComponent";
import SidebarComponent from "../components/SidebarComponent";

function HomePage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <SidebarComponent/>
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 content">
          <PersonalityComponent/>
        </main>
      </div>
    </div>
  );
}

export default HomePage;

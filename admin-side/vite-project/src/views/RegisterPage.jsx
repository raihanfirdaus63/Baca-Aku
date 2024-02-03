import React from 'react'
import SidebarComponent from '../components/SidebarComponent'
import RegisterComponent from '../components/RegisterComponent'

function RegisterPage() {
  return (
    <div className="container-fluid">
    <div className="row">
      <SidebarComponent/>
      <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 content">
        <RegisterComponent/>
      </main>
    </div>
  </div>
  )
}

export default RegisterPage
import React, { useState, useEffect } from "react";
import PersonalityComponent from "../components/PersonalityComponent";
import RegisterComponent from "../components/RegisterComponent";
import SidebarComponent from "../components/SidebarComponent";

function HomePage() {
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    // Simulasikan waktu loading data (contoh: 2 detik)
    const timeout = setTimeout(() => {
      setDataLoaded(true);
    }, 2000);

    // Membersihkan timeout pada unmount komponen
    return () => clearTimeout(timeout);
  }, []); // Kita ingin efek ini hanya dijalankan saat mounting

  return (
    <div className="container-fluid">
      <div className="row">
        <SidebarComponent />
        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4 content">
          {dataLoaded ? (
            <PersonalityComponent />
          ) : (
            // Tampilkan skeleton loading jika data belum dimuat
            <div className="skeleton-loading">
              {/* Anda dapat menyesuaikan tampilan skeleton sesuai kebutuhan */}
              <div className="skeleton-box"></div>
              <div className="skeleton-box"></div>
              <div className="skeleton-box"></div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default HomePage;

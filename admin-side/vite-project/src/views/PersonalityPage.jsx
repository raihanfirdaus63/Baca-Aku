// PersonalityPage.jsx
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SidebarComponent from "../components/SidebarComponent";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function PersonalityPage() {
  const personalities = useSelector((state) => state.personality.personality);
  const navigate = useNavigate();
  const textAreaRef = useRef(null);

  const handleCopyAll = () => {
    const allText = personalities.join("\n");
    textAreaRef.current.value = allText;
    textAreaRef.current.select();
    document.execCommand("copy");
    alert("Copied all paragraphs to clipboard!");
  };

  const handleBack = () => {
    // Navigate back to the main page
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SidebarComponent />
        <main
          role="main"
          className="col-md-9 ml-sm-auto col-lg-10 px-md-4 content d-flex justify-content-center align-items-center"
        >
          <section className="d-flex flex-column">
            <div
              style={{
                display: "flex",
                justifyContent: "left",
                marginBottom: "20px",
                alignItems: "center",
              }}
            >
              <Button
                variant="warning"
                style={{
                  backgroundColor: "#fefef6",
                  border: "none",
                  color: "black",
                  width: "120px",
                  height: "40px",
                  marginRight: "10px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  boxShadow: "5px 5px 12px #0e0d0d, -5px -5px 12px #363333",
                }}
                onClick={handleBack}
              >
                Back
              </Button>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#222020",
                  border: "none",
                  color: "white",
                  width: "120px",
                  height: "40px",
                  borderRadius: "12px",
                  fontSize: "14px",
                  boxShadow: "5px 5px 12px #0e0d0d, -5px -5px 12px #363333",
                }}
                onClick={handleCopyAll}
              >
                Copy All
              </Button>
            </div>
            {personalities.length > 0 ? (
              <div>
                <Card
                  style={{
                    borderRadius: "16px",
                    background: "#252523",
                    color: "white",
                    padding: "50px",
                    textAlign: "center",
                    position: "relative",
                    boxShadow: "5px 5px 10px #10100f, -5px -5px 10px #3a3a37",
                  }}
                >
                  <textarea
                    ref={textAreaRef}
                    style={{ position: "absolute", top: "-9999px" }}
                  />
                  <div>
                    {personalities.map((personality, index) => (
                      <p key={index}>{personality}</p>
                    ))}
                  </div>
                </Card>
              </div>
            ) : (
              <p>No personality data available.</p>
            )}
          </section>
        </main>
      </div>
    </div>
  );
}

export default PersonalityPage;

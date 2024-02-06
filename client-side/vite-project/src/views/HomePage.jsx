import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import loaderImage from "../assets/images/loader-image.png";
import Container from "react-bootstrap/Container";
import loginImage from "../assets/images/Login-image.png";
import karakterImage from "../assets/images/Karakter.png";
import pekerjaanImage from "../assets/images/Pekerjaan.png";
import pasanganImage from "../assets/images/Pasangan.png";
import jodohImage from "../assets/images/Jodoh.png";
import asmaraImage from "../assets/images/asmara.png";
import rezekiImage from "../assets/images/Rezeki.png";
import keberuntunganImage from "../assets/images/Keburuntungan.png";
import sialImage from "../assets/images/Hari Sial.png";
import karirImage from "../assets/images/karir.png";
import kesehatanImage from "../assets/images/Kesehatan.png";

import { Card, Row, Col, Button } from "react-bootstrap";

function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Ganti angka 2000 dengan durasi loading yang diinginkan dalam milidetik
    return () => clearTimeout(timer);
  }, []);
  return (
    <Container fluid className="mt-5">
      {loading ? (
        <div className="loader">
          <img src={loaderImage} alt="" style={{ width: "100%" }} />
        </div>
      ) : (
        <Row className="justify-content-center">
          <div
            className="text-center"
            style={{
              color: "white",
              fontSize: "2em",
              fontFamily: "'Merienda One', sans-serif",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Menambahkan bayangan pada teks
            }}
          >
            Jelajahi Dimensi Lain di Dalam Dirimu!
          </div>
          <Col
            md={4}
            className="my-4 d-flex justify-content-center align-items-center"
          >
            <Card
              style={{
                borderRadius: "10px",
                background: "rgba(33, 33, 33, 0.8)",
                color: "white",
                boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
                maxWidth: "400px",
              }}
            >
              <Card.Img variant="top" src={karakterImage} alt="Login Image" />
              <Card.Body>
                <Card.Title
                  className="text-center mb-4"
                  style={{
                    fontSize: "1.6em",
                  }}
                >
                  Karakterku
                </Card.Title>
                <Card.Text className="text-center">
                  Temukan karakter unikmu berdasarkan tanggal, bulan, dan tahun
                  kelahiranmu! Ungkap karakteristik khas yang mungkin kamu
                  miliki berdasarkan astrologi, numerologi, dan faktor-faktor
                  lainnya.
                </Card.Text>
                <div className="text-center">
                  <Link to="/karakterku">
                    <Button
                      variant="light"
                      style={{
                        borderRadius: "25px",
                        background: "#212121",
                        boxShadow:
                          "8px 8px 16px #0d0d0d, -8px -8px 16px #353535",
                        padding: "8px 30px", // Mengatur ukuran tombol
                        color: "white",
                      }}
                    >
                      Let's go
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            md={4}
            className="my-4 d-flex justify-content-center align-items-center"
          >
            <Card
              style={{
                borderRadius: "10px",
                background: "rgba(33, 33, 33, 0.8)",
                color: "white",
                boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
                maxWidth: "400px",
              }}
            >
              <Card.Img variant="top" src={pekerjaanImage} alt="Login Image" />
              <Card.Body>
                <Card.Title
                  className="text-center mb-4"
                  style={{
                    fontSize: "1.6em",
                  }}
                >
                  Pekerjaanku
                </Card.Title>
                <Card.Text className="text-center">
                  Temukan pekerjaan cocokmu berdasarkan tanggal lahir dan kartu
                  tarot! Masukkan tanggal lahirmu, dan kami akan memberikan
                  rekomendasi pekerjaan berdasarkan tarot yang dihasilkan.
                </Card.Text>
                <div className="text-center">
                <Link to="/comingsoon">
                    <Button
                      variant="light"
                      style={{
                        borderRadius: "25px",
                        background: "#212121",
                        boxShadow:
                          "8px 8px 16px #0d0d0d, -8px -8px 16px #353535",
                        padding: "8px 30px", // Mengatur ukuran tombol
                        color: "white",
                      }}
                    >
                      Let's go
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            md={4}
            className="my-4 d-flex justify-content-center align-items-center"
          >
            <Card
              style={{
                borderRadius: "10px",
                background: "rgba(33, 33, 33, 0.8)",
                color: "white",
                boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
                maxWidth: "400px",
              }}
            >
              <Card.Img variant="top" src={pasanganImage} alt="Login Image" />
              <Card.Body>
                <Card.Title
                  className="text-center mb-4"
                  style={{
                    fontSize: "1.6em",
                  }}
                >
                  Kecocokan Pasangan
                </Card.Title>
                <Card.Text className="text-center">
                  Jelajahi keselarasan unikmu dengan pasanganmu melalui gabungan
                  astrologi dan mistisisme tarot! Temukan seberapa cocoknya
                  kalian sebagai pasangan yang unik.
                </Card.Text>
                <div className="text-center">
                <Link to="/comingsoon">
                    <Button
                      variant="light"
                      style={{
                        borderRadius: "25px",
                        background: "#212121",
                        boxShadow:
                          "8px 8px 16px #0d0d0d, -8px -8px 16px #353535",
                        padding: "8px 30px", // Mengatur ukuran tombol
                        color: "white",
                      }}
                    >
                      Let's go
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            md={4}
            className="my-4 d-flex justify-content-center align-items-center"
          >
            <Card
              style={{
                borderRadius: "10px",
                background: "rgba(33, 33, 33, 0.8)",
                color: "white",
                boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
                maxWidth: "400px",
              }}
            >
              <Card.Img variant="top" src={jodohImage} alt="Jodoh Image" />
              <Card.Body>
                <Card.Title
                  className="text-center mb-4"
                  style={{
                    fontSize: "1.6em",
                  }}
                >
                  Jodohku
                </Card.Title>
                <Card.Text className="text-center">
                  Temukan ciri-ciri jodoh yang cocok untuk kamu! Temukan
                  kompatibilitas unikmu dan dapatkan wawasan tentang pasangan
                  yang tepat untuk memulai perjalanan menuju cinta sejati!
                </Card.Text>
                <div className="text-center">
                <Link to="/comingsoon">
                    <Button
                      variant="light"
                      style={{
                        borderRadius: "25px",
                        background: "#212121",
                        boxShadow:
                          "8px 8px 16px #0d0d0d, -8px -8px 16px #353535",
                        padding: "8px 30px", // Mengatur ukuran tombol
                        color: "white",
                      }}
                    >
                      Let's go
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            md={4}
            className="my-4 d-flex justify-content-center align-items-center"
          >
            <Card
              style={{
                borderRadius: "10px",
                background: "rgba(33, 33, 33, 0.8)",
                color: "white",
                boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
                maxWidth: "400px",
              }}
            >
              <Card.Img variant="top" src={asmaraImage} alt="Login Image" />
              <Card.Body>
                <Card.Title
                  className="text-center mb-4"
                  style={{
                    fontSize: "1.6em",
                  }}
                >
                  Asmaraku
                </Card.Title>
                <Card.Text className="text-center">
                  Tentukan ramalan khusus tentang kehidupan asmara kamu yang
                  akan datang. Dapatkan wawasan mendalam tentang romansa,
                  pertemuan, dan kebahagiaan yang menanti di jalan kamu.
                </Card.Text>
                <div className="text-center">
                <Link to="/comingsoon">
                    <Button
                      variant="light"
                      style={{
                        borderRadius: "25px",
                        background: "#212121",
                        boxShadow:
                          "8px 8px 16px #0d0d0d, -8px -8px 16px #353535",
                        padding: "8px 30px", // Mengatur ukuran tombol
                        color: "white",
                      }}
                    >
                      Let's go
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            md={4}
            className="my-4 d-flex justify-content-center align-items-center"
          >
            <Card
              style={{
                borderRadius: "10px",
                background: "rgba(33, 33, 33, 0.8)",
                color: "white",
                boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
                maxWidth: "400px",
              }}
            >
              <Card.Img variant="top" src={rezekiImage} alt="Login Image" />
              <Card.Body>
                <Card.Title
                  className="text-center mb-4"
                  style={{
                    fontSize: "1.6em",
                  }}
                >
                  Rezekiku
                </Card.Title>
                <Card.Text className="text-center">
                  Tentukan ramalan khusus tentang rezekimu yang akan datang.
                  Dapatkan wawasan mendalam tentang peluang, keberuntungan, dan
                  potensi finansial yang menanti di jalanmu.
                </Card.Text>
                <div className="text-center">
                <Link to="/comingsoon">
                    <Button
                      variant="light"
                      style={{
                        borderRadius: "25px",
                        background: "#212121",
                        boxShadow:
                          "8px 8px 16px #0d0d0d, -8px -8px 16px #353535",
                        padding: "8px 30px", // Mengatur ukuran tombol
                        color: "white",
                      }}
                    >
                      Let's go
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            md={4}
            className="my-4 d-flex justify-content-center align-items-center"
          >
            <Card
              style={{
                borderRadius: "10px",
                background: "rgba(33, 33, 33, 0.8)",
                color: "white",
                boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
                maxWidth: "400px",
              }}
            >
              <Card.Img variant="top" src={rezekiImage} alt="Login Image" />
              <Card.Body>
                <Card.Title
                  className="text-center mb-4"
                  style={{
                    fontSize: "1.6em",
                  }}
                >
                  Keberuntunganku
                </Card.Title>
                <Card.Text className="text-center">
                  Telusuri keberuntunganmu yang akan datang. Dapatkan pandangan
                  dalam mengenai potensi keberhasilan, peluang yang tersedia,
                  dan momen keberuntungan yang menantimu di masa depan.
                </Card.Text>
                <div className="text-center">
                <Link to="/comingsoon">
                    <Button
                      variant="light"
                      style={{
                        borderRadius: "25px",
                        background: "#212121",
                        boxShadow:
                          "8px 8px 16px #0d0d0d, -8px -8px 16px #353535",
                        padding: "8px 30px", // Mengatur ukuran tombol
                        color: "white",
                      }}
                    >
                      Let's go
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            md={4}
            className="my-4 d-flex justify-content-center align-items-center"
          >
            <Card
              style={{
                borderRadius: "10px",
                background: "rgba(33, 33, 33, 0.8)",
                color: "white",
                boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
                maxWidth: "400px",
              }}
            >
              <Card.Img variant="top" src={sialImage} alt="Login Image" />
              <Card.Body>
                <Card.Title
                  className="text-center mb-4"
                  style={{
                    fontSize: "1.6em",
                  }}
                >
                  Kesialanku
                </Card.Title>
                <Card.Text className="text-center">
                  Kupas tuntas kesialanmu yang mungkin datang. Temukan wawasan
                  mendalam tentang hambatan yang mungkin kamu hadapi, serta
                  strategi untuk mengatasinya dan mengubah keberuntunganmu.
                </Card.Text>
                <div className="text-center">
                <Link to="/comingsoon">
                    <Button
                      variant="light"
                      style={{
                        borderRadius: "25px",
                        background: "#212121",
                        boxShadow:
                          "8px 8px 16px #0d0d0d, -8px -8px 16px #353535",
                        padding: "8px 30px", // Mengatur ukuran tombol
                        color: "white",
                      }}
                    >
                      Let's go
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            md={4}
            className="my-4 d-flex justify-content-center align-items-center"
          >
            <Card
              style={{
                borderRadius: "10px",
                background: "rgba(33, 33, 33, 0.8)",
                color: "white",
                boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
                maxWidth: "400px",
              }}
            >
              <Card.Img variant="top" src={karirImage} alt="Login Image" />
              <Card.Body>
                <Card.Title
                  className="text-center mb-4"
                  style={{
                    fontSize: "1.6em",
                  }}
                >
                  Karirku
                </Card.Title>
                <Card.Text className="text-center">
                  Tentukan arah karirmu yang akan datang. Dapatkan wawasan
                  tentang peluang, tantangan, dan langkah-langkah yang dapat
                  membantu kamu mencapai kesuksesan dalam dunia profesionalmu.
                </Card.Text>
                <div className="text-center">
                <Link to="/comingsoon">
                    <Button
                      variant="light"
                      style={{
                        borderRadius: "25px",
                        background: "#212121",
                        boxShadow:
                          "8px 8px 16px #0d0d0d, -8px -8px 16px #353535",
                        padding: "8px 30px", // Mengatur ukuran tombol
                        color: "white",
                      }}
                    >
                      Let's go
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col
            md={4}
            className="my-4 d-flex justify-content-center align-items-center"
          >
            <Card
              style={{
                borderRadius: "10px",
                background: "rgba(33, 33, 33, 0.8)",
                color: "white",
                boxShadow: "5px 5px 15px #0d0d0d, -5px -5px 15px #353535",
                maxWidth: "400px",
              }}
            >
              <Card.Img variant="top" src={kesehatanImage} alt="Login Image" />
              <Card.Body>
                <Card.Title
                  className="text-center mb-4"
                  style={{
                    fontSize: "1.6em",
                  }}
                >
                  Kesehatanku
                </Card.Title>
                <Card.Text className="text-center">
                  Dimensi kesehatanmu di masa yang akan datang. Temukan
                  pencerahan tentang tantangan yang mungkin dihadapi, serta
                  langkah memperkuat dan menjaga kesehatanmu dengan lebih baik.
                </Card.Text>
                <div className="text-center">
                <Link to="/comingsoon">
                    <Button
                      variant="light"
                      style={{
                        borderRadius: "25px",
                        background: "#212121",
                        boxShadow:
                          "8px 8px 16px #0d0d0d, -8px -8px 16px #353535",
                        padding: "8px 30px", // Mengatur ukuran tombol
                        color: "white",
                      }}
                    >
                      Let's go
                    </Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default HomePage;

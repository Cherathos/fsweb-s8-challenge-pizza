import "../App.css"
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Home({ setSelectedPizza }) {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <img
          className="header-banner"
          src="/assets/iteration-1/home-banner.png"
          alt="pizza"
        />

        <div className="header-items">
          <img src="/assets/iteration-1/logo.svg" alt="Teknolojik Yemekler logo" />

          <div className="header-text">
            <h3 className="satisfy-text">fırsatı kaçırma</h3>
            <h2>KOD ACIKTIRIR</h2>
            <h2>PIZZA, DOYURUR</h2>
          </div>

          <button 
          className="header-button"
          onClick={() => {
            navigate("/order");
            setSelectedPizza({ 
              name: "Position: Absolute Acı Pizza",
              price: 60,
            });
          }}>
            ACIKTIM
          </button>
        </div>
      </header>

      <section className="menu">
        <div className="menu-items">
          <div className="menu-item">
            <img src="/assets/iteration-2/icons/1.svg" alt="Kore" />
            <a href="#">YENİ! Kore</a>
          </div>

          <div className="menu-item">
            <img src="/assets/iteration-2/icons/2.svg" alt="Pizza" />
            <a href="#">Pizza</a>
          </div>

          <div className="menu-item">
            <img src="/assets/iteration-2/icons/3.svg" alt="Burger" />
            <a href="#">Burger</a>
          </div>

          <div className="menu-item">
            <img src="/assets/iteration-2/icons/4.svg" alt="Kızartmalar" />
            <a href="#">Kızartmalar</a>
          </div>

          <div className="menu-item">
            <img src="/assets/iteration-2/icons/5.svg" alt="Fast Food" />
            <a href="#">Fast Food</a>
          </div>

          <div className="menu-item">
            <img
              src="/assets/iteration-2/icons/6.svg"
              alt="Gazlı İçecek"
            />
            <a href="#">Gazlı İçecek</a>
          </div>
        </div>
      </section>

      <main>
        <section className="menu-tanitim">
          <div className="menu-sol">
            <img
              src="/assets/iteration-2/cta/kart-1.png"
              alt="Lezzetus"
            />

            <div className="menu-sol-content">
              <h2>
                Özel
                <br />
                Lezzetus
              </h2>

              <h4>Position: Absolute Acı Burger</h4>

              <button 
              className="button"
                onClick={() => {
                  navigate("/order");
                  setSelectedPizza({ 
                    name: "Position: Absolute Acı Burger",
                    price: 60,
                  });
                }}>
                SİPARİŞ VER
              </button>
            </div>
          </div>

          <div className="menu-sag">
            <div className="menu-sag-ust">
              <img
                src="/assets/iteration-2/cta/kart-2.png"
                alt="Hackathlon Burger Menü"
              />

              <div className="menu-content">
                <h2>
                  Hackathlon
                  <br />
                  Burger Menü
                </h2>

                <button 
                className="button"
                  onClick={() => {
                    navigate("/order");
                    setSelectedPizza({ 
                      name: "Hackathlon Burger",
                      price: 70,
                    });
                  }}>
                  SİPARİŞ VER
                </button>
              </div>
            </div>

            <div className="menu-sag-alt">
              <img
                src="/assets/iteration-2/cta/kart-3.png"
                alt="Hızlı kurye"
              />

              <div className="menu-content">
                <h2>
                  <span>Çooooook</span> hızlı
                  <br />
                  npm gibi kurye
                </h2>

                <button 
                className="button"
                  onClick={() => {
                    navigate("/order");
                    setSelectedPizza({ 
                      name: "Terminal Pizza",
                      price: 80,
                    });
                  }}>
                  SİPARİŞ VER
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="en-cok">
          <p>en çok paketlenen menüler</p>

          <h2>
            Acıktıran Kodlara Doyuran Lezzetler
          </h2>
        </section>

        <section className="en-cok-menuler">
          <div className="menu-items">
            <button className="food">
              <img
                src="/assets/iteration-2/icons/1.svg"
                alt="Ramen"
              />
              <p>Ramen</p>
            </button>

            <button className="food">
              <img
                src="/assets/iteration-2/icons/2.svg"
                alt="Pizza"
              />
              <p>Pizza</p>
            </button>

            <button className="food">
              <img
                src="/assets/iteration-2/icons/3.svg"
                alt="Burger"
              />
              <p>Burger</p>
            </button>

            <button className="food">
              <img
                src="/assets/iteration-2/icons/4.svg"
                alt="French Fries"
              />
              <p>French fries</p>
            </button>

            <button className="food">
              <img
                src="/assets/iteration-2/icons/5.svg"
                alt="Fast Food"
              />
              <p>Fast Food</p>
            </button>

            <button className="food">
              <img
                src="/assets/iteration-2/icons/6.svg"
                alt="Soft Drinks"
              />
              <p>Soft Drinks</p>
            </button>
          </div>

          <div className="en-cok-menu">
            <div className="pizza">
              <img
                src="/assets/iteration-2/pictures/food-1.png"
                alt="Terminal Pizza"
                onClick={() => {
                    navigate("/order");
                    setSelectedPizza({ 
                      name: "Terminal Pizza",
                      price: 60,
                    });
                  }
                }
              />

              <div className="en-cok-menu-content">
                <h2>Terminal Pizza</h2>
                <p>
                  4.9
                  <span>60₺</span>
                </p>
              </div>
            </div>

            <div className="pizza">
              <img
                src="/assets/iteration-2/pictures/food-2.png"
                alt="Position Absolute Acı Pizza"
                 onClick={() => {
                    navigate("/order");
                    setSelectedPizza({ 
                      name: "Position: Absolute Acı Pizza",
                      price: 70,
                    });
                  }
                }
              />

              <div className="en-cok-menu-content">
                <h2>Position: Absolute Acı Pizza</h2>
                <p>
                  4.9
                  <span>70₺</span>
                </p>
              </div>
            </div>

            <div className="pizza">
              <img
                src="/assets/iteration-2/pictures/food-3.png"
                alt="Hackathon Burger"
                 onClick={() => {
                  navigate("/order");
                  setSelectedPizza({ 
              name: "Hackathon Burger",
              price: 60,
            });
          }}
              />

              <div className="en-cok-menu-content">
                <h2>Hackathon Burger</h2>
                <p>
                  4.9
                  <span>50₺</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default Home;
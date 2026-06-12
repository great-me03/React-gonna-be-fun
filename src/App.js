import "./App.css";

const cards = [
  ["360° CAMERA", "camera.png"],
  ['INTELLIGENT COCKPIT SYSTEM 15.6" LCD', "cockpit.png"],
  ["2,500KG OF TOWING", "towing.png"],
];

const tech = [
  ["ELECTRIC HYBRID", "engine.png"],
  ["INNOVATION", "battery.png"],
  ["JET PHEV", "chassis.png"],
  ["OFF-ROAD CHASSIS", "side-view.png"],
];

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>BYD</h2>
        <div>
          <span>About Us</span>
          <span>Vehicles</span>
          <span>Technology</span>
          <span>Contact Us</span>
        </div>
      </nav>

      <section className="hero">
        <video autoPlay muted loop playsInline>
          <source src="/videos/byd-shark-dvc-6.webm" type="video/webm" />
        </video>
        <div className="heroText">
          <h1>SHARK 6</h1>
          <p>Innovation Meets Acceleration</p>
          <button>Book Now</button>
        </div>
      </section>

      <section className="brand">
        <h2>WORLD'S NO.1 PHEV BRAND*</h2>
        <div className="brandBtns">
          <button>EXPRESS YOUR INTEREST</button>
          <button>TEST DRIVE</button>
          <button>BOOK NOW</button>
        </div>
      </section>

      <section className="statsLight">
        <div><small>UP TO</small><h3>800km</h3><p>Combined Range</p></div>
        <div><small>AS FAST AS</small><h3>5.7 sec</h3><p>0 - 100 km/h</p></div>
        <div><small>POWER</small><h3>436 HP & 650 NM</h3><p>Torque</p></div>
        <img src="/images/shark-main.png" alt="BYD Shark" />
      </section>

      <section className="black">
        <h2>PAKISTAN'S BIGGEST PICKUP TRUCK WITH PHEV TECHNOLOGY</h2>
        <img className="wideImg" src="/images/side-view.png" alt="" />
        <div className="twoImgs">
          <img src="/images/front-view.png" alt="" />
          <img src="/images/back-view.png" alt="" />
        </div>
      </section>

      <section className="black">
        <h2>ADVENTURE INSIDE-OUT!</h2>
        <img className="wideImg" src="/images/interior-main.png" alt="" />
        <div className="twoImgs">
          <img src="/images/rear-seat.png" alt="" />
          <img src="/images/gear.png" alt="" />
        </div>
      </section>

      <section className="offroad">
        <div>
          <h2>AWD WITH OFFROAD CAPABILITY</h2>
          <p>
            Designed for mud, snow, sand and powerful towing performance with
            hybrid power and advanced driving technology.
          </p>
        </div>
        <img src="/images/towing.png" alt="" />
      </section>

      <section className="black">
        <h2>NEXT LEVEL CAPABILITY</h2>
        <div className="cards">
          {cards.map((c, i) => (
            <div className="card" key={i}>
              <img src={`/images/${c[1]}`} alt="" />
              <h3>{c[0]}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="v2l">
        <img src="/images/camping.png" alt="" />
        <div>
          <h2>V2L FUNCTION</h2>
          <p>
            Vehicle-to-Load capability allows the battery to be used as a power
            source for outdoor lifestyle needs.
          </p>
        </div>
      </section>

      <section className="black">
        <h2>ADVANCED TECHNICAL ASSEMBLY</h2>
        <div className="techGrid">
          {tech.map((t, i) => (
            <div className="tech" key={i}>
              <img src={`/images/${t[1]}`} alt="" />
              <h3>{t[0]}</h3>
            </div>
          ))}
        </div>
        <button className="download">DOWNLOAD BROCHURE</button>
      </section>

      <section className="final">
        <img src="/images/front-view.png" alt="" />
        <div className="finalPanel">
          <h3>800 km+</h3>
          <h3>5.7 sec*</h3>
          <h3>436 HP</h3>
          <button>BOOK NOW</button>
        </div>
      </section>

      <footer>
        <p>© BYD Pakistan - Assignment Clone</p>
      </footer>
    </>
  );
}

export default App;
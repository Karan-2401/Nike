import "./page.css";
import flip from "../assets/flip.png";
import amaz from "../assets/amaz.png";
import shoe from "../assets/shoe.png"
const Home = () => {
  return (
    <>
      <div id="main_home">
        <div id="main_a">
          <h1 style={{ fontSize: "100px" }}>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
            OUR SHOES.
          </p>
          <div id="btns">
            <button id="btn_r"
              style={{
                backgroundColor: "#D01C28",
                border: "none",
                width: "150px",
                height: "34px",
                color: "white",
                borderRadius: "4px",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Shop now
            </button>
            <button
              style={{
                backgroundColor: "#ffffff",
                border: "2px solid #5a5959",
                width: "150px",
                height: "34px",
                color: "#5a5959",
                borderRadius: "4px",
                fontWeight: "600",
                fontSize: "15px",
              }}
            >
              Catagory
            </button>
          </div>
          <div style={{"display":"flex","flexDirection":"column","gap":"20px"}}>
            <span style={{ color: "#5e5f5f", fontSize: "13px" }}>
              Also available at
            </span>
            <div id="fa">
              <img src={flip} alt="" id="f"/>
              <img src={amaz} alt="" id="a"/>
            </div>
          </div>
        </div>
        <div id="main_b">
            <img src={shoe} alt="" style={{"width":"580px"}} />
        </div>
      </div>
    </>
  );
};
export default Home;

import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
// import icon from "../../assets/icon.svg";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import GaugeChart from "react-gauge-chart";
// import "./App.css";

const Hello = () => {
  const [lattidude, longtitude] = [-7.257598227984894, 112.75072759018188];
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
        overflow: "hidden",
      }}
    >
      <MapContainer
        style={{ height: "65vh", width: "100%", borderRadius: "8px" }}
        center={[lattidude, longtitude]}
        zoom={17}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lattidude, longtitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            width: "30%",
            height: "10",
            margin: "10px",
            borderRadius: "8px",
            background: "#1E1F22",
          }}
        >
          <h3 style={{ textAlign: "center", margin: "10px", color: "#fff" }}>
            Speed
          </h3>
          <div style={{ width: "85%", margin: "auto" }}>
            <GaugeChart
              id="gauge-chart2"
              nrOfLevels={20}
              percent={0.3}
              formatTextValue={(value) => value + " KM/H"}
            />
          </div>
        </div>
        <div
          style={{
            width: "30%",
            height: "10",
            margin: "10px",
            borderRadius: "8px",
            background: "#1E1F22",
          }}
        >
          <h3 style={{ textAlign: "center", margin: "10px", color: "#fff" }}>
            Battery
          </h3>
          <div style={{ width: "85%", margin: "auto" }}>
            <GaugeChart id="gauge-chart7" percent={0.4} animDelay={0} />
          </div>
        </div>
        <div
          style={{
            width: "30%",
            height: "10",
            margin: "10px",
            borderRadius: "8px",
            background: "#1E1F22",
          }}
        >
          <h3 style={{ textAlign: "center", margin: "10px", color: "#fff" }}>
            Temperature
          </h3>
          <div style={{ width: "85%", margin: "auto" }}>
            <GaugeChart
              nrOfLevels={30}
              colors={["#b4cffa", "#c52233"]}
              arcWidth={0.3}
              percent={0.37}
              formatTextValue={(value) => value + " °C"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}

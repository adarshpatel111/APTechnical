import React, { useState, useEffect } from "react";
import { MapContainer, useMap, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Uncomment to ensure map styles are loaded
import L from "leaflet";

function Contact() {
  const [data, setData] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    message: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((formdata) => ({
      ...formdata,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  const position = [
    { title: "Vadodara", lat: 22.3072, lng: 73.1812 },
    { title: "Padra", lat: 22.2412, lng: 73.0856 },
  ]; // Coordinates for the map center

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              {/* Full Name Input */}
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Full Name..."
                />
              </div>
              {/* Phone Number Input */}
              <div className="mb-3">
                <label htmlFor="phonenumber" className="form-label">
                  Phone Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="phonenumber"
                  name="phonenumber"
                  value={data.phonenumber}
                  onChange={InputEvent}
                  placeholder="Ex.123456789"
                />
              </div>
              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              {/* Message Textarea */}
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  rows="3"
                  placeholder="Message....."
                ></textarea>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-outline-primary mb-3">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Leaflet Map */}
      <div className="container-fluid">
        <div className="row">
          <MapContainer
            center={[22.3072, 73.1812]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
          >
            <FitBounds locations={position} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {position.map((Item, index) => {
              return (
                <Marker
                  icon={L.icon({
                    iconUrl:
                      "   https://cdn-icons-png.flaticon.com/512/7945/7945007.png ",
                    iconSize: [50, 50],
                    popupAnchor: [1, -34],
                  })}
                  position={[Item.lat, Item.lng]}
                  key={index}
                >
                  <Popup>
                    <h4>{Item.title}</h4>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>
      </div>
    </>
  );
}

export default Contact;
const FitBounds = ({ locations }) => {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(
      locations.map((location) => [location.lat, location.lng])
    );
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [locations, map]);

  return null;
};

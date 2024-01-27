import React from "react";

import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

// The map component

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 36.81344011448734,
      lng: 10.086560581763838,
    },
    zoom: 11,
  };

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        marginTop: "50px",
        marginBottom: "50px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

import React from "react";

const Map = () => {
  return (
    <div className="relative w-full h-full">
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ width: "100%" }}>
          <div style={{ width: "100%" }}>
            <iframe
              title="Google Map"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=tbilisi,axis%20towers,%20digital%20institute+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;

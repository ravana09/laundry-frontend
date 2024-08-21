import React from 'react';
import { useLocation } from 'react-router-dom';

const LocationLink = ({ address }) => {
  const location = useLocation();
  const Directionaddress = location.state || {};

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const encodedAddress = encodeURIComponent(address);
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${encodedAddress}`;
          window.open(mapsUrl, '_blank');
        },
        (error) => {
          let errorMessage = "Unable to retrieve location.";
          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage = "Location access denied. Please allow location access in your browser settings.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Location information is unavailable.";
              break;
            case error.TIMEOUT:
              errorMessage = "The request to get user location timed out.";
              break;
            case error.UNKNOWN_ERROR:
              errorMessage = "An unknown error occurred.";
              break;
            default:
              errorMessage = "An unexpected error occurred.";
          }
          alert(errorMessage);
          const encodedAddress = encodeURIComponent(address);
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
          window.open(mapsUrl, '_blank');
        }
      );
    } else {
      alert("Geolocation is not supported by this browser. Please use a modern browser.");
      const encodedAddress = encodeURIComponent(address);
      const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
      window.open(mapsUrl, '_blank');
    }
  };

  return (
    <div onClick={handleLocationClick} style={{ cursor: 'pointer' }}>
      {/* {address} */}
    </div>
  );
};

export default LocationLink;

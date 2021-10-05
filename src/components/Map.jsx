// import React from "react";
// import { GoogleMap, Marker, useJsApiLoader  }  from '@react-google-maps/api'

// const containerStyle = {
//   height:"50vh",
//   width:"100%"
// }
// const center = {    
//   lat: 29.07546304461272,
//   lng: -110.96625810807228
// }

// const Map = () => {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: process.env.GOOGLE_API_KEY
//   })

//   const [map, setMap] = React.useState(null)

//   const onLoad = React.useCallback(() => {
//     const bounds = new window.google.maps.LatLngBounds();
//     if(bounds){
//         map.fitBounds(bounds);
//         setMap(map)
//     }
    
//   }, [])

//   const onUnmount = React.useCallback(() => {
//     setMap(null)
//   }, [])

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}
//       onLoad={onLoad}
//       onUnmount={onUnmount}
//     >
//       <Marker position={center}/>
//     </GoogleMap>
//   ) : <></>
// }

// export default Map;


import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {

  const mapStyles = {
    height: "50vh",
    width: "100%"
  }

  const defaultCenter = {
    lat: 29.07546304461272, lng: -110.96625810807228
  }

  // if(data !== undefined){
  //   defaultCenter.lat = data.lat;
  //   defaultCenter.lng = data.lng;    
  // }

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={17}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
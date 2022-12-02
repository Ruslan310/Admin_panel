import {withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps"
import React from "react";
import {compose, withProps, withStateHandlers} from "recompose";

const ManyPointsMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCMFLWodTLb-P8Xym4nFeSKfVxlCpXFgBM&libraries=geometry,drawing,places",
    loadingElement: <div style={{height: `100%`}}/>,
    containerElement: <div style={{height: "100vh", width: "100%"}}/>,
    mapElement: <div style={{height: "100%"}}/>
  }),
  withStateHandlers(
    (props: any) => ({
      infoWindows: props.places.map(() => {
        return {isOpen: false};
      })
    }),
    {
      onToggleOpen: ({infoWindows}) => selectedIndex => {
        console.log(infoWindows)
        return {
          infoWindows: infoWindows.map((iw: any, i: number) => {
            iw.isOpen = selectedIndex === i;
            return iw;
          })
        }
      }
    }
  ),
  withScriptjs,
  withGoogleMap
)((props: any) => (
    null
  // <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}>
  //   {props.places &&
  //   props.places.map((place: any, i: number) => {
  //
  //     return (
  //       <Marker
  //         key={place.id}
  //         position={{lat: place.latitude, lng: place.longitude}}
  //         title="Click to zoom"
  //         onClick={props.onToggleOpen.bind(this, i)}
  //       >
  //         {props.infoWindows[i] && props.infoWindows[i].isOpen && (
  //           <InfoWindow onCloseClick={props.onToggleOpen.bind(i)}>
  //             <div>{place.name}</div>
  //           </InfoWindow>
  //         )}
  //       </Marker>
  //     );
  //   })}
  // </GoogleMap>
));

export default ManyPointsMapComponent;

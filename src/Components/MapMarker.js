import GoogleMapReact from 'google-map-react';


const Marker = props => {
    return <>
      <div className="pin"></div>
      <div className="pulse"></div>
      <div className="label">{props.currentLabel!=props.label?props.label:''}</div>
    </>
  }
  
  export default Marker;
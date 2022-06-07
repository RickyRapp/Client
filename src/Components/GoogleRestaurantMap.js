import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

class RestaurantMap extends Component {
    render () {
        return(
            <div>
                map here
                <Map 
                    google = {this.props.google}
                    style={{width:'100%', height:'100%'}}
                    zoom = {10}
                    initialCenter = {
                        {
                            lat : 40.069560,
                            lng : -74.218500
                        }
                    }
                />
            </div> 
        ) 
    }
}

export default GoogleApiWrapper({
    apiKey:"AIzaSyD_ImBBXLcq2AsEt3zkqkNlixMKviJHlkg"
})(RestaurantMap)
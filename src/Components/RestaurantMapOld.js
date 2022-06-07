class RestaurantMap extends Component { 
    state={lng:null, lat:null}
  
    //setState={markers:[]}
  
    componentDidMount(){
      
      Geocode.setApiKey("AIzaSyByvZEhbhUOwuNnMkiOmz6LRDG9hmz2BnM")
      const address = this.props.currentRestaurant.address;
      Geocode.enableDebug();
      Geocode.fromAddress(address).then(
        (response) => {
          const lat = response.results[0].geometry.location.lat;
          const lng = response.results[0].geometry.location.lng;
          this.setState({lat:lat, lng:lng}) 
        },
        (error) => {
          console.error(error);
        }
      );
    }
     
    static defaultProps = {
      center: {
        lat:59.955413,
        lng:30.337844
      },
      zoom: 15
    };
    render() { 
  
    const google = window.google
  
    // Get latitude & longitude from address.
    const geocoder = new google.maps.Geocoder();
    const address = this.props.currentRestaurant.address;
    geocoder.geocode( { 'address': address}, function(results, status) {
  
   
      }); 
    //console.log(address.geometry.lat());
    console.log(this.state.lng)
    console.log(this.state.lat)
    const myLat = "40.069560";
    const myLong = "-74.218500";
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '25vw', width: '25%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyByvZEhbhUOwuNnMkiOmz6LRDG9hmz2BnM" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
             // lat={59.955413}
             // lng={30.337844}
              //lat={this.state.lat}
            //  lng={this.state.lng}
              lat="40.0718107"
              lng="-74.2169696"
              text="My Marker"
            />
            <Marker 
              //lat={this.state.lat}
              //lng={this.state.lng}
               lat={40.0718107}
               lng={-74.2169696}
            /> 
            <Marker 
             // lat={myLat}
              //lng={myLong}
            /> 
          </GoogleMapReact>
        </div>
      );
    }
  }
  
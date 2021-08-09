import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Raing from '@material-ui/lab';

import useStyles from './styles'

const Map = ({ coordinates, setBounds, setCoordinates }) => {

  console.log(coordinates);

  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width: 600px)');

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          console.log(e); // not working yet

          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
        }}
        onChildClick={''}
      >
      </GoogleMapReact>
    </div>
  );
}

export default Map;

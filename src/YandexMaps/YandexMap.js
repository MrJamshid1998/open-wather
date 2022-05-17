import React from 'react';
import PropTypes from 'prop-types';
import { YMaps, Map,Placemark, GeoObject, FullscreenControl, GeolocationControl, TrafficControl, ZoomControl, SearchControl, TypeSelector } from 'react-yandex-maps';

class YandexMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
        <YMaps>
            <div>
            <Map
              defaultState={{
                center: [39.431349, 65.021639],
                zoom: 7,

              }}
            >
              {/* <Placemark geometry={[39.755045, 64.421952]} /> */}
              <GeoObject 
                geometry={{
                    type: 'LineString',
                    coordinates: [
                        [39.755045, 64.421952],
                        [38.843702, 65.789250],
                        [40.108544, 65.366460],
                    ],
                }}
                options={{
                    geodesic: true,
                    strokeWidth: 3,
                    strokeColor: '#f00',
                }}
              />
              <FullscreenControl options={{float: 'right'}} /> 
              <GeolocationControl options={{float: 'left'}} />
              <TrafficControl options={{float: 'top'}} />
              <ZoomControl options={{float: 'right'}} />
              <SearchControl options={{float: 'right'}} />
            </Map>
            </div>
          </YMaps>
         
        );
    }
}

YandexMap.propTypes = {};

export default YandexMap;

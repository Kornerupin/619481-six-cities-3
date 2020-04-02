import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {town} from "../../propTypes/town";

const ICONS = {
  notActive: leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  }),
  active: leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 30]
  }),
};

class CustomMap extends PureComponent {
  constructor() {
    super();

    this._map = null;
    this._mapRef = createRef();
    this._markers = leaflet.layerGroup();
    this._currentMarkers = leaflet.layerGroup();
  }

  _setMarkers(coords, activeCoords) {
    this._markers.clearLayers();

    coords.map((coord) => {
      leaflet.marker(coord, {
        icon: ICONS.notActive,
      }).addTo(this._markers)
    });

    if (activeCoords.length > 0) {
      activeCoords.map((coord) => {
        leaflet.marker(coord, {
          icon: ICONS.active,
        }).addTo(this._currentMarkers)
      })
    }
  }

  componentDidMount() {
    if (this._mapRef.current) {

      this.map = leaflet.map(this._mapRef.current, {
        center: this.props.town.center,
        zoom: this.props.town.zoom,
        zoomControl: false,
        marker: true
      });

      this._map.setView(
        this.props.town.center,
        this.props.town.zoom
      );

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this._map);

      this._setMarkers(this.props.coords, this.props.activeCoords);

      this._markers.addTo(this._map);
      this._currentMarkers.addTo(this._map);
    }
  }

  componentDidUpdate() {
    console.log(this.props);

    // this.map = leaflet.map;
    // const pins = [];
    //
    // this.map = leaflet.map(this.mapRef.current, {
    //   center: this.props.town.center,
    //   zoom: this.props.town.zoom,
    //   zoomControl: false,
    //   marker: true
    // });
    // this.props.offers.map((offer) => {
    //   pins.push(offer.coords);
    //   leaflet
    //     .marker(offer.coords, {icon})
    //     .addTo(this.map);
    // });
    // this.map.setView(this.props.town.center, this.props.town.zoom);
    // leaflet
    //   .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
    //     attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    //   })
    //   .addTo(this.map);
  }

  render() {
    return <section className="cities__map map" id="map" ref={this.mapRef}></section>;
  }
}

CustomMap.propTypes = {
  currentOffers: PropTypes.array,
  currentTown: town,
};

export default CustomMap;

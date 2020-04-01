import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {town} from "../../propTypes/town";

class CustomMap extends PureComponent {
  constructor(props) {
    super();

    this.props = props;
    this.map = null;
    this.mapBlock = createRef();
  }

  componentDidMount() {
    if (this.mapBlock.current) {
      const pins = [];

      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });
      this.map = leaflet.map(this.mapBlock.current, {
        center: this.props.town.center,
        zoom: this.props.town.zoom,
        zoomControl: false,
        marker: true
      });
      this.props.offers.map((offer) => {
        pins.push(offer.coords);
        leaflet
          .marker(offer.coords, {icon})
          .addTo(this.map);
      });
      this.map.setView(this.props.town.center, this.props.town.zoom);
      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this.map);
    }
  }

  render() {
    return <section className="cities__map map" id="map" ref={this.mapBlock}></section>;
  }
}

CustomMap.propTypes = {
  offers: PropTypes.array,
  town: town,
};

export default CustomMap;

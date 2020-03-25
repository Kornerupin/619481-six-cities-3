import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";

class CustomMap extends PureComponent {
  constructor(props) {
    super();

    this.offers = props.offers;
    this.map = null;
    this.mapBlock = createRef();
  }

  componentDidMount() {
    if (this.mapBlock.current) {
      const pins = [];
      const city = [52.38333, 4.9];
      const icon = leaflet.icon({
        iconUrl: `img/pin.svg`,
        iconSize: [30, 30]
      });
      const zoom = 12;
      this.map = leaflet.map(this.mapBlock.current, {
        center: city,
        zoom,
        zoomControl: false,
        marker: true
      });
      this.offers.map((offer) => {
        pins.push(offer.coords);
      });
      this.map.setView(city, zoom);
      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this.map);
      const offerCords = [52.3709553943508, 4.89309666406198];
      leaflet
        .marker(offerCords, {icon})
        .addTo(this.map);
    }
  }

  render() {
    return <section className="cities__map map">
      <div id="map">

      </div>
    </section>;
  }
}

CustomMap.propTypes = {
  offers: PropTypes.array,
};

export default CustomMap;

import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {town} from "../../propTypes/town";
import {connect} from "react-redux";
import {ActionTypes} from "../../reducer";

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
  constructor(props) {
    super(props);

    this._map = null;
    this._mapRef = createRef();
    this._markers = {};
    this._activeMarker = this.props.activeOffer;
    this._currentTown = this.props.currentTown;
  }

  _setMarkers() {
    this._markers = {};

    this.props.currentOffers.map((offer) => {
      this._createMarkerByOffer(offer);
      this._markers[offer.id].isActive = false;
    });

    console.log(this._markers);
    this._clearMarkers();
  }

  _createMarkerByOffer(offer, isActive = false) {
    this._markers[offer.id] = leaflet.marker(offer.coords, {
      icon: isActive ? ICONS.active : ICONS.notActive,
      title: `Test`,
    }).addTo(this._map);
  }

  _clearMarkers() {
    for (let marker in this._markers) {
      if(this._markers[marker].isActive === true) {
        leaflet.marker(this._markers[marker]._latlng, {icon: ICONS.notActive}).addTo(this._map);
      }
    }
  }

  _setActiveMarker() {
    this._clearMarkers();

    this._activeMarker = this.props.activeOffer;

    if (this.props.activeOffer && this._markers[this.props.activeOffer]) {
      leaflet.marker(this._markers[this.props.activeOffer]._latlng, {icon: ICONS.active}).addTo(this._map);
      this._markers[this.props.activeOffer].isActive = true;
      // console.log(this._markers[this.props.activeOffer]);
      console.log(this._markers[this.props.activeOffer].options.icon.options.iconUrl);
    }
  }

  componentDidMount() {
    if (this._mapRef.current) {
      this._map = leaflet.map(this._mapRef.current, {
        center: this.props.currentTown.center,
        zoom: this.props.currentTown.zoom,
        zoomControl: false,
        marker: true
      });

      this._map.setView(
        this.props.currentTown.center,
        this.props.currentTown.zoom
      );

      leaflet
        .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
          attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
        })
        .addTo(this._map);

      this._setMarkers();

      // this._markers.addTo(this._map);
    }
  }

  componentDidUpdate() {
    if (this.props.activeOffer !== this._activeMarker) {
      this._setActiveMarker();
      console.log(this.props.activeOffer);
    }

    if (this.props.currentTown !== this._currentTown) {
      this._map.setView(
        this.props.currentTown.center,
        this.props.currentTown.zoom
      );

      this._setMarkers();

      this._currentTown = this.props.currentTown;
    }
  }

  render() {
    return <section className="cities__map map" id="map" ref={this._mapRef}></section>;
  }
}

CustomMap.propTypes = {
  currentOffers: PropTypes.array,
  currentTown: town,
};

const mapStateToProps = (state) => ({
  activeOffer: state.activeOffer,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveOffer(value) {
    dispatch({type: ActionTypes.SET_ACTIVE_OFFER, payload: value});
  },
  resetActiveOffer() {
    dispatch({type: ActionTypes.RESET_ACTIVE_OFFER});
  },
});

export {CustomMap};
export default connect(mapStateToProps, mapDispatchToProps)(CustomMap);

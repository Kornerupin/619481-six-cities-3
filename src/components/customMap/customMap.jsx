import React, {createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import leaflet from "leaflet";
import {town} from "../../propTypes/town";
import {connect} from "react-redux";
import {ActionTypes} from "../../reducer";

const ICONS = {
  notActive: {
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  },
  active: {
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 30]
  },
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

    this._setNotActiveMarkers();
  }

  _createMarkerByOffer(offer, isActive = false) {
    this._markers[offer.id] = leaflet.marker(offer.coords, {
      icon: leaflet.icon({
        iconUrl: isActive ? ICONS.active.iconUrl : ICONS.notActive.iconUrl,
        iconSize: isActive ? ICONS.active.iconSize : ICONS.notActive.iconSize,
      }),
      title: `Test`,
    }).addTo(this._map);
    this._markers[offer.id].addEventListener(`mouseover`, () => {
      this.props.setActiveOffer(offer.id);
    });
    this._markers[offer.id].addEventListener(`mouseout`, () => {
      this.props.resetActiveOffer();
    });
  }

  _setNotActiveMarkers() {
    for (let marker in this._markers) {
      if(this._markers[marker].isActive === true) {
        this._markers[marker]._icon.setAttribute(`src`, ICONS.notActive.iconUrl);

        this._markers[marker].isActive = false;
      }
    }
  }

  _setActiveMarker() {
    this._setNotActiveMarkers();

    this._activeMarker = this.props.activeOffer;

    if (this.props.activeOffer && this._markers[this.props.activeOffer]) {
      this._markers[this.props.activeOffer]._icon.setAttribute(`src`, ICONS.active.iconUrl);
      this._markers[this.props.activeOffer].isActive = true;
    }
  }

  _clearMarkers() {
    for (let marker in this._markers) {
      this._map.removeLayer(this._markers[marker]);
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
    }
  }

  componentDidUpdate() {
    if (this.props.activeOffer !== this._activeMarker) {
      this._setActiveMarker();
    }

    if (this.props.currentTown !== this._currentTown) {
      this._clearMarkers();

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

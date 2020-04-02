import leaflet from 'leaflet';

const MapSettings = {
  ICON: leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  }),
  ICON_ACTIVE: leaflet.icon({
    iconUrl: `img/pin-active.svg`,
    iconSize: [30, 30]
  })
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.markers = leaflet.layerGroup();
    this.currentMarker = leaflet.layerGroup();
  }

  _renderMarkers(offerCoordinates, activeCoordinate) {
    offerCoordinates.map((coordinate) => {
      return leaflet.marker(coordinate, {icon: MapSettings.ICON}).addTo(this.markers);
    });

    activeCoordinate.length > 0 && leaflet.marker(activeCoordinate, {icon: MapSettings.ICON_ACTIVE}).addTo(this.currentMarker);
  }

  componentDidMount() {
    const {currentCoordinate, coordinates, center, zoom} = this.props;

    this._map = new leaflet.Map(this.mapRef.current, {
      center,
      zoom,
      zoomControl: false,
      marker: true
    });

    this._map.setView(center, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    }).addTo(this._map);

    this._renderMarkers(coordinates, currentCoordinate);

    this.markers.addTo(this._map);
    this.currentMarker.addTo(this._map);
  }

  componentDidUpdate() {
    this.markers.clearLayers();

    const {currentCoordinate, coordinates, center, zoom} = this.props;

    this._map.setView(center, zoom);

    this._renderMarkers(coordinates, currentCoordinate);

    this.markers.addTo(this._map);
  }

  componentWillUnmount() {
    this._map.remove();
  }

  render() {

    return (
      <div id="map" style={{height: `100%`}} ref={this.mapRef}></div>
    );
  }

}

Map.propTypes = {
  coordinates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  currentCoordinate: PropTypes.arrayOf(PropTypes.number)
};

export default Map;

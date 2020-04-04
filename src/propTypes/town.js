import PropTypes from "prop-types";

export const town = PropTypes.exact({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  zoom: PropTypes.number.isRequired,
  center: PropTypes.arrayOf(
      PropTypes.number.isRequired
  )
});

import PropTypes from "prop-types";

export const card = PropTypes.exact({
  id: PropTypes.number.isRequired,
  townId: PropTypes.number.isRequired,
  mark: PropTypes.string.isRequired,
  coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  img: PropTypes.exact({
    imgLink: PropTypes.string.isRequired,
    imgAlt: PropTypes.string,
  }),
  link: PropTypes.string.isRequired,
  price: PropTypes.exact({
    priceValue: PropTypes.string.isRequired,
    priceText: PropTypes.string.isRequired,
  }),
  rating: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
});

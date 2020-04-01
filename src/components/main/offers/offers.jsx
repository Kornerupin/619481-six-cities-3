import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import {card} from "../../../propTypes/card";
import {ActionTypes} from "../../../reducer";
import {connect} from "react-redux";

class Offers extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.offers.map((offerData) =>
            <Card key={offerData.id} offerData={offerData} onHover={mapDispatchToProps.setActiveOffer(offerData.id)}/>
          )
        }
      </React.Fragment>
    );
  }
}

Offers.propTypes = {
  offers: PropTypes.arrayOf(card).isRequired,
  onHover: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  setActiveOffer(value) {
    dispatch(ActionTypes.SET_ACTIVE_OFFER({payload: value}))
  },
});

export {Offers};
export default connect(mapDispatchToProps)(Offers);

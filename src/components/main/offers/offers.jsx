import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import {card} from "../../../propTypes/card";
import {ActionTypes} from "../../../reducer";
import {connect} from "react-redux";

class Offers extends PureComponent {
  render() {
    return (
      <React.Fragment>
        {
          this.props.currentOffers.map((offerData) =>
            <Card
              key={offerData.id}
              offerData={offerData}
              onEnter={this.props.setActiveOffer}
              onLeave={this.props.resetActiveOffer}
            />
          )
        }
      </React.Fragment>
    );
  }
}

Offers.propTypes = {
  currentOffers: PropTypes.arrayOf(card).isRequired,
  onEnter: PropTypes.func,
  onLeave: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  setActiveOffer(value) {
    dispatch({type: ActionTypes.SET_ACTIVE_OFFER, payload: value});
  },
  resetActiveOffer() {
    dispatch({type: ActionTypes.RESET_ACTIVE_OFFER});
  },
});

export {Offers};
export default connect(null, mapDispatchToProps)(Offers);

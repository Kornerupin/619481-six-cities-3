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
          this.props.currentOffers.map((offerData) =>
            <Card key={offerData.id} offerData={offerData} onHover={this.props.setActiveOffer}/>
          )
        }
      </React.Fragment>
    );
  }
}

Offers.propTypes = {
  currentOffers: PropTypes.arrayOf(card).isRequired,
  onHover: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  setActiveOffer(value) {
    dispatch({type: ActionTypes.SET_ACTIVE_OFFER, payload: value});
  },
});

export {Offers};
export default connect(null, mapDispatchToProps)(Offers);

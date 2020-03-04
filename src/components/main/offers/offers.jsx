import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card";
import card from "../../../propTypes/card";

class Offers extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null
    };
    this._handlerCardClick = this._handlerCardClick.bind(this);
  }

  render() {
    return (
      <React.Fragment>
        {
          this.props.offers.map((offerData) =>
            <Card key={offerData.id} keyNew={offerData.id} offerData={offerData} onHover={this._handlerCardClick.bind(this, offerData.id)}/>
          )
        }
      </React.Fragment>
    );
  }

  _handlerCardClick(id) {
    this.state.activeCard = id;
  }
}

Offers.propTypes = {
  offers: PropTypes.arrayOf(card).isRequired,
  onHover: PropTypes.func
};

export default Offers;

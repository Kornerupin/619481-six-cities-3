import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Card from "../card/card";

class CardsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: -1
    };
    this._handlerCardClick = this._handlerCardClick.bind(this);
  }

  render() {
    return (this.props.cardsList.map((cardData, i) => <Card number={i} key={`place-card__` + i} cardData={cardData} onHover={this._handlerCardClick} />));
  }

  _handlerCardClick(evt) {
    let tempElem = evt.target;
    do {
      tempElem = tempElem.parentNode;
    } while (!tempElem.getAttribute(`data-number`) && tempElem.nodeName !== 'BODY');

    if (tempElem.getAttribute(`data-number`)) {
      this.setState({activeCard: tempElem.getAttribute(`data-number`)});
    }
  }
}

CardsList.propTypes = {
  cardsList: PropTypes.array.isRequired,
  onHover: PropTypes.func
};

export default CardsList;

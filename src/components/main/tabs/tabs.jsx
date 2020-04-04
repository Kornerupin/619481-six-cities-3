import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {town} from "../../../propTypes/town";
import {ActionTypes} from "../../../reducer";


class Tabs extends PureComponent {
  constructor(props) {
    super(props);

    this.domLinkList = [];
  }

  _setActive(number) {
    // Меняем город
    this.props.setTown(number);
    // Удаляем активный элемент
    this.domLinkList.map((link) => {
      link.classList.remove(`tabs__item--active`);
    });
    // Ставим активный элемент - текущий город
    this.domLinkList[number].classList.add(`tabs__item--active`);
  }

  render() {
    return (
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {this.props.towns.map((tempTown, number) =>
            <li className="locations__item" key={tempTown.id}>
              <a className="locations__item-link tabs__item"
                href="#"
                ref={(link) => {
                  this.domLinkList[number] = link;
                }}
                onClick={() => {
                  return this._setActive(number);
                }}>
                <span>{tempTown.name}</span>
              </a>
            </li>
          )}
        </ul>
      </section>
    );
  }

  componentDidMount() {
    if (this.domLinkList[0] !== null) {
      this._setActive(0);
    }
  }
}

Tabs.propTypes = {
  towns: PropTypes.arrayOf(town).isRequired,
  setTown: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setTown(value) {
    dispatch({type: ActionTypes.SET_TOWN, payload: value});
  },
});

export {Tabs};
export default connect(null, mapDispatchToProps)(Tabs);

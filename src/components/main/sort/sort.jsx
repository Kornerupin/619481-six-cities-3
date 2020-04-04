import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {ActionTypes} from "../../../reducer";
import PropTypes from "prop-types";


class Sort extends PureComponent {
  constructor(props) {
    super(props);

    this.props = props;
    this.setSortListToggle = this.setSortListToggle.bind(this);

    this.SORTS = {
      'SORT_POPULAR': {
        name: `Popular`,
        number: 0,
      },
      'SORT_LOW_TO_HIGH': {
        name: `Low to high`,
        number: 1,
      },
      'SORT_HIGH_TO_LOW': {
        name: `High to low`,
        number: 2,
      },
      'SORT_TOP_RATED': {
        name: `Top rated`,
        number: 3,
      },
    };

    this.sortList = [];

    for (let item in this.SORTS) {
      if (item) {
        this.sortList.push(<li className="places__option" tabIndex="0" key={`${item}`}
          onClick={() => {
            this.setSortItemActive(this.SORTS[item].number);
          }}
          ref={(elem) => {
            return (this.domSortItems[this.SORTS[item].number] = elem);
          }}>
          {this.SORTS[item].name}
        </li>);
      }
    }

    this.domSortList = null;
    this.domSortItems = [];
  }

  setSortListToggle() {
    this.domSortList.classList.toggle(`places__options--opened`);
  }

  setSortItemActive(number) {
    // Удаляем активный элемент
    for (let i = 0; i < this.domSortItems.length; i++) {
      this.domSortItems[i].classList.remove(`places__option--active`);
    }
    // Ставим активный элемент - текущий пункт
    this.domSortItems[number].classList.add(`places__option--active`);

    switch (number) {
      case 0:
        this.props.sortByPopular(); break;
      case 1:
        this.props.sortLowToHigh(); break;
      case 2:
        this.props.sortHighToLow(); break;
      case 3:
        this.props.sortTopRated(); break;
      default:
        this.props.sortByPopular(); break;
    }
  }

  componentDidMount() {
    this.setSortItemActive(this.SORTS[this.props.sortType].number);
  }

  render() {
    if (this.props.countOffers > 0) {
      return <form className="places__sorting" action="#" method="get" onClick={this.setSortListToggle}>
        <span className="places__sorting-caption">Sort by </span>
        <span className="places__sorting-type" tabIndex="0">
          {this.SORTS[this.props.sortType].name}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom" ref={(list) => {
          return (this.domSortList = list);
        }}>
          {this.sortList}
        </ul>
      </form>;
    } else {
      return null;
    }
  }
}

Sort.propTypes = {
  sortType: PropTypes.string.isRequired,
  countOffers: PropTypes.number.isRequired,
  sortHighToLow: PropTypes.func,
  sortLowToHigh: PropTypes.func,
  sortTopRated: PropTypes.func,
  sortByPopular: PropTypes.func,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
  countOffers: state.currentOffers.length,
});

const mapDispatchToProps = (dispatch) => ({
  sortHighToLow() {
    dispatch({type: ActionTypes.SORT_HIGH_TO_LOW});
  },
  sortLowToHigh() {
    dispatch({type: ActionTypes.SORT_LOW_TO_HIGH});
  },
  sortTopRated() {
    dispatch({type: ActionTypes.SORT_TOP_RATED});
  },
  sortByPopular() {
    dispatch({type: ActionTypes.SORT_POPULAR});
  },
});

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);

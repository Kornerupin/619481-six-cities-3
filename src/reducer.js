import {extend} from "./utils.js";
import offers from "./mocks/offers";
import towns from "./mocks/towns";

const ActionTypes = {
  INIT: `@@INIT`,
  SET_TOWN: `SET_TOWN`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  RESET_ACTIVE_OFFER: `RESET_ACTIVE_OFFER`,
  SORT_HIGH_TO_LOW: `SORT_HIGH_TO_LOW`,
  SORT_LOW_TO_HIGH: `SORT_LOW_TO_HIGH`,
  SORT_TOP_RATED: `SORT_TOP_RATED`,
  SORT_POPULAR: `SORT_POPULAR`,
};

const initialStore = {
  currentTown: null,
  activeOffer: null,
  sortType: ActionTypes.SORT_POPULAR,
  currentOffers: [],
};

const actionSetTown = (store, payload = 0) => {
  const tempOffers = [];
  if (payload >= towns.length || payload < 0) {
    payload = 0;
  }

  for (let i = 0; i < offers.length; i++) {
    if (offers[i].townId === towns[payload].id) {
      tempOffers.push(offers[i]);
    }
  }

  return extend(store, {
    currentOffers: reducer({currentOffers: tempOffers, currentTown: payload}, {type: store.sortType}).currentOffers,
    currentTown: payload
  });
};

const sortHighOrLow = (store, toTop) => {
  const tempCosts = [];
  const sortOffers = [];

  for (let i = 0; i < store.currentOffers.length; i++) {
    tempCosts.push([+store.currentOffers[i].price.priceValue, i]);
  }

  if (toTop) {
    tempCosts.sort((a, b) => {
      return a[0] - b[0];
    });
  } else {
    tempCosts.sort((a, b) => {
      return b[0] - a[0];
    });
  }

  for (let i = 0; i < tempCosts.length; i++) {
    sortOffers[i] = store.currentOffers[tempCosts[i][1]];
  }

  return sortOffers;
};

const sortHighToLow = (store) => {
  return extend(store, {
    currentOffers: sortHighOrLow(store, false),
    sortType: ActionTypes.SORT_HIGH_TO_LOW,
  });
};

const sortLowToHigh = (store) => {
  return extend(store, {
    currentOffers: sortHighOrLow(store, true),
    sortType: ActionTypes.SORT_LOW_TO_HIGH,
  });
};

const sortTopRated = (store) => {
  const tempRated = [];
  const sortOffers = [];

  for (let i = 0; i < store.currentOffers.length; i++) {
    tempRated.push([+store.currentOffers[i].rating, i]);
  }

  tempRated.sort((a, b) => {
    return b[0] - a[0];
  });

  for (let i = 0; i < tempRated.length; i++) {
    sortOffers[i] = store.currentOffers[tempRated[i][1]];
  }

  return extend(store, {
    currentOffers: sortOffers,
    sortType: ActionTypes.SORT_TOP_RATED,
  });
};

const sortByPopular = (store) => {
  const tempOffers = [];

  for (let i = 0; i < offers.length; i++) {
    if (offers[i].townId === towns[store.currentTown].id) {
      tempOffers.push(offers[i]);
    }
  }

  return extend(store, {
    currentOffers: tempOffers,
    sortType: ActionTypes.SORT_POPULAR,
  });
};


const reducer = (store = initialStore, action) => {
  switch (action.type) {

    case ActionTypes.INIT:
    case ActionTypes.SET_TOWN:
      return actionSetTown(store, action.payload);

    case ActionTypes.SET_ACTIVE_OFFER:
      if (action.payload && action.payload >= 0 || action.payload === null) {
        return extend(store, {
          activeOffer: action.payload
        });
      } else {
        return extend(store, {
          activeOffer: null
        });
      }

    case ActionTypes.RESET_ACTIVE_OFFER:
      return extend(store, {activeOffer: null});

    case ActionTypes.SORT_HIGH_TO_LOW:
      return sortHighToLow(store);

    case ActionTypes.SORT_LOW_TO_HIGH:
      return sortLowToHigh(store);

    case ActionTypes.SORT_TOP_RATED:
      return sortTopRated(store);

    case ActionTypes.SORT_POPULAR:
      return sortByPopular(store);

    default:
      return store;
  }
};

export {reducer, ActionTypes};

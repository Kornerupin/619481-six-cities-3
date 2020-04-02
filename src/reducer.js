import {extend} from "./utils.js";
import offers from "./mocks/offers";
import towns from "./mocks/towns";

const initialState = {
  currentTown: 1,
  activeOffer: null,
  currentOffers: [],
};

const ActionTypes = {
  INIT: `@@init`,
  SET_TOWN: `SET_TOWN`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  RESET_ACTIVE_OFFER: `RESET_ACTIVE_OFFER`,
};

const actionSetTown = (state, payload) => {
  const tempOffers = [];
  if(payload >= towns.length || payload < 0)
    payload = 0;

  for (let i = 0; i < offers.length; i++) {
    if(offers[i].townId === towns[payload].id)
      tempOffers.push(offers[i]);
  }

  return extend(state, {
    currentOffers: tempOffers,
    currentTown: payload
  });
};


const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.INIT:
    case ActionTypes.SET_TOWN:
      actionSetTown(state, action.payload);

    case ActionTypes.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload
      });

    case ActionTypes.RESET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: null,
      });

    default:
      return state;
  }
};

export {reducer, ActionTypes};

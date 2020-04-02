import {extend} from "./utils.js";
import offers from "./mocks/offers";
import towns from "./mocks/towns";

const initialState = {
  currentTown: 1,
  activeOffer: 0,
  currentOffers: [],
};

const ActionTypes = {
  SET_TOWN: `SET_TOWN`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  RESET_ACTIVE_OFFER: `RESET_ACTIVE_OFFER`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.SET_TOWN:
      const tempOffers = [];
      if(action.payload >= towns.length || action.payload < 0)
        action.payload = 0;

      for (let i = 0; i < offers.length; i++) {
        if(offers[i].townId === towns[action.payload].id)
          tempOffers.push(offers[i]);
      }

      return extend(state, {
        currentOffers: tempOffers,
        currentTown: action.payload
      });

    case ActionTypes.SET_ACTIVE_OFFER:

      return extend(state, {
        activeOffer: action.payload
      });

    case ActionTypes.RESET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: 0,
      });

    default:
      return state;
  }
};

export {reducer, ActionTypes};

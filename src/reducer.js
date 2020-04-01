import {extend} from "./utils.js";
import offers from "./mocks/offers";
import towns from "./mocks/towns";

const initialState = {
  currentTown: 0,
  currentOffer: 0,
  offers: [offers[0], offers[1], offers[2], offers[3]],
};

const ActionTypes = {
  SET_TOWN: `SET_TOWN`,
  // GET_OFFERS_BY_TOWN: `GET_OFFERS_BY_TOWN`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  RESET_ACTIVE_OFFER: `RESET_ACTIVE_OFFER`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.SET_TOWN:
      const currentOffers = [];
      if(action.payload >= towns.length || action.payload < 0)
        action.payload = 0;

      for (let i = 0; i < offers.length; i++) {
        if(offers[i].townId === towns[action.payload].id)
          currentOffers.push(offers[i]);
      }

      return extend(state, {
        offers: currentOffers,
        activeTown: action.payload
      });

    case ActionTypes.SET_ACTIVE_OFFER:
      console.log(action.payload);

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

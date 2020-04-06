import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import Offers from "./offers";

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should card hover will change state`, () => {
  const testData = [
    {
      id: 34,
      townId: 1612,
      mark: `Premium`,
      coords: [52.3909553943508, 4.85309666406198],
      img: {
        imgLink: `apartment-01.jpg`,
        imgAlt: `title 0`,
      },
      link: `#`,
      price: {
        priceValue: `120`,
        priceText: `/ night`,
        priceType: `€`,
      },
      rating: 4,
      title: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
    },
    {
      id: 35,
      townId: 1612,
      mark: `Premium`,
      coords: [52.3909553943508, 4.85309666406198],
      img: {
        imgLink: `apartment-01.jpg`,
        imgAlt: `title 0`,
      },
      link: `#`,
      price: {
        priceValue: `120`,
        priceText: `/ night`,
        priceType: `€`,
      },
      rating: 4,
      title: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
    }
  ];
  const store = mockStore({
    currentOffers: testData,
    activeOffer: null,
  });

  const offersDom = mount(
      <Provider store={store}>
        <Offers
          currentOffers={testData}
        />
      </Provider>
  );

  offersDom.find(`.place-card`).forEach((node) => {
    node.simulate(`mouseenter`);
  });

  expect(store.getState()).toEqual({currentOffers: testData, activeOffer: 35});
});

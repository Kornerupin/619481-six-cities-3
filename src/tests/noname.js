import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "../components/main/main";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should article be hovered`, () => {
  const handler = jest.fn();
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
    currentTown: 0,
    activeOffer: null,
    sortType: `SORT_POPULAR`,
  });

  const main = mount(
      <Provider store={store}>
        <Main
          currentOffers={testData}
          currentTown={0}
          onEnter={handler}
        />
      </Provider>
  );

  main.find(`.place-card`).forEach((node) => {
    node.simulate(`mouseenter`);
  });

  expect(handler.mock.calls.length).toBe(testData.length);
});

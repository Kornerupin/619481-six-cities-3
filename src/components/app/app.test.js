import React from "react";
import renderer from "react-test-renderer";
import App from "./app";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const testData = [
  {
    id: 34,
    townId: 5859,
    mark: `Premium`,
    coords: [52.3909553943508, 4.85309666406198],
    img: {
      imgLink: `apartment-01.jpg`,
      imgAlt: `title 0`,
    },
    link: `#`,
    price: {
      priceValue: `€120`,
      priceText: `/ night`,
      priceType: `€`,
    },
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  }
];

it(`<App /> component render test`, () => {
  const store = mockStore({
    currentOffers: testData,
    currentTown: 0,
    sortType: `SORT_POPULAR`,
  });

  const tree = renderer.
    create(
        <Provider store={store}>
          <App
            currentOffers={testData}
            currentTown={0}
          />
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

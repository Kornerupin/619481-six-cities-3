import React from "react";
import renderer from "react-test-renderer";
import Sort from "./sort";
import configStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configStore([]);

const testData = [
  {
    id: 34,
    townId: 5859,
    mark: `Premium`,
    coords: [52.369553943508, 4.85309666406198],
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

it(`Test <Sort /> component render`, () => {
  const store = mockStore({
    sortType: `SORT_POPULAR`,
    currentOffers: testData,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Sort
          sortType={`SORT_POPULAR`}
          currentOffers={testData}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

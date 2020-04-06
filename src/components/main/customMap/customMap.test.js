import React from "react";
import renderer from "react-test-renderer";
import CustomMap from "./customMap";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

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
const testTown = {
  id: 3678,
  name: `Cologne`,
  zoom: 12,
  center: [50.938, 6.965],
};

describe(`<CustomMap /> component tests`, () => {

  it(`Render test`, () => {
    const store = mockStore({
      currentOffers: testData,
      currentTown: testTown,
    });

    const tree = renderer.
      create(
          <Provider store={store}>
            <CustomMap
              currentOffers={testData}
              currentTown={testTown}
            />
          </Provider>
      ).parseJSON;

    expect(tree).toMatchSnapshot();
  });
});

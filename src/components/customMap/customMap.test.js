import React from "react";
import renderer from "react-test-renderer";
import CustomMap from "./customMap";

const testData = [
  {
    id: 34,
    mark: `Premium`,
    coords: [52.369553943508, 4.85309666406198],
    img: {
      imgLink: `apartment-01.jpg`,
      imgAlt: `title 0`,
    },
    link: `#`,
    price: {
      priceValue: `€120`,
      priceText: `/ night`,
    },
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  }
];

it(`<CustomMap /> component render test`, () => {
  const tree = renderer.
    create(<CustomMap
      offers={testData}
    />).parseJSON;

  expect(tree).toMatchSnapshot();
});

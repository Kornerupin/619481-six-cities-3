import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

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

it(`<App /> component render test`, () => {
  const tree = renderer.
    create(<App offers={testData}/>).toJSON();

  expect(tree).toMatchSnapshot();
});

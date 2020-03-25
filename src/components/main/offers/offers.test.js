import React from "react";
import renderer from "react-test-renderer";
import Offers from "./offers";

const testData = [
  {
    id: 34,
    mark: `Premium`,
    coords: [52.3709553943508, 4.89309666406198],
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

it(`<Offers /> component render test`, () => {
  const tree = renderer.
    create(<Offers
      offers={testData}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

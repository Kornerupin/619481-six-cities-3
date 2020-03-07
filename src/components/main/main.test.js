import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const testData = [
  {
    id: 34,
    mark: `Premium`,
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

it(`<Main /> component render test`, () => {
  const tree = renderer.
    create(<Main
      offers={testData}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should article be hovered`, () => {
  const handler = jest.fn();
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
    },
    {
      id: 35,
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

  const main = mount(
      <Main offers={testData} onHover={(handler)}/>
  );

  main.find(`.place-card`).forEach((node) => {
    node.simulate(`mouseover`);
  });

  expect(handler.mock.calls.length).toBe(testData.length);
});

import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should state get current data if article hovered`, () => {
  const handler = jest.fn();
  const testData = {
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
  };

  const cardNode = mount(
      <Card offerData={testData} onHover={handler} />
  );

  cardNode.simulate(`mouseover`);

  expect(handler.mock.calls.length).toBe(1);
});

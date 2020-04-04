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
  };

  const cardNode = mount(
      <Card offerData={testData} onEnter={handler} />
  );

  cardNode.simulate(`mouseenter`);

  expect(handler.mock.calls[0][0]).toBe(testData.id);
  expect(handler.mock.calls.length).toBe(1);
});

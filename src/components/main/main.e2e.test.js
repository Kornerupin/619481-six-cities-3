import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should title be clicked`, () => {
  const handler = jest.fn();
  const testData = [
    `Test title 0`,
    `Test title 1`
  ];

  const main = mount(
      <Main titles={testData} handler={handler}/>
  );

  const elem = main.find(`.place-card__name`).get(0);

  main.find(`.place-card__name`).forEach((node) => {
    node.simulate(`click`);
  });

  expect(elem.props.onClick.mock.calls.length).toBe(2);
});

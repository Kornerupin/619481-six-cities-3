import React from "react";
import renderer from "react-test-renderer";
import Card from "./card";

const testData = `Test title`;

it(`<Card /> render`, () => {
  const tree = renderer.create(<Card
    dataTitle={testData}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});

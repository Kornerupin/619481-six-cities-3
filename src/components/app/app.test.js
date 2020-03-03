import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

const testData = [
  `Test title 0`,
  `Test title 1`,
  `Test title 2`,
  `Test title 3`
];

it(`<App /> component render test`, () => {
  const tree = renderer.
    create(<App titles={testData}/>).toJSON();

  expect(tree).toMatchSnapshot();
});

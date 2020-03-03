import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const testData = [
  `Test title 0`,
  `Test title 1`,
  `Test title 2`,
  `Test title 3`
];

it(`<Main /> component render test`, () => {
  const tree = renderer.
    create(<Main
      titles={testData}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

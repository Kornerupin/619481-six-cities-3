import React from "react";
import renderer from "react-test-renderer";
import Tabs from "./tabs";
import configStore from "redux-mock-store";
import {Provider} from "react-redux";

const mockStore = configStore([]);

const testTowns = [
  {
    id: 1612,
    name: `Amsterdam`,
    zoom: 12,
    center: [52.38333, 4.9],
  },
  {
    id: 2191,
    name: `Paris`,
    zoom: 12,
    center: [48.856, 2.335],
  },
];

it(`Test <Tabs /> component render`, () => {
  const store = mockStore({
    currentTown: 0,
  });

  const tree = renderer.create(
      <Provider store={store}>
        <Tabs
          towns={testTowns}
        />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

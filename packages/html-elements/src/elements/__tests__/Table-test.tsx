import 'react-native';

import React from 'react';
import renderer from 'react-test-renderer';

import { Table, THead, TBody, TFoot, Tr, Th, TD, Caption } from '../Table';

it(`renders Table`, () => {
  const tree = renderer.create(<Table />);
  expect(tree).toMatchSnapshot();
});
it(`renders THead`, () => {
  const tree = renderer.create(<THead />);
  expect(tree).toMatchSnapshot();
});
it(`renders TBody`, () => {
  const tree = renderer.create(<TBody />);
  expect(tree).toMatchSnapshot();
});
it(`renders TFoot`, () => {
  const tree = renderer.create(<TFoot />);
  expect(tree).toMatchSnapshot();
});
it(`renders Th`, () => {
  const tree = renderer.create(<Th>Header</Th>);
  expect(tree).toMatchSnapshot();
});
it(`renders Tr`, () => {
  const tree = renderer.create(<Tr />);
  expect(tree).toMatchSnapshot();
});
it(`renders TD`, () => {
  const tree = renderer.create(<TD>Column</TD>);
  expect(tree).toMatchSnapshot();
});
it(`renders Caption`, () => {
  const tree = renderer.create(<Caption>Caption</Caption>);
  expect(tree).toMatchSnapshot();
});
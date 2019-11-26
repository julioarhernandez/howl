import React from 'react';
import renderer from 'react-test-renderer';
import Header from './header-view';

describe('Header', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Header title="Title2" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
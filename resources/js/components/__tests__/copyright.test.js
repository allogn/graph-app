import React from 'react';
import renderer from 'react-test-renderer';
import Copyright from '../Copyright';

test('Test correct year in copyright', () => {
    const component = renderer.create(
        <Copyright></Copyright>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    console.log(tree)
});
import React from 'react';
import config from 'react-global-configuration';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Copyright from '../Copyright';

test('Test correct year and app name in copyright', () => {
    config.set({ app_name: 'app-name', base_url: "https://localhost/" });
    const { getByText } = render(
        <Copyright></Copyright>
    );
    expect(getByText('app-name')).toBeInTheDocument();
    expect(getByText('2020', {exact: false})).toBeInTheDocument();
});
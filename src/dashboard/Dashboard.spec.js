import React from 'react';
import { render } from '@testing-library/react';


import Dashboard from './Dashboard';

describe('<Dashboard /> ', () => {
   
    it('matches snapshot', () => {
        const { container } = render(<Dashboard />);
        expect(container).toMatchSnapshot();
    })

    it('renders all children', () => {
        render(<Dashboard />);

        expect(document.querySelector('.controls')).toBeTruthy();
        expect(document.querySelector('.display')).toBeTruthy();
    })
})
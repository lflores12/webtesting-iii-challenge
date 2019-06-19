import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Controls from './Controls';
import Dashboard from '../dashboard/Dashboard';
import { get } from 'https';


describe('<Controls', () => {
    it('matches snapshot', () => {
        const { container } = render(<Controls />);
        expect(container).toMatchSnapshot();
    })

    it('renders expected initial state', () => {
        const { getByText } = render(<Dashboard />);
        getByText('Close Gate')
        getByText('Lock Gate')
    });

    describe('toggle open and close gate', () => {
        it('closes gate', async () => {
            const { getByText } = render(<Dashboard />);
            const toggleButton = getByText('Close Gate');

            await fireEvent.click(toggleButton);
            getByText('Open Gate');
        }) 
        it('opens gate', async () => {
            const { getByText } = render(<Dashboard />);
            const toggleButton = getByText('Close Gate');

            await fireEvent.click(toggleButton);
            await fireEvent.click(toggleButton);
            getByText('Close Gate');
        })
    })

    describe('toggle lock and unlock gate', () => {
        it('locks as expected', async () => {
            const { getByText } = render(<Dashboard />);
            const toggleGate = getByText('Close Gate');
            const toggleLock = getByText('Lock Gate');

            await fireEvent.click(toggleGate);
            getByText('Open Gate')

            await fireEvent.click(toggleLock);
            getByText('Unlock Gate')
        })

        it('unlocks as expected', async () => {
            const { getByText } = render(<Dashboard />);
            const toggleGate = getByText('Close Gate');
            const toggleLock = getByText('Lock Gate');

            await fireEvent.click(toggleGate)
            getByText('Open Gate')

            await fireEvent.click(toggleLock)
            await fireEvent.click(toggleLock)
            getByText('Lock Gate')
        })
    })
})
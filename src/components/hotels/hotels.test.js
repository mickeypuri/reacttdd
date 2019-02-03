import React from 'react';
import { shallow } from 'enzyme';
import Hotels from './hotels';

describe('Hotels', () => {

    const hotels = [
        {
            name: 'Adelphi',
            imgUrl: 'some_url',
            features: ['swimming pool', 'sports center'],
            book: () => {
            }
        },
        {
            name: 'Britannia',
            imgUrl: 'some_url',
            features: ['all executive rooms', 'michelin star dining'],
            book: () => {
            }
        }
    ];

    it('should render a Hotel Component', ()=>{
        const wrapper = shallow(<Hotels hotels={hotels}/>);
        expect(wrapper.find('Hotel').length).toEqual(2);
    });
});

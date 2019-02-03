import React from 'react';
import { shallow } from 'enzyme';
import Hotels from './hotels';

describe('Hotels', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<Hotels />);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should contain a title component', () => {
        const wrapper = shallow(<Hotels />);
        expect(wrapper.find('HotelTitle').length).toEqual(1);
    });

    it('should contain a button for action', () => {
        const wrapper = shallow(<Hotels />);
        expect(wrapper.find('button').length).toEqual(1);
    })
});

import React from 'react';
import { shallow } from 'enzyme';
import Hotel from './hotel';

describe('Hotel', () => {

    it('should render a <div />', () => {
        const wrapper = shallow(<Hotel />);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should contain a title component', () => {
        const wrapper = shallow(<Hotel />);
        expect(wrapper.find('HotelTitle').length).toEqual(1);
    });

    it('should contain a button for action', () => {
        const wrapper = shallow(<Hotel />);
        expect(wrapper.find('button').length).toEqual(1);
    });

    it('should contain an image of hotel', () => {
        const wrapper = shallow(<Hotel />);
        expect(wrapper.find('img').length).toEqual(1);
    });

    it('should contain a list of features', () => {
        const wrapper = shallow(<Hotel />);
        expect(wrapper.find('ul').length).toEqual(1);
    });
});

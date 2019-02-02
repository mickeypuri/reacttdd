import React from 'react';
import { shallow } from 'enzyme';
import Preference from './preference';

describe('Preference', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<Preference name='test1'/>);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should contain an input element', () => {
        const wrapper = shallow(<Preference name='test1'/>);
        expect(wrapper.find('input').length).toEqual(1);
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import Hotels from './hotels';

describe('Hotels', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<Hotels />);
        expect(wrapper.find('div').length).toEqual(1);
    });
});

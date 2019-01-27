import React from 'react';
import { shallow } from 'enzyme';
import Preference from './preferences';

describe('Preference', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<Preference />);
        expect(wrapper.find('div').length).toEqual(1);
    });
});

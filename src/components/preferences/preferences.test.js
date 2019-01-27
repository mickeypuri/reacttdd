import React from 'react';
import { shallow } from 'enzyme';
import Preferences from './preferences';

describe('Preferences', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<Preferences />);
        expect(wrapper.find('div').length).toEqual(1);
    });
});

import React from 'react';
import { shallow } from 'enzyme';
import Title from './title';

describe('Title', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<Title />);
        expect(wrapper.find('div').length).toEqual(1);
    });
});

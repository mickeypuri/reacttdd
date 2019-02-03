import React from 'react';
import { shallow } from 'enzyme';
import Title from './title';

describe('Title', () => {
    it('should render a element with class title-container', () => {
        const wrapper = shallow(<Title />);
        expect(wrapper.find('.title-container').length).toEqual(1);
    });
});

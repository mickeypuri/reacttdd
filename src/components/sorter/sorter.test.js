import React from 'react';
import { shallow } from 'enzyme';
import Sorter from './hotels';

describe('Sorter', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<Sorter />);
        expect(wrapper.find('div').length).toEqual(1);
    });
});

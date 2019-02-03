import React from 'react';
import { shallow } from 'enzyme';
import Hotels from './hotels';

describe('Hotels', () => {
    it('should render a Hotel Component', ()=>{
        const wrapper = shallow(<Hotels />);
        expect(wrapper.find('Hotel').length).toEqual(1);
    });
});

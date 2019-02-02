import React from 'react';
import { shallow } from 'enzyme';
import {Sorter} from './sorter';
import Preferences from "../preferences/preferences";
import Preference from "../preference/preference";

describe('Sorter', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<Sorter />);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it ('should contain two button components', () => {
        const wrapper = shallow (<Sorter />);
        expect(wrapper.find('.sort-button').length).toEqual(2);
    });
});

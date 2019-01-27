import React from 'react';
import { shallow } from 'enzyme';
import Preferences from './preferences';
import App from "../app/App";
import Hotels from "../hotels/hotels";
import Preference from "../preference/preference";

describe('Preferences', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<Preferences />);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it ('should contain a preference component', () => {
        const wrapper = shallow (<Preferences />);
        expect(wrapper.containsMatchingElement(<Preference />)).toEqual(true);
    });
});

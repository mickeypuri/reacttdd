import React from 'react';
import { shallow } from 'enzyme';
import App from "../app/App";
import Hotels from "../hotels/hotels";
import Preference from "../preference/preference";
import {Preferences} from './preferences';

describe('Preferences', () => {
    const preferences = ['twin','executive'];

    it('should render a <div />', () => {
        const wrapper = shallow(<Preferences preferences={preferences} />);
        console.log(JSON.stringify(wrapper));
        expect(wrapper.find('div').length).toEqual(1);
    });

    it ('should contain a preference component', () => {
        const wrapper = shallow (<Preferences  preferences={preferences}  />);
        console.log(JSON.stringify(wrapper));
        expect(wrapper.containsMatchingElement(<Preference name='Smoking' key={1}/>)).toEqual(true);
    });
});

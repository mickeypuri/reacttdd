import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    it('should render a <div />', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find('div').length).toEqual(1);
    });

    it ('should contain a title component', () => {
       const wrapper = shallow (<App />);
        expect(wrapper.containsMatchingElement(<Title />)).toEqual(true);
    });

    it ('should contain a Sorter component', () => {
        const wrapper = shallow (<App />);
        expect(wrapper.containsMatchingElement(<Sorter />)).toEqual(true);
    });

    it ('should contain a Preferences component', () => {
        const wrapper = shallow (<App />);
        expect(wrapper.containsMatchingElement(<Preferences />)).toEqual(true);
    });

    it ('should contain a Hotels component', () => {
        const wrapper = shallow (<App />);
        expect(wrapper.containsMatchingElement(<Hotels />)).toEqual(true);
    });
});
import React, {Component} from 'react';
import Preference from "../preference/preference";
import preferenceList from './preferences.config';
import {connect} from 'react-redux';
import {includes} from 'ramda';
import updatePreference from '../../actions/creators/preferences';

const Preferences = (props) => (
  <div className="preferences-container">
      {
          preferenceList.map((item, idx) => (
              <Preference
                  name={item}
                  key={idx}
                  onChange={props.updatePreference}
                  isChecked={includes(item, props.preferences)}/>
          ))
      }
  </div>
);

const mapStateToProps = state => ({
        preferences: state.preferences
    });

const mapDispatchToProps = {
    updatePreference
};

export {Preferences};

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);

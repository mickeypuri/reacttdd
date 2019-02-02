import React, {Component} from 'react';
import Preference from "../preference/preference";
import preferenceList from './preferences.config';
import {connect} from 'react-redux';

const Preferences = () => (
  <div className="preferences-container">
      {
          preferenceList.map((item, idx) => (
              <Preference name={item} key={idx}/>
          ))
      }

  </div>
);

const mapStateToProps = state => ({
        preferences: state.preferences
    });

export {Preferences};

export default connect(mapStateToProps)(Preferences);

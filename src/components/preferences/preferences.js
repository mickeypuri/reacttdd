import React, {Component} from 'react';
import Preference from "../preference/preference";
import preferenceList from './preferences.config';

const Preferences = () => (
  <div className="preferences-container">
      {
          preferenceList.map((item, idx) => (
              <Preference name={item} key={idx}/>
          ))
      }

  </div>
);

export default Preferences;

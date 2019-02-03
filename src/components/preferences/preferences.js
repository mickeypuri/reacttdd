import React, {Component} from 'react';
import Preference from "../preference/preference";
import preferenceList from './preferences.config';
import {connect} from 'react-redux';
import {includes} from 'ramda';
import updatePreference from '../../actions/creators/preferences';
import updateHotels from '../../actions/asyncCreators/fetchHotels';

export class Preferences extends Component {

    componentDidUpdate() {
        this.props.updateHotels(this.props.preferences);
    }

    render() {
        return (
            <div className="preferences-container">
                {
                    preferenceList.map((item, idx) => (
                        <Preference
                            name={item}
                            key={idx}
                            onChange={this.props.updatePreference}
                            isChecked={includes(item, this.props.preferences)}/>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
        preferences: state.preferences
    });

const mapDispatchToProps = {
    updatePreference,
    updateHotels
};

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);

import React, {Component} from 'react';
import './sorter.css';
import styled from 'styled-components';
import classNames from 'classnames';
import {connect} from 'react-redux';
import sortClicked from '../../actions/creators/sortOrder';
import fetchHotels from '../../actions/asyncCreators/fetchHotels';

const Button = styled.button`
    width: 100px;
`;

export class Sorter extends Component {

    sortClicked = direction => direction !== this.props.sortOrder ? this.props.sortClicked(direction) : null;

    componentDidUpdate(prevProps) {
        this.props.fetchHotels(this.props.preferences);
    }

    render() {
        return (
            <div className='sorter-container'>
                <Button className={classNames('sort-button', {active: this.props.sortOrder === 'asc'})}
                        onClick={() => this.sortClicked('asc')}
                >
                    Ascending
                </Button>
                <Button className={classNames('sort-button', {active: this.props.sortOrder === 'desc'})}
                        onClick={() => this.sortClicked('desc')}
                >Descending
                </Button>
            </div>
            );
    }
}

const mapStateToProps = state => ({
    sortOrder: state.sortOrder,
    preferences: state.preferences
});

const mapDispatchToProps = {
    sortClicked,
    fetchHotels
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorter);



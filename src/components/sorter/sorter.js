import React, {Component} from 'react';
import './sorter.css';
import styled from 'styled-components';
import classNames from 'classnames';
import {connect} from 'react-redux';

const Button = styled.button`
    width: 100px;
`;

export class Sorter extends Component {

    render() {
        return (
            <div className='sorter-container'>
                <Button className={classNames('sort-button', {active: this.props.sortOrder === 'asc'})}>Ascending</Button>
                <Button className={classNames('sort-button', {active: this.props.sortOrder === 'desc'})}>Descending</Button>
            </div>
            );
    }
}

const mapStateToProps = state => ({
    sortOrder: state.sortOrder
});


export default connect(mapStateToProps)(Sorter);



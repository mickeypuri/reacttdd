import React, {Component} from 'react';
import './sorter.css';
import styled from 'styled-components';
import classNames from 'classnames';
import {connect} from 'react-redux';
import sortClicked from '../../actions/creators/sortOrder';

const Button = styled.button`
    width: 100px;
`;

export class Sorter extends Component {

    render() {
        return (
            <div className='sorter-container'>
                <Button className={classNames('sort-button', {active: this.props.sortOrder === 'asc'})}
                        onClick={() => this.props.sortClicked('asc')}
                >
                    Ascending
                </Button>
                <Button className={classNames('sort-button', {active: this.props.sortOrder === 'desc'})}
                        onClick={() => this.props.sortClicked('desc')}
                >Descending
                </Button>
            </div>
            );
    }
}

const mapStateToProps = state => ({
    sortOrder: state.sortOrder
});

const mapDispatchToProps = {
    sortClicked
};

export default connect(mapStateToProps, mapDispatchToProps)(Sorter);



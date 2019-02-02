import React, {Component} from 'react';
import './sorter.css';
import styled from 'styled-components';

const Button = styled.button`
    width: 100px;
`;

class Sorter extends Component {

    
    render() {
        return (
            <div className='sorter-container'>
                <Button className='sort-button'>Ascending</Button>
                <Button className='sort-button'>Descending</Button>
            </div>
            );
    }
}

export default Sorter;

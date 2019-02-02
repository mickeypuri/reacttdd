import React, {Component} from 'react';
import './sorter.css';
import styled from 'styled-components';

const Button = styled.button`
    width: 100px;
`;

const Sorter = () => (
  <div className='sorterContainer'>
      <Button className='sort-button'>Ascending</Button>
      <Button className='sort-button'>Descending</Button>
  </div>
);

export default Sorter;

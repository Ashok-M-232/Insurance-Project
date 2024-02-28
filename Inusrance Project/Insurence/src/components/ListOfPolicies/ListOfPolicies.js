import React from 'react';
import { Link } from 'react-router-dom';
import './ListOfPolicies.css';

function ListOfPolicies() {
  return (
    <div className='container'>
      <div className='listOfPolicies'>
        <h4>Insurance Policies</h4>
        <Link to={"property"}>Property Insurance</Link>      
      </div>
    </div>
  );
}

export default ListOfPolicies;

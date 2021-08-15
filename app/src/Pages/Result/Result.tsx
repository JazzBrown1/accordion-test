import React from 'react';
import { DetailsResponse } from '../../api/api';

const Results = ({ responseData } : {responseData: DetailsResponse}) => (
  <div className="results">
    <h2>Great! Thanks for submitting your response!</h2>

    <div className="results-details-list">
      {Object.entries(responseData).map(([key, string]) => (
        <div className="result-line" key={key}>
          <span className="result-details-key">{key}</span>
          :
          {' '}
          <span className="result-details-text">
            {string}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Results;

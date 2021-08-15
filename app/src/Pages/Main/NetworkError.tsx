import React from 'react';

const NetworkError = () => (
  <div
    style={{
      position: 'fixed', top: 20, width: '100%', color: 'red', textAlign: 'center',
    }}
  >
    There was an Error posting your details to the server.
  </div>
);

export default NetworkError;

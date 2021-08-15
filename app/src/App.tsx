import React, { useState } from 'react';
import sendDetails, { DetailsResponse } from './api/api';
import './App.css';
import Main, { CombinedTabData } from './Pages/Main/Main';
import Results from './Pages/Result/Result';

// App.js will handle the call to server and the
// page change after completion

function App() {
  const [networkError, setNetworkError] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<DetailsResponse>();

  const sendData = async (data: CombinedTabData) => {
    const result = await sendDetails(data);
    if (result) {
      setResponseData(result);
      setNetworkError(false);
    } else setNetworkError(true);
  };

  if (responseData) return <Results responseData={responseData} />;
  return <Main networkError={networkError} sendData={sendData} />;
}

export default App;

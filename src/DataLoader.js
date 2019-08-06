import React from 'react';
import { useOperation, testOperation } from "./hooks";

export default function DataLoader(props) {

  const { loaded, loading, perform, data } = useOperation(testOperation);

  return (
    <div>
      <hr/>
      <button onClick={() => perform()}>Load Data!</button>
      <div>Loaded: {loaded ? 'Yup.': 'Nope.'}</div>
      <div>Loading: {loading? 'Yup.': 'Nope.'}</div>
      <div>Data: {data}</div>
    </div>
  )
}
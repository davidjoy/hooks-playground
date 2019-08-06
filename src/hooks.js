import { useState } from 'react';

export function useOperation(operation) {
  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const perform = () => {
    setLoading(true);
    operation().then((data) => {
      setLoaded(true);
      setLoading(false);
      setData(data);
    })
  }

  return { perform, loaded, loading, data }
}

export const testOperation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('request done!');
      resolve('my data');
    }, 2000)
  })
}
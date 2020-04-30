import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

const URL =
  'https://cors-anywhere.herokuapp.com/https://covid-api.mmediagroup.fr/v1/cases';

function Home() {
  const [country, setCountry] = useState();
  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(URL, {
        cancelToken: source.token,
      })
      .then((result) => setCountry(Object.keys(result.data)))
      .catch(() => 'there is no data');
    return () => source.cancel();
  }, []);

  return (
    <div className="home">
      <h1> </h1>
    </div>
  );
}

export default Home;

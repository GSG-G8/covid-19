import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import Loading from '../Spin/Spin';
import Card from '../card';
import Select from '../AutoComplete';

const URL =
  'https://cors-anywhere.herokuapp.com/https://covid-api.mmediagroup.fr/v1/cases';

const Search = () => {
  const [country, setCountry] = useState();
  const [result, setResult] = useState();
  const [cases, setCases] = useState();
  const [location, setLocation] = useState('GLOBAL');

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(URL, {
        cancelToken: source.token,
      })
      .then((response) => {
        setCountry(Object.keys(response.data));
        setResult(response.data);
        setCases(response.data.Global.All);
      })
      .catch(() => 'there is no data');
    return () => source.cancel();
  }, []);

  useEffect(() => {
    if (location !== 'GLOBAL') {
      setCases(result[location].All);
    }
  }, [location, result]);

  return (
    <div className="Search">
      {country ? (
        <Select country={country} setValue={(value) => setLocation(value)} />
      ) : (
        <Loading />
      )}
      {cases ? (
        <Card
          confirmed={cases.confirmed}
          recovered={cases.recovered}
          deaths={cases.deaths}
          location={location}
        />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Search;

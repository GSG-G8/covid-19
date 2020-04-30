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
  const [select, setSelect] = useState();
  const [cases, setCases] = useState();
  const [location, setLocation] = useState();

  useEffect(() => {
    const source = axios.CancelToken.source();
    axios
      .get(URL, {
        cancelToken: source.token,
      })
      .then((result) => {
        setCountry(Object.keys(result.data));
        setResult(result.data);
        setCases(result.data.Global.All);
      })
      .catch(() => 'there is no data');
    return () => source.cancel();
  }, []);

  useEffect(() => {
    if (location) {
      setLocation(select);
      setCases(result[select].All);
    } else {
      setLocation('Global');
    }
  }, [select]);

  return (
    <div className="Search">
      {country ? (
        <Select country={country} setValue={(value) => setSelect(value)} />
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

import React, {useState} from 'react';
import {Text, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

const HomeScreen = () => {
  const [term, setTerm] = useState('');
  const [data, fetchData, errorMessage] = useResults();

  return (
    <>
      <SearchBar
        onTermChange={setTerm}
        value={term}
        onSubmit={() => fetchData(term)}
      />
      {errorMessage.length ? <Text>{errorMessage}</Text> : null}
      <ScrollView showsVerticalScrollIndicator={false}>
        <ResultList
          title="Cost Effective"
          data={data.filter(x => x.price_range === 1)}
        />
        <ResultList
          title="Bit Pricer"
          data={data.filter(x => x.price_range === 2)}
        />
        <ResultList
          title="Big Spender"
          data={data.filter(x => x.price_range === 3)}
        />
      </ScrollView>
    </>
  );
};

export default HomeScreen;

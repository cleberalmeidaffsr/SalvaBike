import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Papa from 'papaparse';

const CSV_URL = 'http://dados.recife.pe.gov.br/dataset/be09e394-675f-4580-a996-d8e377179612/resource/05289ed4-58df-487a-9859-e7c209f8de56/download/salvabikes.csv';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(CSV_URL)
      .then(response => response.text())
      .then(csvText => {
        Papa.parse(csvText, {
          header: true,
          complete: (result) => {
            setData(result.data);
          },
        });
      })
      .catch(error => {
        console.error('Error fetching the CSV data: ', error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salva Bike!</Text>
      <ScrollView style={styles.scrollView}>
        {data.map((item, index) => (
          <View key={index} style={styles.item}>
            <Text>Estação: {item.estacao}</Text>
            <Text>Local: {item.local}</Text>
            <Text>Logradouro: {item.logradouro}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollView: {
    marginVertical: 20,
  },
  item: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default App;
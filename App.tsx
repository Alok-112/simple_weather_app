import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import BackgroundImage from './components/Image.tsx';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [tempSet, setTempSet] = useState('');
  const [nameSet, setNameSet] = useState('');
  const [countrySet, setCountrySet] = useState('');
  const [desc, setDesc] = useState('');

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      getFetchData(inputText);
    }, 2000);
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [inputText]);
  const handleTextChange = (text: any) => {
    setInputText(text);
  };

  const getFetchData = async (inputText: any) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputText}&appid=11d39071f61ab4508bc8956a32cc2a4e&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data['main']['temp']);

    setTempSet(data['main']['temp']);
    setNameSet(data['name']);
    setCountrySet(data['sys']['country']);
    setDesc(data['weather'][0]['description']);
  };

  return (
    <View style={styles.background}>
      <BackgroundImage />
      <TextInput
        style={styles.textInput}
        placeholder="Enter City"
        onChangeText={handleTextChange}></TextInput>

      <Text style={styles.city}>{nameSet}</Text>
      <Text style={styles.country}>{countrySet}</Text>
      <Text style={styles.desc}>{desc}</Text>

      <Text style={styles.text}>{tempSet}°C</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  background: {
    backgroundColor: '#1e1e1e', // Dark gray for a modern look
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  textInput: {
    position: 'absolute',
    backgroundColor: '#ffffff', // White for input background
    color: '#000000', // Black for input text
    borderRadius: 10,
    width: 250,
    margin: 10,
    padding: 10,
  },
  text: {
    position: 'absolute',
    color: '#00bfff', // Sky blue for temperature
    fontSize: 40,
    marginTop: 200,
  },
  city: {
    position: 'absolute',
    color: '#ffd700', // Gold for city name
    fontSize: 40,
    marginTop: 100,
  },
  country: {
    position: 'absolute',
    color: '#32cd32', // Lime green for country name
    fontSize: 30,
    marginTop: 60,
  },
  desc: {
    position: 'absolute',
    color: '#ff7f50', // Coral for description
    fontSize: 40, // Smaller size for a more descriptive text
    marginTop: 150,
  },
});

export default App;

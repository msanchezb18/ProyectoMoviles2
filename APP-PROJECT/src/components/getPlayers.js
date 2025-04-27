import React, {useEffect, useState} from 'react';
import {PATHURL, PORT} from './config/config.js';
import {style_01} from '../styles/styles_01';

import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';

const GetPlayers = () => {
  const [data, setData] = useState([]);

  const Obtener = async () => {
    try {
      axios.get(`${PATHURL}:${PORT}/player`).then(response => {
        const json = response.data;
        setData(json.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    Obtener();
  }, []);

  return (
    <SafeAreaView>
    <Text>Players Get</Text>
      <FlatList
        data={data}
        keyExtractor={({id}, index) => id}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.Name}
            onPress={() => onPressViewArticle(item._id)}>
            <View>
              <Text>{item.Name}</Text>
              <Text>{item.Points}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default GetPlayers;
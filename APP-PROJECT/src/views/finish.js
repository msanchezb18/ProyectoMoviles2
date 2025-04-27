import React from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { style_principal } from '../styles/style_principal.js';
import { useNavigation } from '@react-navigation/native';

const CelebrationScreen = ({ score }) => {
  const navigation = useNavigation();

  const onPress = () => {
    // Navegar a otra pantalla o realizar alguna acción al presionar el botón
  };

  return (
    <View style={style_principal.divMain}>
      <Text style={style_principal.h1}>¡Felicidades Jugador!</Text>
      <Text style={style_principal.h2}>Has completado el juego</Text>
      <Text style={style_principal.text}>Tu puntuación es la siguiente: {score}</Text>
      {/* Aquí podrías agregar una imagen de celebración si lo deseas */}
      <TouchableOpacity
        style={style_principal.button}
        onPress={onPress}
      >
        <Text style={style_principal.buttonText}>Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CelebrationScreen;

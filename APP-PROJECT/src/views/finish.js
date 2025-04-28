import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { style_principal } from "../styles/style_principal.js";
import { useNavigation, useRoute } from "@react-navigation/native"; // Agrega useRoute

const CelebrationScreen = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Obtiene los parámetros de la ruta

  // Obtén el score desde los parámetros de navegación
  const { score } = route.params;

  const onPress = () => {
    navigation.navigate("Index"); // Navega al inicio
  };

  return (
    <View style={style_principal.divMain}>
      <Text style={style_principal.h1}>¡Felicidades Jugador!</Text>
      <Text style={style_principal.h2}>Has completado el juego</Text>
      <Text style={style_principal.text}>
        Tu puntuación es la siguiente: {score}
      </Text>
      <TouchableOpacity style={style_principal.button} onPress={onPress}>
        <Text style={style_principal.buttonText}>Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CelebrationScreen;

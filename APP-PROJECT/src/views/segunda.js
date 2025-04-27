import React from "react";
import { Text, View } from "react-native";
import { style_segunda } from "../styles/style_segunda";
import GameSetup from "../components/gameSetup.js";

const Segunda = () => {
  return (
    <View style={style_segunda.divMain}>
      <View style={style_segunda.contentContainer}>
        <View style={style_segunda.encabezado}>
          <Text style={style_segunda.title1}>Cubos y Balanza</Text>
        </View>
        <GameSetup />
      </View>
      <View style={style_segunda.divFooter}>
        <Text style={style_segunda.textFooter}>
          Bienvenidos al juego en el que tu cabeza tendrá que trabajar
        </Text>
      </View>
    </View>
  );
};

export default Segunda;

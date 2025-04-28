import React from "react";
import { Image, Text, View, TouchableOpacity } from "react-native";
import { style_principal } from "../styles/style_principal.js";
import { useNavigation } from "@react-navigation/native";

const Index = () => {
  const navigation = useNavigation();

  const OnPress = () => {
    navigation.navigate("Segunda");
  };

  return (
    <View style={style_principal.divMain}>
      <Text style={style_principal.h1}>Cubos y Balanza</Text>
      <Image
        style={style_principal.balanzaImg}
        source={require("../imgs/balanza.png")}
      />
      <TouchableOpacity style={style_principal.button} onPress={OnPress}>
        <Text style={style_principal.buttonText}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

import React from "react";
import { useState, useEffect } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Textarea from "react-native-textarea";
import { ws } from "../../App";
import { style_01 } from "../styles/styles_01";
import GetPlayers from "../components/getPlayers";

const AccSocket = () => {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState("");

  ws.onmessage = (e) => {
    // a message was received
    const texto = mensajes + "\n" + e.data;
    setMensajes(texto);
    console.log(e.data);
    console.log(texto);
  };

  ws.onerror = (e) => {
    // an error occurred
    console.log(e.message);
  };

  const enviarMensaje = () => {
    ws.send(mensaje);
    setMensaje("");
  };

  const cerrarSesion = () => {
    ws.onclose = (e) => {
      // connection closed
      console.log(e.code, e.reason);
    };
  };

  return (
    <View>
      <View style={style_01.banda}>
        <TextInput
          value={mensaje}
          style={style_01.texto}
          multiline={true}
          placeholder={"Write yours comment..."}
          onChangeText={(newValue) => {
            setMensaje(newValue);
          }}
        />
        <TouchableOpacity
          style={style_01.btnEnviar}
          onPress={() => enviarMensaje()}
        >
          <Text style={style_01.tit_04}> SEND </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccSocket;

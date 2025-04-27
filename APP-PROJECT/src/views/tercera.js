import React, { useState, useEffect } from "react";
import { Image, Text, View, ScrollView } from "react-native";
import { style_tercera } from "../styles/style_tercera";
import AsignCubes from "../components/AsignCubes.js";
import { PATHURL, PORT } from "../components/config/config.js";
import { ws } from "../../App";

const Tercera = () => {
  ws.onmessage = (e) => {
    // a message was received
    console.log(e.data);
  };

  const [dados, setDados] = useState([
    { id: 1, color: "red", cantidad: 2, peso: 10 },
    { id: 2, color: "yellow", cantidad: 2, peso: 15 },
    { id: 3, color: "green", cantidad: 2, peso: 20 },
    { id: 4, color: "blue", cantidad: 2, peso: 25 },
    { id: 5, color: "purple", cantidad: 2, peso: 30 },
  ]);

  useEffect(() => {
    fetch(`${PATHURL}:${PORT}/cube`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status_code === 200 && Array.isArray(data.data)) {
          const updatedDados = dados.map((dado) => {
            const found = data.data.find(
              (apiCube) => apiCube.Color.toLowerCase() === dado.color
            );
            return found ? { ...dado, peso: found.Weight } : dado;
          });
          setDados(updatedDados);
        } else {
          console.error("Error fetching dados:", data);
        }
      })
      .catch((error) => {
        console.error("Error fetching dados:", error);
      });
  }, []);

  const pesoPesado1 = "Pesado";
  const pesoLigero1 = "Ligero";
  const pesoPesado2 = "Pesado";
  const pesoLigero2 = "Ligero";

  return (
    <ScrollView>
      <View style={style_tercera.divMain}>
        <View style={style_tercera.encabezado}>
          <Text style={style_tercera.title1}>Cubos Y Balanza</Text>
        </View>

        <View style={style_tercera.imageContainer}>
          <Text style={style_tercera.Area1}>{pesoPesado1}</Text>
          <Image style={style_tercera.balanzaImg} />
          <Text style={style_tercera.area2}>{pesoLigero1}</Text>
        </View>
        <AsignCubes dados={dados} />

        <View style={style_tercera.imageContainer}>
          <Text style={style_tercera.area3}>{pesoPesado2}</Text>
          <Image style={style_tercera.balanzaImg2} />
          <Text style={style_tercera.area4}>{pesoLigero2}</Text>
        </View>

        <View style={style_tercera.divFooter}>
          <Text style={style_tercera.textFooter}>
            Bienvenidos al juego de los cubos
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
export default Tercera;

import React, { useState, useEffect } from "react";
import {
  View,
  Animated,
  PanResponder,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { style_dice } from "../styles/style_dice";
import { ws } from "../../App";

const AssignCube = ({ dados }) => {
  const [counters, setCounters] = useState({
    area1: 0,
    area2: 0,
    area3: 0,
    area4: 0,
  });

  useEffect(() => {
    ws.onmessage = (e) => {
      const wei = Number(e.data);
      console.log(wei);
      const { area1, area2, area3, area4 } = counters;

      if (area1 !== area2) {
        setYellowScale(area1 > area2 ? "izquierda" : "derecha");
      } else {
        setYellowScale("nivelada");
      }

      if (area3 !== area4) {
        setBlackScale(area3 > area4 ? "izquierda" : "derecha");
      } else {
        setBlackScale("nivelada");
      }
    };
  }, [counters]);

  const handleDrop = (area, weight) => {
    const weightMessage = weight.toString();
    ws.send(weightMessage);
    setCounters((prevCounters) => ({
      ...prevCounters,
      [area]: prevCounters[area] + weight,
    }));
  };

  const renderDice = (dice) => {
    const diceComponents = [];

    for (let i = 0; i < dice.cantidad; i++) {
      const [pan] = useState(new Animated.ValueXY());

      const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: (e, gesture) => {
          pan.flattenOffset();
          const area = determineArea(gesture.moveX, gesture.moveY);
          handleDrop(area, dice.peso);
        },
      });

      diceComponents.push(
        <Animated.View
          key={`${dice.id}_${i}`}
          style={[
            style_dice.dice,
            { backgroundColor: dice.color },
            pan.getLayout(),
          ]}
          {...panResponder.panHandlers}
        ></Animated.View>
      );
    }

    return diceComponents;
  };

  const determineArea = (x, y) => {
    if (x < 157 && y < 200) return "area1";
    if (x >= 157 && y < 200) return "area2";
    if (x < 157 && y >= 200) return "area3";
    if (x >= 157 && y >= 200) return "area4";
  };

  return (
    <View style={styles.container}>
      <View style={styles.diceContainer}>
        {dados.map((dice) => (
          <View key={dice.id} style={styles.dice}>
            {renderDice(dice)}
          </View>
        ))}
      </View>

      <View style={styles.balanzaContainer}>
        <Image
          source={
            counters.area3 !== counters.area4
              ? counters.area3 > counters.area4
                ? require("../imgs/izquierda.png")
                : require("../imgs/derecha.png")
              : require("../imgs/negra.png")
          }
          style={styles.balanzaImageNegra}
        />
        <Image
          source={
            counters.area1 !== counters.area2
              ? counters.area1 > counters.area2
                ? require("../imgs/izquierdaDorada.png")
                : require("../imgs/derechaDorada.png")
              : require("../imgs/amarilla.png")
          }
          style={styles.balanzaImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  diceContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  dice: {
    margin: 5,
  },
  counter: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  balanzaContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  balanzaImageNegra: {
    width: 150,
    height: 150,
    marginVertical: 10,
    marginBottom: -200,
    marginLeft: -345,
    bottom: 0,
    marginTop: 100,
  },
  balanzaImage: {
    width: 150,
    height: 150,
    marginVertical: 10,
    marginTop: -320,
    marginLeft: -345,
  },
});

export default AssignCube;
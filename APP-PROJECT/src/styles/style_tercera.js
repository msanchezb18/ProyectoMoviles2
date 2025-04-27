import { StyleSheet } from "react-native";

export const style_tercera = StyleSheet.create({
  encabezado: {
    backgroundColor: "#8df0ca",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  divMain: {
    flex: 1,
    backgroundColor: "#d5f0e6",
    alignItems: "center",
  },
  divFooter: {
    width: "100%",
    backgroundColor: "#D3D3D3",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 33,
  },
  textFooter: {
    width: "80%",
    color: "#3C5473",
    fontSize: 14,
    textAlign: "center",
  },
  title1: {
    color: "#FFFFFF",
    textAlign: "center",
    lineHeight: 73,
    fontSize: 40,
    fontWeight: "bold",
  },
  balanzaImg: {
    height: 200,
    borderRadius: 25,
    width: 250,
    resizeMode: "contain",
    alignItems: "center", // Centra la imagen horizontalmente

    marginTop: 50,
  },
  balanzaImg2: {
    height: 230,
    borderRadius: 25,
    width: 250,
    resizeMode: "contain",
    marginTop: 25,
    zIndex: -1,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },
  Area1: {
    position: "absolute", // Posicionamiento absoluto
    top: "10%",
    left: -45,
    fontSize: 16,
    fontWeight: "bold",
    color: "#B31412",
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
    height: 200,
    width: 157,
  },
  area3: {
    position: "absolute",
    top: "10%",
    left: -45,
    fontSize: 16,
    fontWeight: "bold",
    color: "#B31412",
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
    height: 200,
    width: 157,
    zIndex: -1,
  },

  area2: {
    position: "absolute", // Posicionamiento absoluto
    top: "10%", // Coloca el texto en la mitad de la altura del contenedor padre
    right: -45, // Ajusta el texto a la derecha del contenedor padre
    fontSize: 16,
    fontWeight: "bold",
    color: "#156412",
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
    height: 200,
    width: 157,
    zIndex: -1,
  },

  area4: {
    position: "absolute", // Posicionamiento absoluto
    top: "10%", // Coloca el texto en la mitad de la altura del contenedor padre
    right: -45, // Ajusta el texto a la derecha del contenedor padre
    fontSize: 16,
    fontWeight: "bold",
    color: "#156412",
    borderWidth: 1,
    borderColor: "#000",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
    height: 200,
    width: 157,
    zIndex: -1,
  },
});

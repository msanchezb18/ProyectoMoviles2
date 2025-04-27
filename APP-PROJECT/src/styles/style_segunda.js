import { StyleSheet } from "react-native";

export const style_segunda = StyleSheet.create({
  encabezado: {
    backgroundColor: "#74ed98",
    height: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  divMain: {
    flex: 1,
    backgroundColor: "#adaa9e",
    justifyContent: "space-between", // Agregado para separar el contenido y el footer
  },
  contentContainer: {
    alignItems: "center", // Centrar el contenido horizontalmente
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
  button: {
    marginTop: 20,
    width: 200,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#3C5473",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  whiteBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  title2: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "100%",
  },
});

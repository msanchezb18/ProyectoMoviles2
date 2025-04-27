import {
    StyleSheet
} from 'react-native';




const moradito = '#ADBCDB';
const fondo = '#B3AB91';
const verde = '#2C5644';
const azul = '#3C5473';


export const style_principal = StyleSheet.create({

    divMain: {
        flex: 1,
        backgroundColor: moradito,
        alignItems: 'center',
        justifyContent: 'center',
    },

    balanzaImg: {
        height: 200,
        borderRadius: 25,
        width: 250,
        resizeMode: 'contain',
        marginTop: 50,
        marginBottom: 50,

    },

    h1: {
        marginTop: -100,
        fontSize: 50,
    },

    button: {
        marginTop: 20, // Espacio entre la imagen y el botón
        width: 200,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#3C5473',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 20,
    },


});
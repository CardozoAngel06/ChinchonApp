import { StyleSheet, Text, View, ImageBackground, TouchableOpacity} from 'react-native'
import Formulario from './formulario'
import React from 'react'


const PrimerComponente = () => {
  return (
    <>
    <ImageBackground source={require('../assets/Fondo.jpg')}>
        <View style={styles.bg}>
            <Text style={styles.texto}>Iniciar Sesion</Text>
            <Text >
                <Formulario></Formulario>
                <TouchableOpacity onPress={() => ('Crear cuenta')}>
                <Text style={styles.texto}>
                    ¿No tenés cuenta? <Text style={styles.link}>Crear una</Text>
                </Text>
            </TouchableOpacity>
                
            </Text>
        </View>    
    </ImageBackground>
    </>
  )
}

export default PrimerComponente

const styles = StyleSheet.create({
    bg:{
        height: 850
    },
    texto:{
        fontSize: 40,
        color:'white',
        marginTop : 170,
        textAlign: 'center'
    },
      });

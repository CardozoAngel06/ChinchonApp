import { StyleSheet, Text, TextInput, View, Alert, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Btn from '../botones/boton'; // Asegúrate de que la ruta sea correcta

const Formulario = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Ingrese su email"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
                multiline={false}
            />
            <TextInput
                value={contraseña}
                onChangeText={setContraseña}
                placeholder="Ingrese contraseña"
                secureTextEntry={true}
                style={styles.input}
                returnKeyType="done"
                multiline={false} 
            />
            <Btn texto="Continuar" presionado={'SegundoComponente'} />
            <TouchableOpacity onPress={() => ('Crear cuenta')}>
                <Text style={styles.texto}>
                    ¿No tenés cuenta? <Text style={styles.link}>Crear una</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Formulario;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 50,
        backgroundColor: '#F7F9FC',
        borderRadius: 10,
        shadowRadius: 6,
        elevation: 6,
        marginHorizontal: 30,
    },
    input: {
        textAlign: 'left',
        borderWidth: 2,
        borderColor: 'black',
        padding: 15,
        marginBottom: 30,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        height: 60,
        fontSize: 16,
        overflow: 'hidden',
        paddingHorizontal: 10
    },
    texto: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 18,
        color: '#333',
    },
    link: {
        color: '#007BFF',
        fontWeight: 'bold',
    },
});

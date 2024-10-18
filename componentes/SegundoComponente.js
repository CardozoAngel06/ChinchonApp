import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';

const Formulario = () => {
    const [email, setEmail] = useState('');
    const [contraseña, setContraseña] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                value={email}
                onChangeText={setEmail}
                placeholder="Ingrese su email"
                style={styles.input}
                multiline={false}
            />
            <Text style={styles.texto}>¿No tenés cuenta?</Text>
        </View>
    );
};

export default Formulario;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        textAlign: 'left',
        borderWidth: 1,
        borderBottomWidth: 2,
        borderColor: 'black',
        padding: 10,
        paddingHorizontal: 50,
        marginBottom: 30,
    },
});

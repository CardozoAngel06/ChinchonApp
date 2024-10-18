import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Btn({ presionado, texto = "Boton por defecto" }) {
    return (
        <TouchableOpacity style={styles.boton} onPress={presionado}>
            <Text style={styles.botonTexto}>
                {texto}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    boton: {
        padding: 10,
        backgroundColor: '#007AFF',
        borderRadius: 20,
        borderWidth: 1,
        alignItems: 'center',
    },
    botonTexto: {
        color: 'white',
        fontSize : 15 
    },
});

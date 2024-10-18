import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import formulario from './componentes/formulario'
import PrimerComponente from './componentes/PrimerComponente';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
export default function App() {
  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PrimerComponente" component={PrimerComponente} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>

    <StatusBar style="auto" /> 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

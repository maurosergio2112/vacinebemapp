import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRegistry } from "react-native";

import HomeScreen from "./screens/HomeScreen";
import QuestionarioScreen from "./screens/QuestionarioScreen";
import AbasVacinas from "./screens/AbasVacinas";
import CartaoVacinaScreen from "./screens/CartaovacinaScreen";
import DadosdasVacinasScreen from "./screens/DadosdasVacinasScreen";
import PerfilScreen from "./screens/PerfilScreen";
import RegistroUsuarioScreen from "./screens/RegistroUsuarioScreen";

const Stack = createStackNavigator();
// Registro do componente App
AppRegistry.registerComponent("blank", () => App);

// Registro do componente App
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RegistroUsuarioScreen">
        <Stack.Screen
          name="RegistroUsuarioScreen"
          component={RegistroUsuarioScreen}
          options={{ title: "RegistroUsuarioScreen" }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Questionario"
          component={QuestionarioScreen}
          options={{ title: "Questionário de Vacina" }}
        />
        <Stack.Screen
          name="AbasVacinas"
          component={AbasVacinas}
          options={{ title: "Abas de Informações de Vacinas" }}
        />
        <Stack.Screen
          name="CartaoVacina"
          component={CartaoVacinaScreen}
          options={{ title: "Cartão de Vacina" }}
        />
        <Stack.Screen
          name="DadosdasVacinasScreen"
          component={DadosdasVacinasScreen}
          options={{ title: "DadosdasVacinasScreen" }}
        />

        <Stack.Screen
          name="PerfilScreen"
          component={PerfilScreen}
          options={{ title: "PerfilScreen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';





 // Importe os ícones desejados da biblioteca

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao VacineBemApp!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('PerfilScreen')}
      >
        <AntDesign name="user" size={24} color="black" />
        <Text style={styles.buttonText}>Dados do Usuário</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Questionario')}
      >
        <AntDesign name="form" size={24} color="black" />
        <Text style={styles.buttonText}>Registro de Vacina</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AbasVacinas')}
      >
        <AntDesign name="medicinebox" size={24} color="black" />
        <Text style={styles.buttonText}>Vacinas Recomendadas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CartaoVacina')}
      >
        <AntDesign name="idcard" size={24} color="black" />
        <Text style={styles.buttonText}>Cartão de Vacina</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DadosdasVacinasScreen')}
      >
        <AntDesign name="info" size={24} color="black" />
        <Text style={styles.buttonText}>Informações sobre Vacinas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
    marginLeft: 10,
  },
});

export default HomeScreen;
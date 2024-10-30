import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao VacineBemApp!</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PerfilScreen')}
        >
          <AntDesign name="user" size={40} color="black" />
          <Text style={styles.buttonText}>Dados do Usuário</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Questionario')}
        >
          <AntDesign name="form" size={40} color="black" />
          <Text style={styles.buttonText}>Registro de Vacina</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AbasVacinas')}
        >
          <AntDesign name="medicinebox" size={40} color="black" />
          <Text style={styles.buttonText}>Calendário de vacinação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('CartaoVacina')}
        >
          <AntDesign name="idcard" size={40} color="black" />
          <Text style={styles.buttonText}>Cartão de Vacina</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DadosdasVacinasScreen')}
        >
          <AntDesign name="info" size={40} color="black" />
          <Text style={styles.buttonText}>Informações sobre Vacinas</Text>
        </TouchableOpacity>
      </View>
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
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default HomeScreen;

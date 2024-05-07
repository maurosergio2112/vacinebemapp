import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const RegistroUsuarioScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [sexo, setSexo] = useState('');
  const [condicoesEspeciais, setCondicoesEspeciais] = useState('');
  const [profissao, setProfissao] = useState('');

  const handleRegistro = async () => {
    try {
      const usuario = {
        nome,
        dataNascimento,
        cpf,
        sexo,
        condicoesEspeciais,
        profissao,
      };
      await AsyncStorage.setItem('usuario', JSON.stringify(usuario));
      console.log('Dados do usuário registrados com sucesso:', usuario);
      navigation.navigate('Home'); // Navegar para a tela Home após o registro
    } catch (error) {
      console.error('Erro ao registrar os dados do usuário:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
      />
      <TextInput
        style={styles.input}
        placeholder="Sexo"
        value={sexo}
        onChangeText={setSexo}
      />
      <TextInput
        style={styles.input}
        placeholder="Condições Especiais"
        value={condicoesEspeciais}
        onChangeText={setCondicoesEspeciais}
      />
      <TextInput
        style={styles.input}
        placeholder="Profissão"
        value={profissao}
        onChangeText={setProfissao}
      />
      <Button title="Registrar" onPress={handleRegistro} />
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
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default RegistroUsuarioScreen;
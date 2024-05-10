import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { TextInputMask } from 'react-native-masked-text';

const RegistroUsuarioScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [sexo, setSexo] = useState('');
  const [condicoesEspeciais, setCondicoesEspeciais] = useState('');
  const [profissao, setProfissao] = useState('');
  const [dataNascimentoError, setDataNascimentoError] = useState('');

  const handleRegistro = async () => {
    try {
      // Validar a data de nascimento
      if (!isValidDate(dataNascimento)) {
        setDataNascimentoError('Formato de data inválido (dd/mm/aaaa)');
        return;
      }

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

  const isValidDate = (dateString) => {
    // Regex para validar o formato de data (dd/mm/aaaa)
    const regex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    return regex.test(dateString);
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
      <TextInputMask
        style={[styles.input, dataNascimentoError && styles.inputError]}
        placeholder="Data de Nascimento (dd/mm/aaaa)"
        type={'datetime'}
        options={{
          format: 'DD/MM/YYYY',
        }}
        value={dataNascimento}
        onChangeText={(formatted, extracted) => {
          setDataNascimento(formatted);
          setDataNascimentoError('');
        }}
      />
      {dataNascimentoError ? (
        <Text style={styles.errorText}>{dataNascimentoError}</Text>
      ) : null}
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
      <View style={styles.input}>
        <Picker
          selectedValue={condicoesEspeciais}
          onValueChange={(itemValue) => setCondicoesEspeciais(itemValue)}>
          <Picker.Item label="Selecione uma condição especial" value="" />
          <Picker.Item label="Doenças Crônicas" value="Doenças Crônicas" />
          <Picker.Item label="Imunossupressão" value="Imunossupressão" />
          <Picker.Item label="Doenças Neurológicas" value="Doenças Neurológicas" />
          <Picker.Item label="Nenhuma" value="Nenhuma" />
        </Picker>
      </View>
      <View style={styles.input}>
        <Picker
          selectedValue={profissao}
          onValueChange={(itemValue) => setProfissao(itemValue)}>
          <Picker.Item label="Selecione uma profissão" value="" />
          <Picker.Item label="Profissionais de Saúde" value="Profissionais de Saúde" />
          <Picker.Item label="Profissionais do Setor de Alimentos" value="Profissionais do Setor de Alimentos" />
          <Picker.Item label="Profissionais de Limpeza" value="Profissionais de Limpeza" />
          <Picker.Item label="Outra" value="Outra" />
        </Picker>
      </View>
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
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default RegistroUsuarioScreen;

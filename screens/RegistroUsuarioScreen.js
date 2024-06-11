import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';
import { TextInputMask } from 'react-native-masked-text';

const RegistroUsuarioScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [sexo, setSexo] = useState('');
  const [condicoesEspeciais, setCondicoesEspeciais] = useState([]);
  const [profissao, setProfissao] = useState('');
  const [dataNascimentoError, setDataNascimentoError] = useState('');

  const handleRegistro = async () => {
    try {
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
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao registrar os dados do usuário:', error);
    }
  };

  const isValidDate = (dateString) => {
    const regex = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
    return regex.test(dateString);
  };

  const handleCondicoesEspeciaisChange = (itemValue) => {
    setCondicoesEspeciais((prev) => {
      if (prev.includes(itemValue)) {
        return prev.filter((item) => item !== itemValue);
      } else {
        return [...prev, itemValue];
      }
    });
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
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={sexo}
          onValueChange={(itemValue) => setSexo(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Selecione o sexo" value="" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue=""
          onValueChange={handleCondicoesEspeciaisChange}
          style={styles.picker}
        >
          <Picker.Item label="Selecione uma condição especial" value="" />
          <Picker.Item label="Doenças Crônicas" value="Doenças Crônicas" />
          <Picker.Item label="Imunossupressão" value="Imunossupressão" />
          <Picker.Item label="Doenças Neurológicas" value="Doenças Neurológicas" />
          <Picker.Item label="Nenhuma" value="Nenhuma" />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={profissao}
          onValueChange={(itemValue) => setProfissao(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Selecione uma profissão" value="" />
          <Picker.Item label="Profissionais de Saúde" value="Profissionais de Saúde" />
          <Picker.Item label="Profissionais do Setor de Alimentos e Bebidas" value="ProfissionaisdeAlimentos" />
          <Picker.Item label="Militares, policiais e bombeiros" value="MilitaresPoliciaisBombeiros" />
          <Picker.Item label="Profissionais que lidam com dejetos, águas contaminadas e coletores de lixo" value="ProfissionaisLimpeza" />
          <Picker.Item label="Profissionais que lidam com Crianças" value="CuidadoresdeCrianças" />
          <Picker.Item label="Profissionais que lidam com Animais" value="veterinarios" />
          <Picker.Item label="Profissionais do sexo" value="Profissionaisdosexo" />
          <Picker.Item label="Profissionais administrativos" value="Profissionaisadministrativos" />
          <Picker.Item label="Profissionais que viajam muito" value="ProfissionaisqueViajam" />
          <Picker.Item label="Receptivos de estrangeiros" value="ReceptivosdeEstrangeiros" />
          <Picker.Item label="Manicures, pedicures, podólogos e tatuadores" value="ManicuresPedicuresPodologosTatuadores" />
          <Picker.Item label="Profissionais que trabalham em regime de confinamento" value="ProfissionaisConfinamento" />
          <Picker.Item label="Profissionais e voluntários em campos de refugiados, situações de catástrofe e ajuda humanitária" value="VoluntariosAjudaHumanitaria" />
          <Picker.Item label="Atletas profissionais" value="Atletas" />
          <Picker.Item label="Cuidadores" value="Cuidadores" />
          <Picker.Item label="Outra" value="Outra" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegistro}>
        <Text style={styles.buttonText}>Registrar</Text>
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: 'red',
  },
  pickerContainer: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  picker: {
    width: '100%',
    height: '100%',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 15,
  },
});

export default RegistroUsuarioScreen;

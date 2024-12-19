import AsyncStorage from '@react-native-async-storage/async-storage';

test('salva dados no AsyncStorage', async () => {
  await AsyncStorage.setItem('chave', JSON.stringify({ nome: 'João' }));

  const valor = await AsyncStorage.getItem('chave');
  expect(JSON.parse(valor)).toEqual({ nome: 'João' });
});

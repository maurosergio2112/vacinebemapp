import AsyncStorage from '@react-native-async-storage/async-storage';

test('salva e recupera dados no AsyncStorage', async () => {
  await AsyncStorage.setItem('user', JSON.stringify({ nome: 'João' }));

  const valor = await AsyncStorage.getItem('user');
  expect(JSON.parse(valor)).toEqual({ nome: 'João' });
});

test('limpa dados do AsyncStorage', async () => {
  await AsyncStorage.setItem('user', 'João');
  await AsyncStorage.clear();

  const valor = await AsyncStorage.getItem('user');
  expect(valor).toBeNull();
});

test('limpa dados do AsyncStorage', async () => {
    await AsyncStorage.setItem('chave', 'valor');
    await AsyncStorage.clear();
  
    const valor = await AsyncStorage.getItem('chave');
    expect(valor).toBeNull();
  });
  
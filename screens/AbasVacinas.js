import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';




const Tab = createMaterialTopTabNavigator();

const AbasVacinas = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tetravalente" component={TetravalenteScreen} />
      <Tab.Screen name="Pneumocócica Conjugada" component={PneumococicaScreen} />
      <Tab.Screen name="Hepatite B" component={HepatiteBScreen} />
      <Tab.Screen name="Febre Amarela" component={FebreAmarelaScreen} />
      <Tab.Screen name="HPV4" component={HPV4Screen} />
      <Tab.Screen name=" VSR" component={VacinaVSRScreen} />
      <Tab.Screen name="Dupla Bacteriana" component={VacinaDuplaBacterianaScreen} />
    </Tab.Navigator>
  );
};

const TetravalenteScreen = () => (
  <ScrollView>
    <Text style={styles.title}>Influenza</Text>
    <Text>A influenza, conhecida como gripe, é uma doença viral possivelmente adquirida
       através do contato humano com animais domesticados. Apesar de estar entre as mais
        antigas doenças da civilização, os relatos documentados de sua difusão entre os homens
         surgiram entre os séculos XV e XVI, e desde então tornou-se comum entre as pessoas,
       atingindo as sociedades através de epidemias e pandemias de intensidades variadas - SILVEIRA, 2005. </Text>
    {/* Adicione aqui as informações textuais sobre a vacina tetravalente */}

    <Text style={styles.subtitle}>Vacinas disponíveis</Text>
    <Text style={styles.text}>Vacina influenza trivalente ou 
    quadrivalente e quadrivalente de alta concentração - "high dose"HD4V
</Text>
  </ScrollView>
);

const PneumococicaScreen = () => (
  <ScrollView>
   <Text>A influenza, conhecida como gripe, é uma doença viral possivelmente adquirida
       através do contato humano com animais domesticados. Apesar de estar entre as mais
        antigas doenças da civilização, os relatos documentados de sua difusão entre os homens
         surgiram entre os séculos XV e XVI, e desde então tornou-se comum entre as pessoas,
       atingindo as sociedades através de epidemias e pandemias de intensidades variadas - SILVEIRA, 2005. </Text>
    {/* Adicione aqui as informações textuais sobre a vacina tetravalente */}

    <Text style={styles.subtitle}>Vacinas disponíveis</Text>
    <Text style={styles.text}>Vacina influenza trivalente ou 
    quadrivalente e quadrivalente de alta concentração - "high dose"HD4V
</Text>
  </ScrollView>
);

const HepatiteBScreen = () => (
  <ScrollView>
    <Text>Hepatite B HB-recombinante: Administrada em três doses, no esquema 0-1-6 meses. Disponível em unidades básicas de saúde. </Text>
    {/* Adicione aqui as informações textuais sobre a vacina tetravalente */}

    <Text style={styles.subtitle}>Vacinas disponíveis</Text>
    <Text style={styles.text}>Hepatite B HB-recombinante: Administrada em três doses, no esquema 0-1-6 meses. Disponível em unidades básicas de saúde.
</Text>
  </ScrollView>
);

const FebreAmarelaScreen = () => (
  <ScrollView>
    <Text>A influenza, conhecida como gripe, é uma doença viral possivelmente adquirida
       através do contato humano com animais domesticados. Apesar de estar entre as mais
        antigas doenças da civilização, os relatos documentados de sua difusão entre os homens
         surgiram entre os séculos XV e XVI, e desde então tornou-se comum entre as pessoas,
       atingindo as sociedades através de epidemias e pandemias de intensidades variadas - SILVEIRA, 2005. </Text>
    {/* Adicione aqui as informações textuais sobre a vacina tetravalente */}

    <Text style={styles.subtitle}>Vacinas disponíveis</Text>
    <Text style={styles.text}>Febre Amarela (VFA - atenuada): Contra a febre amarela, administrada em dose única. Disponível
     em unidades básicas de saúde e clínicas privadas de vacinação.
</Text>
  </ScrollView>
);

const HPV4Screen = () => (
  <ScrollView>
    <Text>A influenza, conhecida como gripe, é uma doença viral possivelmente adquirida
       através do contato humano com animais domesticados. Apesar de estar entre as mais
        antigas doenças da civilização, os relatos documentados de sua difusão entre os homens
         surgiram entre os séculos XV e XVI, e desde então tornou-se comum entre as pessoas,
       atingindo as sociedades através de epidemias e pandemias de intensidades variadas - SILVEIRA, 2005. </Text>
    {/* Adicione aqui as informações textuais sobre a vacina tetravalente */}

    <Text style={styles.subtitle}>Vacinas disponíveis</Text>
    <Text style={styles.text}>Papilomavírus Humano (HPV): Recomendadas três doses para vítimas de abuso sexual (homens e mulheres). Disponível na rede pública e privada.

</Text>
  </ScrollView>
);

const VacinaVSRScreen = () => (
  <ScrollView>
    <Text>A influenza, conhecida como gripe, é uma doença viral possivelmente adquirida
       através do contato humano com animais domesticados. Apesar de estar entre as mais
        antigas doenças da civilização, os relatos documentados de sua difusão entre os homens
         surgiram entre os séculos XV e XVI, e desde então tornou-se comum entre as pessoas,
       atingindo as sociedades através de epidemias e pandemias de intensidades variadas - SILVEIRA, 2005. </Text>
    {/* Adicione aqui as informações textuais sobre a vacina tetravalente */}

    <Text style={styles.subtitle}>Vacinas disponíveis</Text>
    <Text style={styles.text}>Sarampo, caxumba, rubéola (SCR - atenuada) (Tríplice viral): Indicada em situações de risco aumentado. Uma dose. Disponível somente em clínicas privadas de vacinação, dependendo do risco epidemiológico e da situação individual de suscetibilidade.

</Text>
  </ScrollView>
);

const VacinaDuplaBacterianaScreen = () => (
  <ScrollView>
    <Text>A influenza, conhecida como gripe, é uma doença viral possivelmente adquirida
       através do contato humano com animais domesticados. Apesar de estar entre as mais
        antigas doenças da civilização, os relatos documentados de sua difusão entre os homens
         surgiram entre os séculos XV e XVI, e desde então tornou-se comum entre as pessoas,
       atingindo as sociedades através de epidemias e pandemias de intensidades variadas - SILVEIRA, 2005. </Text>
    {/* Adicione aqui as informações textuais sobre a vacina tetravalente */}

    <Text style={styles.subtitle}>Vacinas disponíveis</Text>
    <Text style={styles.text}>Difteria e Tétano (dT): Recomendadas para iniciar ou completar três doses, de acordo com o histórico vacinal. Encontradas em unidades básicas de saúde.
</Text>
  </ScrollView>
);
// Outros componentes de tela aqui

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default AbasVacinas;
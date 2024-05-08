import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';




const Tab = createMaterialTopTabNavigator();

const AbasVacinas = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tetravalente" component={TetravalenteScreen} />
      <Tab.Screen name="Pneumocócica " component={PneumococicaScreen} />
      <Tab.Screen name="Hepatite B" component={HepatiteBScreen} />
      <Tab.Screen name="Febre Amarela" component={FebreAmarelaScreen} />
      <Tab.Screen name="HPV4" component={HPV4Screen} />
      <Tab.Screen name="Covid19" component={covid19Screen} />
      <Tab.Screen name="dTpa" component={dTpaScreen} />
      <Tab.Screen name="Herpes Zoster" component={HerpesZosterScreen} />
      <Tab.Screen name="SCR" component={scrscreen} />
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
    <Text style={styles.subtitle}>Pneumocócicas</Text>
    <Text style={styles.subtitle}>Doenças:Pneumonia, meningite, otite.</Text>
   <Text>Sintomas: Variam dependendo da doença pneumocócica específica, mas podem incluir febre, calafrios, dor de cabeça, rigidez no pescoço (em caso de meningite), 
    dor de ouvido (em caso de otite), dificuldade para respirar, tosse com muco ou com sangue. </Text>
  
    <Text style={styles.subtitle}>Esquema de vacinação</Text>
    <Text style={styles.text}>Recomenda-se a vacinação para maiores de 50 anos, especialmente para aqueles com mais de 60 anos.
     O esquema inclui vacinas pneumocócicas conjugadas (VPC13 ou VPC15) e a vacina pneumocócica polissacarídica (VPP23).
     A administração é sequencial, seguindo as diretrizes médicas.
</Text>
  </ScrollView>
);

const HepatiteBScreen = () => (
  <ScrollView>
    <Text style={styles.subtitle}>Hepatite B (HB - recombinante)</Text>
    <Text style={styles.subtitle}>Doenças:Hepatite B.</Text>
    <Text>Sintomas:* Os sintomas variam, mas podem incluir fadiga, dor abdominal, febre, náusea, vômito,
       urina escura e icterícia (coloração amarelada da pele e dos olhos). </Text>
    {/* Adicione aqui as informações textuais sobre a vacina tetravalente */}

    <Text style={styles.subtitle}>Esquema de vacinação:</Text>
    <Text style={styles.text}>A vacina contra a Hepatite B (HB recombinante) é administrada em três doses, 
    seguindo o esquema 0-1-6 meses. Geralmente disponível em unidades básicas de saúde.
</Text>
  </ScrollView>
);

const FebreAmarelaScreen = () => (
  <ScrollView>
    <Text style={styles.subtitle}>Febre Amarela</Text>
    <Text style={styles.subtitle}>*Doenças:* Febre Amarela.</Text>
    <Text>Sintomas:* Febre, dores musculares, dor de cabeça, calafrios, perda de apetite, náusea, vômito, icterícia e hemorragias.</Text>
    <Text style={styles.subtitle}>Esquema de vacinação:</Text>
    <Text style={styles.text}>A vacina contra a Febre Amarela (VFA - atenuada) é administrada em dose única. 
    Geralmente disponível em unidades básicas de saúde e clínicas privadas de vacinação.
</Text>
  </ScrollView>
);

const covid19Screen = () => (
  <ScrollView>
    <Text style={styles.subtitle}> COVID-19</Text>
    <Text style={styles.subtitle}> COVID-19, causada pelo coronavírus SARS-CoV-2</Text>
    <Text>Os sintomas variam amplamente e podem incluir febre, tosse, falta de ar, fadiga, dores musculares, 
      perda do olfato ou paladar, dor de garganta, congestão nasal, dor de cabeça, entre outros.</Text>
    <Text style={styles.subtitle}>Esquema de vacinação:</Text>
    <Text style={styles.text}>O esquema de vacinação contra a COVID-19 pode variar de acordo com o tipo de vacina e as diretrizes locais de saúde pública. Geralmente, é administrado em duas doses para vacinas de mRNA, como as da Pfizer-BioNTech e Moderna,
     e uma ou duas doses para vacinas de vetor viral, como a da AstraZeneca e a da Johnson & Johnson.
</Text>
  </ScrollView>
);
const dTpaScreen = () => (
  <ScrollView>
    <Text style={styles.subtitle}> (dTpa - acelular)</Text>
    <Text style={styles.subtitle}>*Doenças:  Difteria, Tétano e Coqueluche</Text>
    <Text>Sintomas:Coqueluche pode causar tosse grave e prolongada, falta de ar, vômito após tossir e fadiga.
       Os sintomas de difteria e tétano foram mencionados anteriormente.</Text>
    <Text style={styles.subtitle}>Esquema de vacinação:</Text>
    <Text style={styles.text}>A vacina dTpa é recomendada para profissionais de saúde, parteiras tradicionais,
     estagiários da área de saúde e outras populações de alto risco. Disponível em clínicas privadas de vacinação e, 
    em alguns casos, em unidades básicas de saúde, mediante prescrição médica.
</Text>
  </ScrollView>
);
const HerpesZosterScreen = () => (
  <ScrollView>
    <Text style={styles.subtitle}>Herpes Zoster</Text>
    <Text style={styles.subtitle}>*Doença: Herpes Zoster</Text>
    <Text>Sintomas:* Erupção cutânea dolorosa que se desenvolve em um lado do corpo ou rosto, geralmente acompanhada de dor,
       coceira, formigamento ou sensibilidade.
       Pode ser precedido por dor de cabeça, febre e mal-estar.</Text>
    <Text style={styles.subtitle}>Esquema de vacinação:</Text>
    <Text style={styles.text}>A vacina contra o Herpes Zóster (VZR) é administrada em duas doses com um intervalo de dois meses.
     Geralmente disponível em clínicas privadas de vacinação.
</Text>
  </ScrollView>
);
const scrscreen = () => (
  <ScrollView>
    <Text style={styles.subtitle}>Sarampo, Caxumba e Rubéola (SCR)</Text>
    <Text style={styles.subtitle}>*Doenças:* Sarampo, Caxumba e Rubéola (SCR)</Text>
    <Text>Os sintomas variam para cada doença, mas podem incluir febre, erupção cutânea, tosse, coriza, 
      conjuntivite, inchaço das glândulas salivares (em caso de caxumba), entre outros.</Text>
    <Text style={styles.subtitle}>Esquema de vacinação:</Text>
    <Text style={styles.text}>A vacina tríplice viral (SCR) é indicada em situações de risco aumentado e geralmente é
     administrada em uma dose. Disponível principalmente em clínicas privadas de vacinação, 
    dependendo do risco epidemiológico e da situação individual de suscetibilidade.
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
    <Text style={styles.subtitle}>Vírus Sincicial Respiratório </Text>
    <Text style={styles.text}>Doenças:Infecções respiratórias, especialmente em bebês e crianças pequenas.
     O VSR é uma causa comum de bronquiolite e pneumonia em bebês.</Text>
     <Text style={styles.subtitle}>Esquema de vacinação</Text>
    <Text>Atualmente, não há vacina disponível contra o Vírus Sincicial Respiratório (VSR).
       O tratamento geralmente se concentra no alívio dos sintomas. </Text>

    
  </ScrollView>
);

const VacinaDuplaBacterianaScreen = () => (
  <ScrollView>
    <Text style={styles.subtitle}>Vírus Sincicial Respiratório </Text>
    <Text style={styles.subtitle}>Doenças:* Difteria e Tétano.</Text>
    <Text style={styles.subtitle}>Esquema de vacinação</Text>
    <Text>A difteria pode causar sintomas como dor de garganta, febre, glândulas inchadas no pescoço e formação de uma membrana
       grossa e cinza na garganta e nas amígdalas.
       O tétano pode causar rigidez muscular e espasmos, geralmente começando na mandíbula e pescoço. </Text>
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
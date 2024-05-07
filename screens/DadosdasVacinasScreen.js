import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';



const DadosdasVacinasScreen = () => {
  // Dados das vacinas
  
  const vacinas = [
    {
      quandoIndicar: 'Rotina',
      idadeGrupo: 'Idoso',
      vacina: '(high dose, HD4V)',
      protecaoContra: 'Influenza',
      numeroDoses: 'dose única',
      intervaloDoses: 'dose única',
      disponibilidadeUBS: 'sim',
      disponibilidadePrivado: 'sim',
    },
    {
      quandoIndicar: 'Rotina',
      idadeGrupo: 'Idoso',
      vacina: 'Pneumocócicas conjugada',
      protecaoContra: '(Pneumonia Meningite e Otite)',
      numeroDoses: '3 doses',
      intervaloDoses: 'não',
      disponibilidadeUBS: 'sim',
      disponibilidadePrivado: 'sim',
    },
    {
      quandoIndicar: 'Rotina',
      idadeGrupo: 'Idoso',
      vacina: 'Hepatite B recombinante)',
      protecaoContra: 'Hepatite B',
      numeroDoses: '3 doses',
      intervaloDoses: 'não',
      disponibilidadeUBS: 'sim',
      disponibilidadePrivado: 'sim',
    },
    {
      quandoIndicar:'Para idosos não vacinados previamente.',
      idadeGrupo:'Idoso',
      vacina: 'VFA (atenuada))',
      protecaoContra: 'Febre Amarela',
      numeroDoses: 'Dose única',
      intervaloDoses: 'Dose única',
      disponibilidadeUBS: 'sim',
      disponibilidadePrivado: 'sim',
    },


{
      quandoIndicar:'Rotina',
      idadeGrupo:'Idoso' ,
      vacina: 'Tríplice viral) )',
      protecaoContra: 'Sarampo, Caxumba e Rubéola',
      numeroDoses: '2 doses (20 a 29 anos) - Uma dose (30 a 59 anos) (verificar situação vacinal anterior)',
      intervaloDoses: '30 dias (Se duas doses',
      disponibilidadeUBS: 'sim',
      disponibilidadePrivado: 'sim',
    },


{
      quandoIndicar:'Se não vacinado aos 50, a qualquer momento.',
      idadeGrupo:'Herpes zóster',
      vacina: 'Vacina inativada (VZR)',
      protecaoContra: 'Herpes zóster',
      numeroDoses: 'duas doses',
      intervaloDoses: 'dois meses',
      disponibilidadeUBS: 'não',
      disponibilidadePrivado: 'sim',
    },
    {
      quandoIndicar: 'Rotina',
      idadeGrupo: 'Adulto',
      vacina: 'Difteria e Tétano (dT))',
      protecaoContra: 'Difteria e Tétano',
      numeroDoses: 'Iniciar ou completar 3 doses,de acordo com histórico vacinal',
      intervaloDoses: '60 dias',
      disponibilidadeUBS: 'sim',
      disponibilidadePrivado: 'sim',
    },
    {
      quandoIndicar:'Pessoas vítimas de violência sexual',
      idadeGrupo:'idoso',
      vacina: 'HPV4 - recombinante',
      protecaoContra: 'Papilomavírus Humano',
      numeroDoses: '3 doses',
      intervaloDoses: 'null',
      disponibilidadeUBS: 'sim',
      disponibilidadePrivado: 'sim',
    },
{
      quandoIndicar:'idosos com 60 anos ou mais',
      idadeGrupo:'idoso',
      vacina: 'Vírus Sincicial Respiratório (Arexvy)',
      protecaoContra: 'vírus sincicial respiratório (VSR)',
      numeroDoses: 'uma dose',
      intervaloDoses: null,
      disponibilidadeUBS: 'sim',
      disponibilidadePrivado: 'sim',
    }



    // Adicione mais vacinas conforme necessário
  ];

  return (
    <ScrollView>
      {vacinas.map((vacina, index) => (
        <Card key={index} containerStyle={styles.card}>
           <View style={styles.row}>
            <Text style={styles.label}>VACINA:</Text>
            <Text style={styles.text}>{vacina.vacina}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>PROTEÇÃO CONTRA:</Text>
            <Text style={styles.text}>{vacina.protecaoContra}</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>QUANDO INDICAR:</Text>
            <Text style={styles.text}>{vacina.quandoIndicar}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>IDADE RECOMENDADA ou GRUPO:</Text>
            <Text style={styles.text}>{vacina.idadeGrupo}</Text>
          </View>
          
          <View style={styles.row}>
            <Text style={styles.label}>NÚMERO DE DOSES:</Text>
            <Text style={styles.text}>{vacina.numeroDoses}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>INTERVALO ENTRE AS DOSES:</Text>
            <Text style={styles.text}>{vacina.intervaloDoses}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Disponibilidade UBS:</Text>
            <Text style={styles.text}>{vacina.disponibilidadeUBS}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Disponibilidade Privado:</Text>
            <Text style={styles.text}>{vacina.disponibilidadePrivado}</Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  text: {
    flex: 1,
  },
});

export default DadosdasVacinasScreen;
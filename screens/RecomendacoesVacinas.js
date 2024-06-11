import React, { useEffect, useState } from "react";
import { View, Text,  ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const RecomendacoesDeVacinas = () => {
  const [recomendacoes, setRecomendacoes] = useState([]);

  useEffect(() => {
    const obterRecomendacoes = async () => {
      const usuario = JSON.parse(await AsyncStorage.getItem("usuario"));
      if (usuario) {
        const { profissao, condicoesEspeciais } = usuario;
        const vacinas = calcularRecomendacoes(profissao, condicoesEspeciais);
        setRecomendacoes(vacinas);
      }
    };
    obterRecomendacoes();
  }, []);

  const calcularRecomendacoes = (profissao, condicoesEspeciais) => {
    let vacinas = [];

    // Lógica para calcular recomendações baseado na profissão
    switch (profissao.toLowerCase()) {
      case "profissionais da saúde":
        vacinas.push(
          "Tríplice viral",
          "Hepatite A: duas doses, no esquema 0-6 meses.",
          "Hepatite B: três doses, no esquema 0-1-6 meses.",
          "Tríplice bacteriana acelular do tipo adulto (difteria, tétano e coqueluche) – dTpa",
          "Varicela (catapora)",
          "Influenza (gripe)",
          "Meningocócicas conjugadas ACWY ou C",
          "Meningocócica B"
        );
        break;

      case "ProfissionaisdeAlimentos":
        vacinas.push(
          "Hepatite A: duas doses, no esquema 0-6 meses.",
          "Dupla adulto (difteria e tétano) – dT",
          "Influenza (gripe)"
        );
        break;

      case "MilitaresPoliciaisBombeiros":
        vacinas.push(
          "Tríplice viral",
          "Hepatite A: duas doses, no esquema 0-6 meses.",
          "Hepatite B: três doses, no esquema 0-1-6 meses.",
          "Tríplice bacteriana acelular do tipo adulto (difteria, tétano e coqueluche) – dTpa",
          "Varicela (catapora)",
          "Influenza (gripe)",
          "Meningocócicas conjugadas ACWY ou C",
          "Meningocócica B",
          "Febre amarela (1, 2, 4)",
          "Raiva  Para pré-exposição: três doses, 0-7-21 a 28 dias",
          "Febre tifóide Dose única. No caso de o risco de infecção permanecer ou retornar, é indicada outra dose após três anos. "
        );
        break;
      case "ProfissionaisLimpeza":
        vacinas.push(
          "Hepatite A: duas doses, no esquema 0-6 meses.",
          "Hepatite B:(2) três doses, no esquema 0-1-6 meses",
          "Hepatite A e B: três doses, no esquema 0-1-6 meses. A vacina combinada é uma opção e pode substituir a vacinação isolada das hepatites A e B.",
          "Dupla adulto (difteria e tétano) – dT ",
          "influenza (gripe) ",
          "Febre tifóide"
        );
        break;
      case "CuidadoresdeCrianças":
        vacinas.push(
          "Tríplice viral",
          "Hepatite A: duas doses, no esquema 0-6 meses.",
          "tétano e coqueluche) – dTpa",
          "Varicela (catapora) (1) Para suscetíveis: duas doses com intervalo de um a dois meses.",
          "Influenza (gripe) (12)"
        );
        break;
      case "veterinarios":
        vacinas.push(
          "Dupla adulto (difteria e tétano) – dT",
          "Influenza (gripe)",
          "Raiva (7) Para pré-exposição: três doses, 0-7-21 a 28 dias"
        );
        break;
      case "Profissionaisdosexo":
        vacinas.push(
          "Tríplice viral",
          "Hepatite A: duas doses, no esquema 0-6 meses.",
          "Hepatite B:(2) três doses, no esquema 0-1-6 meses",
          "Hepatite A e B: três doses, no esquema 0-1-6 meses. A vacina combinada é uma opção e pode substituir a vacinação isolada das hepatites A e B.",
          "HPV",
          "Influenza (gripe)"
        );
        break;
      case "Profissionaisadministrativos":
        vacinas.push(
          "Influenza (gripe) (12) • Dose única anual. Em idosos, imunodeprimidos e em situação epidemiológica de risco, pode ser considerada uma segunda dose, a partir de 3 meses após a dose anual"
        );
        break;
      case "ProfissionaisqueViajam":
        vacinas.push(
          "Tríplice viral",
          "Hepatite A: duas doses, no esquema 0-6 meses.",
          "Hepatite B:(2) três doses, no esquema 0-1-6 meses",
          "Hepatite A e B: três doses, no esquema 0-1-6 meses. A vacina combinada é uma opção e pode substituir a vacinação isolada das hepatites A e B.",
          "Tríplice bacteriana acelular do tipo adulto (difteria, tétano e coqueluche) – dTpa ",
          "Varicela (catapora) ",
          "Influenza (gripe) : • Dose única anual. • Em idosos, imunodeprimidos e em situação epidemiológica de risco, pode ser considerada uma segunda dose, a partir de 3 meses após a dose anual. • Se a composição da vacina disponível for concordante com os vírus circulantes, poderá ser recomendada aos viajantes internacionais para o hemisfério norte e/ou brasileiros residentes nos estados do norte do país no período pré temporada de influenza",
          "Meningocócicas conjugadas ACWY ou C ",
          "Meningocócica B. ",
          "Febre amarela Recomendação do PNI: recebeu a primeira dose antes dos 5 anos de idade, indicada uma segunda dose. Se aplicada a partir dos 5 anos: dose única. Recomendação da SBIm: Duas doses. Como há possibilidade de falha vacinal, está recomendada uma segunda dose com intervalo de 10 anos. Essa vacina pode ser exigida para emissão do CIVP, atendendo exigências sanitárias de alguns destinos internacionais. Neste caso, deve ser aplicada até dez dias antes de viajar.",
          "Febre tifóide Dose única. No caso de o risco de infecção permanecer ou retornar, está indicada outra dose após três anos"
        );
        break;
      case "ReceptivosdeEstrangeiros":
        vacinas.push(
          "Tríplice viral (sarampo, caxumba e rubéola) ",
          "Hepatite A: duas doses, no esquema 0-6 meses.",
          "Varicela (catapora) (1) Para suscetíveis: duas doses com intervalo de um a dois meses.",
          "Influenza (gripe) (12) • Dose única anual. • Em idosos, imunodeprimidos e em situação epidemiológica de risco, pode ser considerada uma segunda dose, a partir de 3 meses após a dose anual. • Se a composição da vacina disponível for concordante com os vírus circulantes, poderá ser recomendada aos viajantes internacionais para o hemisfério norte e/ou brasileiros residentes nos estados do norte do país no período pré temporada de influenza."
        );
        break;
      case "ManicuresPedicuresPodologosTatuadores":
        vacinas.push(
          "Hepatite B:(2) três doses, no esquema 0-1-6 meses",
          "Dupla adulto (difteria e tétano) – dT (2)",
          "Influenza (gripe) (12) • Dose única anual. • Em idosos, imunodeprimidos e em situação epidemiológica de risco, pode ser considerada uma segunda dose, a partir de 3 meses após a dose anual. • Se a composição da vacina disponível for concordante com os vírus circulantes, poderá ser recomendada aos viajantes internacionais para o hemisfério norte e/ou brasileiros residentes nos estados do norte do país no período pré temporada de influenza."
        );
        break;
      case "ProfissionaisConfinamento":
        vacinas.push(
          "Tríplice viral",
          "Hepatite A: duas doses, no esquema 0-6 meses.",
          "Hepatite B:(2) três doses, no esquema 0-1-6 meses",
          "Hepatite A e B: três doses, no esquema 0-1-6 meses. A vacina combinada é uma opção e pode substituir a vacinação isolada das hepatites A e B.",
          "Tríplice bacteriana acelular do tipo adulto (difteria, tétano e coqueluche) – dTpa ",
          "Influenza (gripe) : • Dose única anual. • Em idosos, imunodeprimidos e em situação epidemiológica de risco, pode ser considerada uma segunda dose, a partir de 3 meses após a dose anual. • Se a composição da vacina disponível for concordante com os vírus circulantes, poderá ser recomendada aos viajantes internacionais para o hemisfério norte e/ou brasileiros residentes nos estados do norte do país no período pré temporada de influenza"
        );
        break;
      case "VoluntariosAjudaHumanitaria":
        vacinas.push(
          "Tríplice viral",
          "Hepatite A: duas doses, no esquema 0-6 meses.",
          "Hepatite B:(2) três doses, no esquema 0-1-6 meses",
          "Hepatite A e B: três doses, no esquema 0-1-6 meses. A vacina combinada é uma opção e pode substituir a vacinação isolada das hepatites A e B.",
          "Tríplice bacteriana acelular do tipo adulto (difteria, tétano e coqueluche) – dTpa ",
          "Varicela (catapora) ",
          "Influenza (gripe) : • Dose única anual. • Em idosos, imunodeprimidos e em situação epidemiológica de risco, pode ser considerada uma segunda dose, a partir de 3 meses após a dose anual. • Se a composição da vacina disponível for concordante com os vírus circulantes, poderá ser recomendada aos viajantes internacionais para o hemisfério norte e/ou brasileiros residentes nos estados do norte do país no período pré temporada de influenza",
          "Meningocócicas conjugadas ACWY ou C ",
          "Meningocócica B. ",
          "Febre amarela (1, 2, 4) Recomendação do PNI: recebeu a primeira dose antes dos 5 anos de idade, indicada uma segunda dose. Se aplicada a partir dos 5 anos: dose única. Recomendação da SBIm: Duas doses. Como há possibilidade de falha vacinal, está recomendada uma segunda dose com intervalo de 10 anos. Essa vacina pode ser exigida para emissão do CIVP, atendendo exigências sanitárias de alguns destinos internacionais. Neste caso, deve ser aplicada até dez dias antes de viajar.",
          "Raiva (7) Para pré-exposição: três doses, 0-7-21 a 28 dias.",
          "Febre tifoide Dose única. No caso de o risco de infecção permanecer ou retornar, está indicada outra dose após três anos"
        );
        break;
      case "Atletas":
        vacinas.push(
          "Tríplice viral",
          "Hepatite A: duas doses, no esquema 0-6 meses.",
          "Hepatite B:(2) três doses, no esquema 0-1-6 meses",
          "Hepatite A e B: três doses, no esquema 0-1-6 meses. A vacina combinada é uma opção e pode substituir a vacinação isolada das hepatites A e B.",
          "Tríplice bacteriana acelular do tipo adulto (difteria, tétano e coqueluche) – dTpa ",
          "Varicela (catapora)",
          "Influenza (gripe) : • Dose única anual. • Em idosos, imunodeprimidos e em situação epidemiológica de risco, pode ser considerada uma segunda dose, a partir de 3 meses após a dose anual. • Se a composição da vacina disponível for concordante com os vírus circulantes, poderá ser recomendada aos viajantes internacionais para o hemisfério norte e/ou brasileiros residentes nos estados do norte do país no período pré temporada de influenza",
          "Meningocócicas conjugadas ACWY ou C ",
          "Meningocócica B. ",
          "Febre amarela (1, 2, 4) Recomendação do PNI: recebeu a primeira dose antes dos 5 anos de idade, indicada uma segunda dose. Se aplicada a partir dos 5 anos: dose única. Recomendação da SBIm: Duas doses. Como há possibilidade de falha vacinal, está recomendada uma segunda dose com intervalo de 10 anos. Essa vacina pode ser exigida para emissão do CIVP, atendendo exigências sanitárias de alguns destinos internacionais. Neste caso, deve ser aplicada até dez dias antes de viajar.",
          "Raiva (7) Para pré-exposição: três doses, 0-7-21 a 28 dias.",
          "Febre tifóide Dose única. No caso de o risco de infecção permanecer ou retornar, está indicada outra dose após três anos."
        );
        break;
      case "Cuidadores":
        vacinas.push(
          "Tríplice viral",
          "Hepatite A: duas doses, no esquema 0-6 meses.",
          "Hepatite B:(2) três doses, no esquema 0-1-6 meses",
          "Tríplice bacteriana acelular do tipo adulto (difteria, tétano e coqueluche) – dTpa .",
          "Varicela (catapora) ",
          "Influenza (gripe) : • Dose única anual. • Em idosos, imunodeprimidos e em situação epidemiológica de risco, pode ser considerada uma segunda dose, a partir de 3 meses após a dose anual. • Se a composição da vacina disponível for concordante com os vírus circulantes, poderá ser recomendada aos viajantes internacionais para o hemisfério norte e/ou brasileiros residentes nos estados do norte do país no período pré temporada de influenza."
        );
        break;

      case "outra":
        vacinas.push(
          "Tríplice viral",
          "Hepatite A: duas doses, no esquema 0-6 meses.",
          "Hepatite B: três doses, no esquema 0-1-6 meses.",
          "Tríplice bacteriana acelular do tipo adulto (difteria, tétano e coqueluche) – dTpa",
          "Varicela (catapora)",
          "Influenza (gripe)",
          "Meningocócicas conjugadas ACWY ou C",
          "Meningocócica B"
        );
        break;

      // Adicione mais casos aqui para outras profissões
      // ...
    }

    // Lógica para calcular recomendações baseado nas condições especiais
    if (condicoesEspeciais.includes("imunodeprimido")) {
      vacinas.push(
        "Influenza (gripe) - Em idosos, imunodeprimidos e em situação epidemiológica de risco, pode ser considerada uma segunda dose."
      );
    }
    // Adicione mais condições especiais aqui
    // ...

    return vacinas;
  };

  return (
    <ScrollView>
      <View>
        {recomendacoes.length > 0 ? (
          recomendacoes.map((vacina, index) => (
            <Text key={index}>{vacina}</Text>
          ))
        ) : (
          <Text>Carregando recomendações...</Text>
        )}
      </View>
    </ScrollView>
  );
};

export default RecomendacoesDeVacinas;

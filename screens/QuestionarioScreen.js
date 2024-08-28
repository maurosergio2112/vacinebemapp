import React, { useState, useEffect } from "react";
import { View, Text, Switch, Button, StyleSheet, ScrollView } from "react-native";
import { Formik, Field } from "formik";
import * as yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome5 } from '@expo/vector-icons'; // Biblioteca de ícones

const schema = yup.object().shape({
  tetravalente: yup.boolean(),
  pneumococica: yup.boolean(),
  hepatiteB: yup.boolean(),
  febreAmarela: yup.boolean(),
  hpv4: yup.boolean(),
  tripliceviral: yup.boolean(),
  vzr: yup.boolean(),
  vacinaVSR: yup.boolean(),
  vacinaDuplaBacteriana: yup.boolean(),
});

const QuestionarioScreen = ({ navigation }) => {
  const [respostasQuestionario, setRespostasQuestionario] = useState(null);

  const initialValues = {
    tetravalente: false,
    pneumococica: false,
    hepatiteB: false,
    febreAmarela: false,
    hpv4: false,
    vacinaVSR: false,
    vacinaDuplaBacteriana: false,
  };

  const handleSubmit = async (values) => {
    try {
      await AsyncStorage.setItem(
        "respostasQuestionario",
        JSON.stringify(values)
      );
      console.log("Respostas do questionário salvas com sucesso:", values);
    } catch (error) {
      console.error("Erro ao salvar as respostas do questionário:", error);
    }
  };

  useEffect(() => {
    const getRespostasQuestionario = async () => {
      try {
        const respostas = await AsyncStorage.getItem("respostasQuestionario");
        if (respostas !== null) {
          setRespostasQuestionario(JSON.parse(respostas));
        }
      } catch (error) {
        console.error("Erro ao recuperar as respostas do questionário:", error);
      }
    };

    getRespostasQuestionario();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro de Vacinas</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <View>
            <Field name="tetravalente" component={CheckBox} label="Registrar vacina Tetravalente?" icon="syringe" />
            <Field name="pneumococica" component={CheckBox} label="Registrar vacina Pneumocócica?" icon="syringe" />
            <Field name="hepatiteB" component={CheckBox} label="Registrar vacina Hepatite B?" icon="syringe" />
            <Field name="febreAmarela" component={CheckBox} label="Registrar vacina Febre Amarela?" icon="syringe" />
            <Field name="hpv4" component={CheckBox} label="Registrar vacina HPV (Quadrivalente)?" icon="syringe" />
            <Field name="tripliceviral" component={CheckBox} label="Registrar vacina Tríplice Viral?" icon="syringe" />
            <Field name="vzr" component={CheckBox} label="Registrar vacina Varicela (VZR)?" icon="syringe" />
            <Field name="vacinaVSR" component={CheckBox} label="Registrar vacina VSR?" icon="syringe" />
            <Field name="vacinaDuplaBacteriana" component={CheckBox} label="Registrar vacina Dupla Bacteriana?" icon="syringe" />
            <Button title="Salvar Respostas" onPress={handleSubmit} color="#2196F3" />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const CheckBox = ({ field, form, label, icon, ...props }) => (
  <View style={styles.checkboxContainer}>
    <FontAwesome5 name={icon} size={24} color="#555" style={styles.icon} />
    <Text style={styles.label}>{label}</Text>
    <Switch
      value={field.value}
      onValueChange={(newValue) => form.setFieldValue(field.name, newValue)}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  label: {
    flex: 1,
    fontSize: 18,
    color: "#555",
  },
});

export default QuestionarioScreen;

import React, { useState, useEffect } from "react";
import { View, Text, Switch, Button } from "react-native";
import { Formik, Field } from "formik";
import * as yup from "yup";
import AsyncStorage from "@react-native-async-storage/async-storage";



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
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Selecione quais Vacinas deseja fazer registro</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <View>
            <Field name="tetravalente" component={CheckBox} />
            <Field name="pneumococica" component={CheckBox} />
            <Field name="hepatiteB" component={CheckBox} />
            <Field name="febreAmarela" component={CheckBox} />
            <Field name="hpv4" component={CheckBox} />
            <Field name="vzr" component={CheckBox} />
            <Field name="tripliceviral" component={CheckBox} />
            <Field name="vacinaVSR" component={CheckBox} />
            <Field name="vacinaDuplaBacteriana" component={CheckBox} />
            <Button title="Salvar Respostas" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

const CheckBox = ({ field, form, ...props }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <Text>{field.name}</Text>
    <Switch
      value={field.value}
      onValueChange={(newValue) => form.setFieldValue(field.name, newValue)}
    />
  </View>
);

export default QuestionarioScreen;
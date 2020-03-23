import React from "react"
import { Formik, Form, FieldArray, useField } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import { Heading, Button, CheckBox, TextInput, Box } from "grommet"
import Layout from "../components/layout.js"
import SEO from "../components/seo"
import { MaxWidth, ErrorMessage } from "../components/util"

const subjectAreaOptions = ["Informatik", "Mathematik"]
const studyPhaseOptions = ["Brückenkurs", "Bachelor", "Master"]

const Label = ({ children }) => {
  return (
    <Heading size="small" margin={{ bottom: "18px", top: "40px" }}>
      {children}
    </Heading>
  )
}

const InputWrapper = styled.div`
  padding-left: 80px;
`

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <>
      <Label>{label}</Label>
      <InputWrapper>
        <TextInput x {...field} {...props} />

        {meta.touched && meta.error ? (
          <ErrorMessage>{meta.error}</ErrorMessage>
        ) : null}
      </InputWrapper>
    </>
  )
}

const MyMultiSelect = ({ label, options, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <>
      <FieldArray
        name={props.name}
        render={arrayHelpers => (
          <>
            <Label size="small">{label}</Label>
            <InputWrapper>
              {options.map(option => (
                <CheckBox
                  label={option}
                  value={option}
                  checked={field.value.includes(option)}
                  onChange={e => {
                    if (e.target.checked) arrayHelpers.push(option)
                    else {
                      const idx = field.value.indexOf(option)
                      arrayHelpers.remove(idx)
                    }
                  }}
                />
              ))}
            </InputWrapper>
          </>
        )}
      />
      {meta.touched && meta.error ? (
        <ErrorMessage>{meta.error}</ErrorMessage>
      ) : null}
    </>
  )
}

const MainDataForm = ({ setMainData }) => {
  return (
    <Formik
      initialValues={{
        title: "",
        subjectAreas: [],
        link: "http://test.de",
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string()
          .min(3, "Der Titel muss wenigstens drei Zeichen lang sein.")
          .required("Der Titel muss angegeben werden."),
        subjectAreas: Yup.array()
          .of(Yup.mixed().oneOf(subjectAreaOptions))
          .min(1, "Es muss mindestens ein Fachgebiet ausgewählt werden.")
          .required("Das Fachgebiet muss angegeben werden"),
        link: Yup.string()
          .url("Link muss eine gültige URL sein")
          .required("Der Link muss angegeben werden"),
      })}
      onSubmit={values => {
        console.log(values)
        setMainData(values)
      }}
    >
      <Form>
        <MyTextInput
          name="title"
          label="Der Titel des Inhalts ist:"
          required={true}
        />
        <MyMultiSelect
          name="subjectAreas"
          label="Das Fachgebiet des Inhalts ist:"
          options={subjectAreaOptions}
        />
        <MyTextInput
          name="link"
          label="Der Link zum Inhalt ist:"
          required={true}
        />
        <Button type="submit" label="Detailangaben" primary={true} />
      </Form>
    </Formik>
  )
}

const DetailDataForm = ({ mainData }) => {
  return (
    <Formik
      initialValues={{
        studyPhases: [],
      }}
      validationSchema={Yup.object().shape({
        studyPhases: Yup.array()
          .of(Yup.mixed().oneOf(studyPhaseOptions))
          .min(1, "Es muss mindestens eine Studienphase ausgewählt werden.")
          .required("Die Studienphase muss angegeben werden"),
      })}
      onSubmit={values => {
        const result = Object.assign(mainData, values)
        console.log(result)
      }}
    >
      <Form>
        <MyMultiSelect
          name="studyPhases"
          label="Studienphase"
          options={studyPhaseOptions}
        />
        <Button type="submit" label="Einreichen" primary={true} />
      </Form>
    </Formik>
  )
}

const Suggest = () => {
  const [mainData, setMainData] = React.useState(null)

  return (
    <Layout>
      <SEO title="Inhalt vorschlagen" />
      <Box align="center">
        <MaxWidth
          maxWidth={900}
          pad="medium"
          direction="column"
          justify="start"
          background="white"
          style={{ borderRadius: 6 }}
          margin={{ top: "-40px" }}
        >
          <Heading margin={{ bottom: "30px" }}>Lernangebot Vorschlagen</Heading>

          {mainData === null ? (
            <MainDataForm setMainData={setMainData} />
          ) : (
            <DetailDataForm mainData={mainData} />
          )}
        </MaxWidth>
      </Box>
    </Layout>
  )
}

export default Suggest

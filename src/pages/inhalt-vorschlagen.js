import React from "react"
import { Formik, Form, FieldArray, useField } from "formik"
import * as Yup from "yup"
import {
  Heading,
  Button,
  CheckBox,
  TextInput,
  FormField,
  RadioButtonGroup,
  Select,
} from "grommet"
import Layout from "../components/layout.js"
import SEO from "../components/seo"

const subjectAreaOptions = ["Informatik", "Mathematik"]

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  return (
    <>
      <FormField label={label}>
        <TextInput x {...field} {...props} />
      </FormField>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

const MyMultiSelect = ({ label, options, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props)
  console.log(field)
  return (
    <>
      <FieldArray
        name={props.name}
        render={arrayHelpers => (
          <FormField label={label}>
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
          </FormField>
        )}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  )
}

const Suggest = () => {
  return (
    <Layout>
      <SEO title="Inhalt vorschlagen" />
      <Heading>Inhalt vorschlagen</Heading>
      <Formik
        initialValues={{
          title: "",
          subjectAreas: [],
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
        onSubmit={(values, { setSubmitting }) => {
          console.log(values)
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
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
          <Button type="submit" label="Vorschlagen" primary={true} />
        </Form>
      </Formik>
    </Layout>
  )
}

export default Suggest

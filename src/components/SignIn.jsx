import Text from './Text';
import {View, Pressable, StyleSheet} from "react-native"
import FormikTextInput from './FormikTextInput';
import {Formik} from "formik"
import * as yup from "yup"
import theme from '../theme';

const initialValues = {
  username: "",
  password: "",
}

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required").min(6, "Must be at least 6 characters long"),
  password: yup.string().required("Password is required")
})

const styles = StyleSheet.create({
  outer: {
    backgroundColor: theme.colors.backgroundGray
  },
  inner: {
    backgroundColor: theme.colors.backgroundWhite,
    flexDirection: "column",
    // alignItems: "flex-start",
    paddingVertical: 15,
    paddingHorizontal: 15,
    
  },
  button: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.backgroundWhite,
    fontWeight: theme.fontWeights.bold,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 10,
    textAlign: "center"
  }
})

const SignInForm = ({onSubmit}) => {
  return (
    <View style={styles.outer}>
      <View style={styles.inner}>
        <FormikTextInput name={"username"} placeholder={"Username"} />
        <FormikTextInput name={"password"} placeholder={"Password"} secureTextEntry />
        <Pressable onPress={onSubmit}>
          <Text style={styles.button}>Sign In</Text>
        </Pressable>
      </View>
    </View>
  )
}

const SignIn = () => {
  const onSubmit = (values) => {
    if (isNaN(values.username) && isNaN(values.password)) {
      console.log(values)
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;
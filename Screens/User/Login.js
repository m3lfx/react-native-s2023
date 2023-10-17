import Input from "../../Shared/Form/Input";
import React, {useState} from "react";
import {View, Text, StyleSheet } from 'react-native'
import FormContainer from "../../Shared/Form/FormContainer";
import { Button } from "native-base";

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")

    const handleSubmit = () => {
        const user = {
          email,
          password,
        };
    
        if (email === "" || password === "") {
          setError("Please fill in your credentials");
        } else {
        //   loginUser(user, context.dispatch);
        console.log("error")
        }
      };

    return (
       <FormContainer>
            <Input 
                placeholder={"Enter email"}
                name={"email"}
                id={"email"}
                value={email}
                onChangeText={(text) => setEmail(text.toLowerCase())}
            />
            <Input 
                placeholder={"Enter Password"}
                name={"password"}
                id={"password"}
                secureTextEntry={true}
                value={password}
                onChangeText={(text)=> setPassword(text)}
            />
            <View style={styles.buttonGroup}>
                <Button variant={"ghost"}>Login</Button>
            </View>
            <View style={[{marginTop:40} ,styles.buttonGroup]}>
                <Text style={styles.middleText}>Dont' Have an Account yet?</Text>
                <Button  variant={"ghost"} onPress={() => props.navigation.navigate("Register")} > Register</Button>
            </View>
       </FormContainer>
    )
}
const styles = StyleSheet.create({
    buttonGroup: {
      width: "80%",
      alignItems: "center",
    },
    middleText: {
      marginBottom: 20,
      alignSelf: "center",
    },
  });
export default Login;
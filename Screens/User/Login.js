import Input from "../../Shared/Form/Input";
import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native'
import FormContainer from "../../Shared/Form/FormContainer";
import { Button } from "native-base";
import Error from "../../Shared/Error";
import AuthGlobal from '../../Context/Store/AuthGlobal'
import { loginUser } from '../../Context/Actions/Auth.actions'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import EasyButton from "../../Shared/StyledComponents/EasyButton";

const Login = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")
    const context = useContext(AuthGlobal)
    const navigation = useNavigation()
    useEffect(() => {
        if (context.stateUser.isAuthenticated === true) {
            navigation.navigate("User Profile")
        }
    }, [context.stateUser.isAuthenticated])
    const handleSubmit = () => {
        const user = {
            email,
            password,
        };

        if (email === "" || password === "") {
            setError("Please fill in your credentials");
        } else {
            loginUser(user, context.dispatch);
            // console.log("error")
        }
    };

    AsyncStorage.getAllKeys((err, keys) => {
        AsyncStorage.multiGet(keys, (error, stores) => {
            stores.map((result, i, store) => {
                console.log({ [store[i][0]]: store[i][1] });
                return true;
            });
        });
    });

    return (
        <FormContainer >
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
                onChangeText={(text) => setPassword(text)}
            />
            <View style={styles.buttonGroup}>
                {error ? <Error message={error} /> : null}
                <EasyButton
                    large
                    primary
                    onPress={() => handleSubmit()}
                ><Text style={{ color: "white" }}>Login</Text>
                </EasyButton>
                {/* <Button variant={"ghost"} onPress={() => handleSubmit()}>Login</Button> */}
            </View>
            <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
                <Text style={styles.middleText}>Dont' Have an Account yet?</Text>
                <EasyButton
                    large
                    secondary
                    onPress={() => navigation.navigate("Register")}
                >
                    <Text style={{ color: "white" }}>Register</Text>
                </EasyButton>
                {/* <Button variant={"ghost"} onPress={() => props.navigation.navigate("Register")} > Register</Button> */}
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
import React, {useContext} from 'react';
import { View, TouchableHighlight } from 'react-native';
import { TextInput, Text } from 'react-native-paper'
import StudentLoginStyles from './StudentLoginStyles';
import { AuthContext } from '../../Context/authenticationContext';

const StudentLogin = (props) => {

  const [emailInput, updateEmailInput] = React.useState("");
  const [passwordInput, updatePasswordInput] = React.useState("")

  const {login} = useContext(AuthContext)

  return (
    <View style={StudentLoginStyles.bgContainer}>
      <Text variant='headlineSmall'>Login</Text>
      <View style={StudentLoginStyles.formContainer}>
        <Text variant="titleMedium" style={StudentLoginStyles.formLabel}>Email</Text>
        <TextInput style={StudentLoginStyles.userTextInput} mode='outlined' label="Enter your Email" value={emailInput} onChangeText={text => updateEmailInput(text)} />
        <Text variant="titleMedium" style={StudentLoginStyles.formLabel}>Password</Text>
        <TextInput style={StudentLoginStyles.userTextInput} mode='outlined' label="Enter your Password" secureTextEntry value={passwordInput} onChangeText={text => updatePasswordInput(text)} />
        <TouchableHighlight style={StudentLoginStyles.button} mode="contained" onPress={() => {login("Student")}}>
          <Text style={StudentLoginStyles.buttonText} >Submit</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

export default StudentLogin
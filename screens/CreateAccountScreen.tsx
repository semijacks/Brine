import { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { BackSVG, EmailLogo, Eye, PhoneLogo, Create } from '../assets/images';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateAccount'>;

export default function CreateAccountScreen({ navigation }: Props) {
  const [checked, onChange] = useState(false);

  function onCheckmarkPress() {
    onChange(!checked);
  }
  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.backButton}>
          <BackSVG style={styles.backSVG} />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.headerText}>Create a brine account</Text>
      <View style={styles.input}>
        <EmailLogo />
        <TextInput
          style={styles.textBox}
          placeholder='Email address'
          keyboardType='default'
        />
      </View>
      <View style={styles.input}>
        <PhoneLogo />
        <TextInput
          style={styles.textBox}
          placeholder='Mobile number'
          keyboardType='number-pad'
        />
      </View>
      <View style={styles.passwordInput}>
        <TextInput
          style={styles.passwordInputTextBox}
          placeholder='Password'
          keyboardType='default'
        />
        <TouchableOpacity>
          <Eye />
        </TouchableOpacity>
      </View>
      <View style={styles.passwordInput}>
        <TextInput
          style={styles.passwordInputTextBox}
          placeholder='Confirm password'
          keyboardType='default'
        />
        <TouchableOpacity>
          <Eye />
        </TouchableOpacity>
      </View>
      <View style={styles.termsContainer}>
        <Pressable
          style={[styles.checkboxBase, checked && styles.checkboxChecked]}
          onPress={onCheckmarkPress}
        ></Pressable>
        <Text style={styles.termsText}>
          I agree to the terms and conditions
        </Text>
      </View>
      <TouchableOpacity
        style={styles.createButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Create />
        <Text style={styles.createButtonText}>Create account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    paddingTop: 50,
    minHeight: '100%',
    paddingHorizontal: '5%',
  },
  navigation: {
    flexDirection: 'row',
    padding: 0,
    minWidth: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 67,
  },
  backButton: {
    flexDirection: 'row',
    marginRight: 300,
    alignItems: 'center',
  },
  backSVG: {
    marginRight: 10,
  },
  backText: {
    fontFamily: 'Muller',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
  },
  loginText: {
    fontFamily: 'Muller',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
  },
  headerText: {
    fontFamily: 'MullerBold',
    fontStyle: 'normal',
    fontWeight: '900',
    fontSize: 20.8,
    lineHeight: 28,
    color: '#085017',
    marginBottom: 20,
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(29, 11, 4, 0.43)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  textBox: {
    flex: 1,
    marginLeft: 10,
    fontFamily: 'Muller',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: '#070D03',
  },
  passwordInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(29, 11, 4, 0.43)',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 20,
  },
  passwordInputTextBox: {
    flex: 1,
    fontFamily: 'Muller',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: '#070D03',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 55,
    marginBottom: 28,
  },
  termsText: {
    marginLeft: 10,
    fontFamily: 'Muller',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 19,
    color: '#231F20',
    textDecorationLine: 'underline',
  },
  createButton: {
    height: 48,
    backgroundColor: '#0B8224',
    borderRadius: 9,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButtonText: {
    color: '#FDFFFD',
    marginLeft: 10,
    fontFamily: 'MullerBold',
    fontWeight: '900',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 21,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'coral',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: 'coral',
  },
});

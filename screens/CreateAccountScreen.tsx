import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { BackSVG } from '../assets/images';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateAccount'>;

export default function CreateAccountScreen({ navigation }: Props) {
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    minHeight: '100%',
    paddingHorizontal: '5%',
  },
  navigation: {
    flexDirection: 'row',
    padding: 0,
    minWidth: '100%',
    alignItems: 'center',
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
});

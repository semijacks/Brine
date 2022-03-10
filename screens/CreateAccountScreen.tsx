import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { RootStackParamList } from '../App';

type Props = NativeStackScreenProps<RootStackParamList, 'CreateAccount'>;

export default function CreateAccountScreen({ navigation }: Props) {
  let [fontsLoaded] = useFonts({
    Muller: require('../assets/fonts/Muller-Trial-Regular.otf'),
    ModernAntiqua: require('../assets/fonts/ModernAntiqua_Regular.otf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text textBreakStrategy='simple'>Create Account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 90,
    minHeight: '100%',
  },
});

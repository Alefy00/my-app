import { View, Image,TouchableOpacity, Text } from 'react-native';
import { styles } from './LogoStyle';

const Logo = ({ navigation }) => {

  return (
    <View style={styles.container}>
    <Image
      source={require('../../assets/logo (3).png')} 
      style={styles.logo}
    />
    <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('AkaFrom')} >
      <Text style={styles.buttonText} >activate bat signal</Text>
    </TouchableOpacity>
  </View>
  );
}

export default Logo;
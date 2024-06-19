import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0', // Cor de fundo semelhante à da imagem
      },
      logo: {
        width: 200,
        height: 200,
        marginBottom: 50,
      },
      button: {
        backgroundColor: 'black',
        padding: 15,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
});
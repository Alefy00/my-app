import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

 
  },
  containerLogo:{
    justifyContent: "center",
    alignItems: "center",
    width:'35%',
    height:100,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor:'#fff',
    marginTop:25
 },
  logo:{
    height:70,
    width:70,
  }, 
  input:{
    height: 40,
    borderWidth: 2,
    padding: 10,
    borderRadius:5,
    marginBottom:25
  },
  containerForm:{
    margin: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    marginTop:25,
    justifyContent: "center",
    alignItems:"center",
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  inputText:{
    height:80
  }
});
import React, {useState} from 'react'; //importanto biblioteca react
import {Text, View, TextInput, Button} from 'react-native' //importanto a tag Text

export default ()=> {
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");

  return(

<View style={{backgroundColor: "#90e0ef", 
      flex: 1, 
      justifyContent: "center",
      alignItems:"center"}}>
  <Text style={{fontWeight: 'bold', fontSize: 30, fontFamily: "bernard mt", color: "#03045e"}}> CÁLCULO DE MÉDIA </Text>
  <Text> </Text>
  <Text style={{fontSize: 15, fontFamily: "berlin sans FB", color: "#03045e"}}> Informe a primeira nota </Text>
  <TextInput style={{width:200, borderWidth: 2, borderRadius: 7, borderColor: "#0077b6"}} value={nota1} onChangeText={setNota1}/>
  <Text> </Text>
  <Text style={{fontSize: 15, fontFamily: "berlin sans FB", color: "#03045e"}}> Informe a segunda nota </Text>
  <TextInput style={{width:200, borderWidth: 2, borderRadius: 7, borderColor: "#0077b6"}} value={nota2} onChangeText={setNota2}/>
  <Text> </Text>
  <Button color="#0077b6" title="Calcular" onPress={()=>{
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);

    const m = (n1+n2)/2;

    alert("Média:" + m)
  }}/>
</View>
  );
}
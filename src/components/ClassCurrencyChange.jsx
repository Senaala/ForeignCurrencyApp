import React, { Component } from 'react'
import { View } from 'react-native'
import { StyleSheet, TextInput ,Text} from 'react-native'


class ClassCurrencyChange extends Component {

//Constructor
constructor(props){
    super(props)
    //State
    this.state={
        usd:'',
        eur:'',
        try:'',
        inputData:'',
        data:'',
    }

    //Bind
}

//RENDER
  render() {

    const {currencyCss,inputCss,textCss}=styles

    //RETURN
    return (
        <View style={currencyCss}>
        <TextInput 
        style={inputCss} 
        placeholder='Lütfen EUR Birim Giriniz.' 
        onChange={(data)=>
                 {
                this.setState ({ 
                    inputData:data,
                })  
                 }} 
        value={this.state.inputData}
        />
        <Text style={textCss}> TRY:{this.state.try}</Text>    
        <Text style={textCss}> EUR:{this.state.eur}</Text>    
        <Text style={textCss}> USD:{this.state.usd}</Text>    
         </View>
    
     )
  }
}
//CSS
const styles = StyleSheet.create({
currencyCss:{paddingTop: -10,},
inputCss:{height: 28},
textCss:{   
 color: "blue",
 fontSize: 20,
 fontWeight: "bold",
 marginTop: 10
}
})

//EXPORT
export default  ClassCurrencyChange;
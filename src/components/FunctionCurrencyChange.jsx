import React, { Component, useState } from 'react'
import { View } from 'react-native'
import { StyleSheet, TextInput ,Text} from 'react-native'


function FunctionCurrencyChange() {

    const [tryCurrency,setTryCurrency]=useState(null);
    const [eurCurrency,setEurCurrency]=useState(null);
    const [usdCurrency,setUsdCurrency]=useState(null);
    const [inputData,setInputData]=useState(null);
    const {currencyCss,inputCss,textCss}=styles

    
    //RETURN
    return (
        <View style={currencyCss}>
        <TextInput 
        style={inputCss} 
        placeholder='Lütfen EUR Birim Giriniz.' 
        onChange={(data)=>
                 {

                    setInputData(data)
                  
                 }} 
        value={inputData}
        />
        <Text style={textCss}> TRY:{tryCurrency}</Text>    
        <Text style={textCss}> EUR:{eurCurrency}</Text>    
        <Text style={textCss}> USD:{usdCurrency}</Text>    
         </View>
    
     )
  
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
export default  FunctionCurrencyChange;
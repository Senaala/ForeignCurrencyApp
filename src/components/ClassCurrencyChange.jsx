import axios, { Axios } from 'axios'
import React, { Component } from 'react'
import { View } from 'react-native'
import { StyleSheet, TextInput ,Text} from 'react-native'
//////////////////////////////////////////////////////////////////////////////////////////////////////////
class ClassCurrencyChange extends Component {
//Constructor
constructor(props){
    super(props)
    //State
    this.state={
        usdCurrency:'',
        eurCurrency:'',
        tryCurrency:'',
        inputData:'',
        rates:[],
    }
    debugger;
    console.log('Constructor');
    //Bind objeyi burada bağlamak gerek
    this.getCurrencyRates=this.getCurrencyRates.bind(this);
}//Constructor End
///////////////////////////////////////////////////////////////////////////////////////////////
//Döviz Oranları
getCurrencyRates(){
    //fixer.io dan API aldım
    axios.get(`http://data.fixer.io/api/latest?access_key=143e20dd5755a596ccb86ff59fec1f12&symbols=EUR,USD,TRY`)
    .then((response)=>{
        console.log(response);
        const myRates=response.data.rates;
        //aynı isimse  setstatekey ve value aynı isimdeyse bir kere yazmak yeterli rates diye
        this.setState({rates:myRates}) 
        //this.setState({rates:myRates})
    })
    .catch((err)=>{console.error(err); })
     }//getCurrencyRates End
///////////////////////////////////////////////////////////////////////////////////////////////     
//CDM (API ile ilgili bir şey yapmak için )
componentDidMount = () => {
  console.log('Component did mount') // Bileşen monte edildi.
  this.getCurrencyRates();
  }//CDM End;
///////////////////////////////////////////////////////////////////////////////////////////////
//RENDER
  render() {

    const {currencyCss,inputCss,textCss}=styles
    const {tryCurrency,rates}=this.state
    //RETURN
    return (
        <View style={currencyCss}>
        <TextInput 
        style={inputCss} 
        placeholder='Lütfen EUR Birim Giriniz.' 
        keyboardType='numeric' //klavye sayılardan oluşsun
        onChangeText={(data)=>
                 {
                const changeFloatData=parseFloat(data)|| 0; // ||0 yazmazsam NaN veriyor. yazarsam aşağıya otomatik 0 yazıyor. 
                this.setState ({ 
                    tryCurrency:(changeFloatData*rates['TRY']).toFixed(4),// toFixed virgulden sonraki sayı miktarını belirler
                    usdCurrency:(changeFloatData*rates['USD']).toFixed(4),
                    eurCurrency:(changeFloatData*rates['EUR']).toFixed(4),
                    inputData:data,
                })  
                 }} 
        value={this.state.inputData}
        />
        <Text style={textCss}> TRY:{tryCurrency}</Text>    
        <Text style={textCss}> EUR:{this.state.eurCurrency}</Text>    
        <Text style={textCss}> USD:{this.state.usdCurrency}</Text>    
         </View>    
     )//Return End
  }//Render End
}//Class End
///////////////////////////////////////////////////////////////////////////////////////////////
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
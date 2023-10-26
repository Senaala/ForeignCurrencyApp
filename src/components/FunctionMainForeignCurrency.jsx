
import { StyleSheet, StatusBar,Text, View } from 'react-native';
import HeaderForeignCurrency from './HeaderForeignCurrency';
import FooterForeignCurrency from './FooterForeignCurrency';
import FunctionCurrencyChange from './FunctionCurrencyChange';

export default function FunctionMainForeignCurrency() {
  return (
    <View style={styles.container}>
      
      <HeaderForeignCurrency headerTextData='Currency  Data Change'/>
      
      <FunctionCurrencyChange />
      
      <FooterForeignCurrency footerTextData='@copy ; Tüm hakları saklıdır.'/> 
     
      <Text>Text Function Currency</Text>
      
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

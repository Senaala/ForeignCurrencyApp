import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function HeaderForeignCurrency() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>DÖVİZ UYGULAMASI</Text>
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
  headerText:{
    fontSize:18,
    textAlign:'center'
  }
});

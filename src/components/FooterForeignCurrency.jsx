import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function FooterForeignCurrency() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}> &copy; 2022- {new Date().getFullYear()} </Text>
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

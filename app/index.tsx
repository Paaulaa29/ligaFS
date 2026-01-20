import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Teams from './screens/Teams';


export default function Index() {
 return (
   <SafeAreaProvider>
     <SafeAreaView style={styles.safeArea}>
       <Teams />
     </SafeAreaView>
   </SafeAreaProvider>
 );
}


const styles = StyleSheet.create({
 safeArea: {
   flex: 1,
 },
});

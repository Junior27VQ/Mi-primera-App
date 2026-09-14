import { StyleSheet, Text, View } from 'react-native';
import EmployeeList from './src/components/EmployeeList';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CompanyHeader from './src/components/CompanyHeader';

export default function App() {
  return (
      <SafeAreaProvider>
        <StatusBar style= 'light' />
        <SafeAreaView style= {styles.safeArea}>
          <View style={styles.appContainer}>
            <CompanyHeader/>
            <EmployeeList/>
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#2196F3'
  },
  appContainer: {
    flex: 1,
    backgroundColor: '#ffffff'
  }
});
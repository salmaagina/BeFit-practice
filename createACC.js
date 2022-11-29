import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Username</Text>
      <Text style={styles.mainText}>Password</Text>
      <Text style={styles.mainText}>First Name</Text>
      <Text style={styles.mainText}>Last Name</Text>
      <Text style={styles.mainText}>Height</Text>
      <Text style={styles.mainText}>Weight</Text>
      <Text style={styles.mainText}>Age</Text>
      
      <Button
          title="Submit"
          color="#06D6A0"
          backgroundColor = "#06D6A0"
          accessibilityLabel="Learn more about this purple button"
      />

      <Button
          title="Learn More"
          color="#06D6A0"
          backgroundColor = "#06D6A0"
          accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText:{
    color: "#FFFFFF"
  }
});

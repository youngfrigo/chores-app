import { StyleSheet, Text, View } from 'react-native';

export default function ChoresScreen() {
  return (
    <View style={ styles.container }>
        <Text style={ styles.title }>
          Chores
        </Text>
        <Text style={ styles.heading }>
          No chores assigned
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 48,
    color: 'black'
  },
  heading: {
    fontSize: 32,
    color: 'green'
  }
})
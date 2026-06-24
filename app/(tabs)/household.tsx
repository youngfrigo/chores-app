import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function HouseholdScreen() {
    return (
        <View style={ styles.container }>
            <Text style= {styles.title}>Rent Boys</Text>
            <Text style= {styles.heading}>Alex</Text>
            <Text style= {styles.heading}>Ali</Text>
            <Text style= {styles.heading}>Tom</Text>
            <Link href='/chores' style={ styles.backToChoresLink }>Back to My Chores</Link>
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
    color: 'black',
    margin: 25,
    fontWeight: 'bold'
  },
  heading: {
    fontSize: 32,
    color: 'green'
  },
  backToChoresLink: {
    fontSize: 24,
    borderBottomWidth: 2,
  }
})
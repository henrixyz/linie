import { Stack, Tabs } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import { Link } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'


export default function Mensage() {
  return (
    <View style={styles.container}>

        <Link href={'../inMensage/conversas'} style={styles.card}>
        <MaterialIcons name="person" size={24} color="white" style={styles.image} />
        <TouchableOpacity >
        
        </TouchableOpacity>
        </Link>


        <Link href={'../inMensage/conversas'} style={styles.card}>
        <MaterialIcons name="person" size={24} color="white" style={styles.image} />
        <TouchableOpacity >
        </TouchableOpacity>
        </Link>

        <Link href={'../inMensage/conversas'} style={styles.card}>
        <MaterialIcons name="person" size={24} color="white" style={styles.image} />
        <TouchableOpacity >
        </TouchableOpacity>
        </Link>

        <Link href={'../inMensage/conversas'} style={styles.card}>
        <MaterialIcons name="person" size={24} color="white" style={styles.image} />
        <TouchableOpacity >
        </TouchableOpacity>
        </Link>

        <Link href={'../inMensage/conversas'} style={styles.card}>
        <MaterialIcons name="person" size={24} color="white" style={styles.image} />
        <TouchableOpacity >
        </TouchableOpacity>
        </Link>

        <Link href={'../inMensage/conversas'} style={styles.card}>
        <MaterialIcons name="person" size={24} color="white" style={styles.image} />
        <TouchableOpacity >
        </TouchableOpacity>
        </Link>

        <Link href={'../inMensage/conversas'} style={styles.card}>
        <MaterialIcons name="person" size={24} color="white" style={styles.image} />
        <TouchableOpacity >
        </TouchableOpacity>
        </Link>
    </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EDEDED',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: "90%",
    height: 70,
    backgroundColor: '#000',
    padding: 10,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    margin: 10,
    paddingTop: 10,
    fontSize: 30,
  },
  cardTextLeft: {
    width: 90,
    height: 50,
    paddingRight: 50,
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#dedede',
    color: 'white'
  }
  });
  
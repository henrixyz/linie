import { Stack, Tabs } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Mensage() {
  return (
    <View style={styles.container}>

        <Link href={'../inMensage/conversas'} style={styles.card}>
        <TouchableOpacity >
        <Text >pessoa 1</Text>
        </TouchableOpacity>
        </Link>


        <Link href={'../inMensage/conversas'}>
        <TouchableOpacity>
        <Text>pessoa 2</Text>
        </TouchableOpacity>
        </Link>
        <Link href={'../inMensage/conversas'}>
        <TouchableOpacity>
        <Text>pessoa 3</Text>
        </TouchableOpacity>
        </Link>
        <Link href={'../inMensage/conversas'}>
        <TouchableOpacity>
        <Text>pessoa 4</Text>
        </TouchableOpacity>
        </Link>
    </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    width: 350,
    height: 70,
    backgroundColor: '#000',
    padding: 20,
    margin: 10,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 120,
    paddingLeft: 20,
    height: 120,
    fontSize: 30,
  },
  cardTextLeft: {
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  cardTextRight: {
    fontSize: 30,
    paddingRight: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  });
  
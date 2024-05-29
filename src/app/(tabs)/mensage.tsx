import { Stack, Tabs } from 'expo-router';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import { Link } from 'expo-router';

export default function Mensage() {
  return (
    <View style={styles.container}>
        <Text>tela conversas</Text>
        

        <Link href={'../inMensage/conversas'}>
        <TouchableOpacity>
        <Text>pessoa 1</Text>
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
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
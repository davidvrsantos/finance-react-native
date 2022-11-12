import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Movements from '../../components/Movements';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Boleto conta luz',
    value: '390,90',
    date: '11/11/2022',
    type: 0 // despesas
  },
  {
    id: 2,
    label: 'Pix cliente X',
    value: '2.500,00',
    date: '10/11/2022',
    type: 1 // receitas
  },
  {
    id: 3,
    label: 'Salário',
    value: '7.500,00',
    date: '08/11/2022',
    type: 1 // receitas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Fulano da Silva" />
    
      <Balance saldo="9.250,90" gastos="-570,76" />

      <Actions />

      <Text style={styles.title}>
        últimas movimentações
      </Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id) }
        showsVerticalScrollIndicator={false}
        renderItem={ ({ item }) => <Movements data={item} /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';

import Shoes from '../../component/Shoes';

export default function Home() {
 const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
         <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
         />

         <View style={styles.textContainer}>
            <Text style={styles.text}>NERD MILENIUN</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>-</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>PRODUTOS</Text>
              <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
         </View>
       </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/1.png')} cost="R$39,90" onClick={()=> navigation.navigate('Details') }>
            ALMOFADAS
          </Shoes>
          <Shoes img={require('../../assets/2.png')} cost="R$89,90" onClick={()=> navigation.navigate('DetailsQuadros') }>
            QUADROS
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/3.png')} cost="R$160,90" onClick={()=> alert('CLICOU')}>
            POP FUNKO
          </Shoes>
          <Shoes img={require('../../assets/4.png')} cost="R$80,00" onClick={()=> alert('CLICOU')}>
           CANECAS
          </Shoes>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shoes img={require('../../assets/5.png')} cost="R$4 200,00" onClick={()=> alert('CLICOU')}>
            PLAY STATION
          </Shoes>
          <Shoes img={require('../../assets/6.png')} cost="R$50,00" onClick={()=> alert('CLICOU')}>
            MASCARAS
          </Shoes>
        </View>

      </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});
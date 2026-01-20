// Iconos FontAwesome del propio expo. No hace falta instalar
import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { FIRESTORE_DB } from '../../FirebaseConfig';
import { Team } from '../types';
    

// Definimos el tipo Props para el componente que recibe el Equipo
type Props = {
   item: Team;
};


// Recibe un props con item dentro.
// Podriamos poner any en vez de Props para evitar definir el tipo
// pero es mejor definirlo para autocompletado y evitar errores.


const TeamCard = ({ item }: Props) => {
   const { width } = useWindowDimensions();
   const ref = doc(FIRESTORE_DB, `teams/${item.id}`);
   // con la referencia al documento podemos actualizarlo o borrarlo
   const deleteTeam = async () => {
       deleteDoc(ref);
   };
   return (
       <View style={styles.card}>
           <Image source={{ uri: item.escudo }} style={styles.imagen} />
           <View style={styles.cardContent}>
               <View style={styles.row}>
                   <Text style={styles.nombre}>{item.nombre}</Text>
               </View>
               <Image source={{ uri: item.escudo  }} style={styles.comunidad} />
           </View>
       </View>
   );
};


export default TeamCard;


const styles = StyleSheet.create({
   card: {
       flexDirection: 'column',
       backgroundColor: '#fff',
       padding: 15,
       marginBottom: 10,
       elevation: 4, // Android shadow
       shadowColor: '#000', // iOS shadow
       shadowOffset: { width: 0, height: 0 },
       shadowOpacity: 0.2,
       shadowRadius: 8, // blur
       borderRadius: 30,
   },
   imagen: {
       width: '100%',
       height: 300,
       resizeMode: 'cover',
       borderRadius: 10,
       marginBottom: 15,
   },
   cardContent: {
       flex: 1,
       flexDirection: 'column',
   },
   row: {
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       marginBottom: 4,
   },
   likesContainer: {
       flexDirection: 'row',
       alignItems: 'center',
       columnGap: 6,
   },
   nombre: {
       fontSize: 18,
       fontWeight: '600',
       color: '#222',
   },
   likes: {
       fontSize: 20,
       color: '#f44336',
       fontWeight: 'bold',
   },
   descripcion: {
       fontSize: 16,
       color: '#555',
   },
   comunidad: {
       width: 100,
       height: 60,
       resizeMode: 'cover',
       marginTop: 15,
   },
});

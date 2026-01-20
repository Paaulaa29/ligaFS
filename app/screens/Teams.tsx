import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { FIRESTORE_DB } from '../../FirebaseConfig';
import TeamCard from '../components/TeamCard';
const Teams = () => {
   const [teams, setTeams] = useState<any[]>([]);
   const [team, setTeam] = useState('');
   useEffect(() => {
       const teamsRef = collection(FIRESTORE_DB, 'teams');
       const subscriber = onSnapshot(teamsRef, {
           next: (snapshot) => {
               const teams: any[] = [];
               snapshot.docs.forEach((doc) => {
               // Añadimos al array un objeto
               // con los campos de Firestore para ese doc
               // ...doc.data() desempaqueta (spread) los campos del 
               // doc (nombre, imagen, etc.) en un objeto.
                       teams.push({
                           ...doc.data()
                       });
               });
               setTeams(teams);
               console.log(teams);
           }
       });
       return () => subscriber();
   }, []);
   return (
       <View style={styles.container}>
           {teams.length > 0 && (
               <FlatList
                   data={teams}
                   renderItem={({ item }) => <TeamCard item={item} />}
                   keyExtractor={(team) => team.id}
                   showsVerticalScrollIndicator={true}
                   scrollEnabled={true}
                   bounces={true}
                   contentContainerStyle={styles.listContent}
               />
           )}
       </View>
   );
};


const styles = StyleSheet.create({
   container: {
       flex: 1,
       backgroundColor: '#fff',
   },
   listContent: {
       padding: 10,
   }
});

export default Teams;
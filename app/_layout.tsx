import { Stack } from 'expo-router';


export default function RootLayout() {
   return (
       <Stack>
           <Stack.Screen
               name="index"
               options={{ title: 'Equipos de la Liga Femenina', headerShown: true }}
           />
       </Stack>
   );
}

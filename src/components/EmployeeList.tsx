import { View, StyleSheet, Text, TextInput, FlatList } from "react-native";
import ProfileCard from "./ProfileCard";

const EMPLEADOS = [
    { id: '1', nombre: "Juan Ramiresz", cargo: 'Diseñador UX', fotoUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150' },
    { id: '2', nombre: "Oscar Marquez", cargo: 'Arquitecto', fotoUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=150' },
    { id: '3', nombre: "Franco Mozquera", cargo: 'Gerente', fotoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
    { id: '4', nombre: "Lidia Ordoñez", cargo: 'Modelo', fotoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
    { id: '5', nombre: "Andi Quintana", cargo: 'Desarrollador', fotoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150' }
];

export default function EmployeeList(){
    return(
        <View style= {styles.container}>
            <Text style= {styles.title}>Directorio de empleo</Text>
            <TextInput style= {styles.input}
                placeholder="Buscar empleado...."
                placeholderTextColor={'#999'}
            />
            <FlatList
                data={EMPLEADOS}
                keyExtractor={(item)=> item.id}
                renderItem={({item})=> (
                    <View>
                        <ProfileCard
                            nombre={item.nombre}
                            cargo={item.cargo}
                            imagen={{uri: item.fotoUrl}}
                        />
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#E2E8F0',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 14,
        fontSize: 14,
        color: '#1E293B',
        marginBottom: 14,
    },
    listContent: {
        paddingBottom: 20,
    },
});
import { StyleSheet, View, Text, Image } from "react-native"

export default function CompanyHeader(){
    return(
        <View style={styles.container}>
            <Image 
                source={require('../assets/images/logo.jpg')}
                style={styles.logo}
            />
            <Text style={styles.slogan}>Construyendo un futuro digital</Text>
        </View>
        
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#185499',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#E2E8F0',
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        resizeMode: 'cover',
    },
    slogan: {
        fontSize: 14,
        fontWeight: '600',
        color: '#020c1a',
        marginTop: 8,
        textAlign: 'center',
    },
});
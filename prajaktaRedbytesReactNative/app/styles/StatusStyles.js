import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    count: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'#fff'
    },
    headers: {
        fontSize: 18,
        color: '#0f0845',
        fontWeight:'bold',
        color:'#fff'
    },
    heading: {
        fontSize: 21,
        color: '#54595c',
        marginLeft: '4%',
        marginTop:10,
        fontWeight: 'bold'
    },
    stateName: {
        color: '#0f0845', 
        fontSize: 18, 
        fontWeight: 'bold',
    },
    activeCount: { 
        color: '#d63429', 
        fontSize: 23, 
        fontWeight: 'bold' 
    },
    cardInner: { 
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    card: { 
        borderRadius: 5, 
        borderWidth: 2 ,
        padding:5,
        elevation:5
    },
    statusCard: { 
        borderRadius: 15, 
        width: 170, 
        borderWidth: 2,
        elevation:5
    },
    cardView: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingBottom: 10 
    }
})
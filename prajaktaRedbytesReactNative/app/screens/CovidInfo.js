import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Header, Icon, Card } from 'react-native-elements';

const safetyMeasures = [
    {
        data: 'Clean your hands often. Use soap and water, or an alcohol-based hand rub'
    },
    {
        data: 'Maintain a safe distance from anyone who is coughing or sneezing'
    },
    {
        data: 'Wear a mask when physical distancing is not possible'
    },
    {
        data: 'Don’t touch your eyes, nose or mouth'
    },
    {
        data: 'Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze'
    },
    {
        data: 'Stay home if you feel unwell'
    },
    {
        data: 'If you have a fever, cough and difficulty breathing, seek medical attention'
    }
]

export class CovidInfo extends Component {
    render() {
        return (
            <View>
                <Header
                    leftComponent={<Icon
                        name={'left'}
                        type={'antdesign'}
                        color={'#fff'}
                        onPress={() => this.props.navigation.goBack()}
                    />}
                    centerComponent={<View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
                            How to Protect Yourself
                        </Text>
                    </View>}
                />
                  <FlatList
                    data={safetyMeasures}
                    contentContainerStyle={{ paddingBottom: '180%', backgroundColor:'#fff' }}
                    renderItem={({ item: rowData }) => (
                        <Card containerStyle={{backgroundColor:'#127cc9', borderRadius:5}}>
                            <Text style={{color:'#fff', fontSize:20, fontWeight:'bold'}}>{rowData.data}</Text>
                        </Card>    
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
}

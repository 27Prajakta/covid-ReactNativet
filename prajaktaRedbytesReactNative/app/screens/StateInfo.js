import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header, Icon, Card } from 'react-native-elements';
import { getStateDistrictData } from '../api/stateDistrictData';
import { styles } from '../styles/StatusStyles';

export class StateInfo extends Component {

    state = {
        districtDetails: {},
        districtsName: [],
        loading: false
    }

    getStateDistrictDataAPI = () => {
        let stateName = this.props.route.params.stateName
        this.setState({
            loading: true
        })
        getStateDistrictData(
            (result) => {
                let districtDetails = result && stateName in result.data && result.data[stateName];
                let districtsName = Object.keys(districtDetails.districtData)
                this.setState({
                    districtDetails,
                    districtsName
                })
            },
            (error) => {
                this.setState({
                    loading: false
                })
            }
        );
    }

    componentDidMount() {
        this.getStateDistrictDataAPI()
    }

    render() {
        let { districtDetails, districtsName } = this.state
        let { route, navigation } = this.props;
        let { stateName, confirmed, active, recovered, deaths } = route.params;
        return (
            <View>
                <Header
                    leftComponent={<Icon
                        name={'left'}
                        type={'antdesign'}
                        color={'#fff'}
                        onPress={() => navigation.goBack()}
                    />}
                    centerComponent={<View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
                            {stateName}
                        </Text>
                    </View>}
                />
                <View style={{ backgroundColor: '#fff' }}>
                    <View style={styles.cardView}>
                        <Card containerStyle={[styles.statusCard, { backgroundColor: '#eba313', }]}>
                            <Text style={[styles.count]}>
                                {confirmed ? confirmed : 0}
                            </Text>
                            <Text style={styles.headers}>
                                Confirmed
                                </Text>
                        </Card>
                        <Card containerStyle={[styles.statusCard, { backgroundColor: '#d63429' }]}>
                            <Text style={[styles.count]}>
                                {active ? active : 0}
                            </Text>
                            <Text style={styles.headers}>
                                Active
                            </Text>
                        </Card>
                    </View>
                    <View style={styles.cardView}>
                        <Card containerStyle={[styles.statusCard, { backgroundColor: '#57ab66' }]}>
                            <Text style={[ styles.count]}>
                                {recovered ? recovered : 0}
                            </Text>
                            <Text style={styles.headers}>
                                Recovered
                            </Text>
                        </Card>
                        <Card containerStyle={[styles.statusCard, { backgroundColor: '#142b38' }]}>
                            <Text style={[ styles.count]}>
                                {deaths ? deaths : 0}
                            </Text>
                            <Text style={styles.headers}>
                                Deaths
                            </Text>
                        </Card>
                    </View>

                    <View>
                        <Text style={styles.heading}>Districts</Text>
                    </View>
                    <ScrollView contentContainerStyle={{ paddingBottom: '180%' }}>
                        {
                            districtsName &&
                            districtsName.map((i, index) => {
                                return (
                                    <Card containerStyle={styles.card}>
                                        {'districtData' in districtDetails &&
                                            <Text style={styles.activeCount}>
                                                {districtDetails.districtData[i].active}
                                            </Text>
                                        }
                                        <Text style={styles.stateName}>{i}</Text>
                                    </Card>
                                    )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}

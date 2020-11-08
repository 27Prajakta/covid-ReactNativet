import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { Header, Icon, Card, SearchBar } from 'react-native-elements';
import { getStateData } from '../api/stateData';
import { styles } from '../styles/StatusStyles';
let _ = require('lodash');

export class Home extends Component {

    state = {
        confirmedCaseCount: 0,
        activeCaseCount: 0,
        recoveredCaseCount: 0,
        deathsCaseCount: 0,
        stateData: [],
        isModalVisible: false,
        search: '',
        loading: false
    }

    getStateDataAPI = () => {
        this.setState({
            loading: true
        })
        getStateData(
            (result) => {
                let stateDetails = result.data && result.data.statewise
                let total = stateDetails.filter((item) => item.state === 'Total')
                this.setState({
                    stateData: stateDetails,
                    confirmedCaseCount: total[0].confirmed,
                    activeCaseCount: total[0].active,
                    recoveredCaseCount: total[0].recovered,
                    deathsCaseCount: total[0].deaths,
                    loading: false
                })
            },
            (error) => {
                this.setState({
                    loading: false
                })
            }
        );
    }

    onChange = search => {
        this.setState({ search });
    };

    componentDidMount() {
        this.getStateDataAPI()
    }

    render() {
        let { confirmedCaseCount, activeCaseCount, recoveredCaseCount, deathsCaseCount, stateData, loading, isModalVisible, search } = this.state
        let filteredState;
        if (stateData) {
            filteredState = stateData;
        }

        if (search) {
            filteredState = _.filter(filteredState, (item) => {
                return (item.state.toLowerCase().indexOf((search).toLowerCase()) != -1);
            });
        }
        return (
            <View>
                {!isModalVisible ?
                    <Header
                        leftComponent={<Icon
                            name={'menu'}
                            type={'entypo'}
                            color={'#fff'}
                            onPress = {() => this.props.navigation.toggleDrawer()}
                        />}
                        centerComponent={<View>
                            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>
                                Covid-19
                        </Text>
                        </View>}
                        rightComponent={<Icon
                            name={'search'}
                            type={'feather'}
                            color={'#fff'}
                            onPress={() => {
                                this.setState({
                                    isModalVisible: true,
                                })
                            }}
                        />}
                    />
                    :
                    <View style={{ flexDirection: 'row', marginTop:'6%', backgroundColor:'blue' }}>
                        <SearchBar
                            lightTheme
                            round
                            placeholder="Search"
                            onChangeText={this.onChange}
                            value={this.state.search}
                            containerStyle={searchStyles.searchBarContainer}
                            inputContainerStyle={{ backgroundColor: '#fff' }}
                            inputStyle={searchStyles.searchText}
                            placeholderTextColor={'blue'}
                        />
                        <View style={searchStyles.cancelButtonView}>
                            <TouchableOpacity style={searchStyles.cancelButton}
                                onPress={() => {
                                    this.setState({
                                        isModalVisible: false,
                                        search: ''
                                    })
                                }}>
                                <Text style={searchStyles.cancelButtonTextColor}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
                {stateData && !loading ?
                    <View style={{ backgroundColor: '#fff' }}>
                        <View style={styles.cardView}>
                            <Card containerStyle={[styles.statusCard, { backgroundColor: '#fa9f20' }]}>
                                <Text style={[styles.count]}>
                                    {confirmedCaseCount}
                                </Text>
                                <Text style={styles.headers}>
                                    Confirmed
                                </Text>
                            </Card>
                            <Card containerStyle={[styles.statusCard, { backgroundColor: '#d63429' }]}>
                                <Text style={[styles.count]}>
                                    {activeCaseCount}
                                </Text>
                                <Text style={styles.headers}>
                                    Active
                                </Text>
                            </Card>
                        </View>
                        <View style={styles.cardView}>
                            <Card containerStyle={[styles.statusCard, { backgroundColor: '#57ab66' }]}>
                                <Text style={[styles.count]}>
                                    {recoveredCaseCount}
                                </Text>
                                <Text style={styles.headers}>
                                    Recovered
                                </Text>
                            </Card>
                            <Card containerStyle={[styles.statusCard, { backgroundColor: '#142b38' }]}>
                                <Text style={[styles.count]}>
                                    {deathsCaseCount}
                                </Text>
                                <Text style={styles.headers}>
                                    Deaths
                                </Text>
                            </Card>
                        </View>

                        <View>
                            <Text style={styles.heading}>States</Text>
                        </View>
                        <FlatList
                            data={filteredState}
                            onRefresh={this.getStateDataAPI}
                            refreshing={loading}
                            contentContainerStyle={{ paddingBottom: '180%' }}
                            renderItem={({ item: rowData }) => (
                                rowData.state !== 'Total' &&
                                <Card containerStyle={styles.card}>
                                    <TouchableOpacity
                                        style={styles.cardInner}
                                        onPress={() => this.props.navigation.navigate('State', {
                                            stateCode: rowData.statecode,
                                            stateName: rowData.state,
                                            confirmed: rowData.confirmed,
                                            active: rowData.active,
                                            recovered: rowData.recovered,
                                            deaths: rowData.deaths
                                        })}
                                    >
                                        <View style={{ flex: 1 }}>
                                            <Text style={styles.activeCount}>{rowData.active}</Text>
                                            <Text style={styles.stateName}>{rowData.state}</Text>
                                        </View>
                                        <Icon
                                            type={'antdesign'}
                                            name={'right'}
                                        />
                                    </TouchableOpacity>

                                </Card>

                            )}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                    : <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: '50%' }} />
                }
            </View>
        )
    }
}

const searchStyles = StyleSheet.create({
    searchBarContainer: {
        width: '80%',
        backgroundColor: 'blue',
      },
      searchText: {
        color: 'black'
      },
      cancelButtonView: {
        width: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
        borderBottomWidth: 1,
        borderBottomColor: '#D5DBDB'
      },
      cancelButton: {
        borderRadius: 12,
        height: 48,
        width: 65,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
      },
      cancelButtonTextColor: {
        color: 'blue',
        fontSize:16
      }  
})

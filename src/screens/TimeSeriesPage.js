import React, { Component } from 'react';
//custom
import {
  ScrollView,
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { material } from 'react-native-typography';
const { height, width } = Dimensions.get('window');

class TimeSeriesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'true',
      Data: [],
    };
  }

  componentDidMount() {
    this.makeRequest();
  }


makeRequest = () => {
  this.setState(this.setState({ loading: true }), async () => {
    const API_URL = 'https://api.apify.com/v2/datasets/RnzK2Aea1RlgBcauw/items?format=json&clean=1';
    const res = await fetch(API_URL);
    const info = await res.json();
    const data = info;
    this.setState({ Data: data.reverse().slice(0, 30), loading: false });
  });
};
render() {
  return (
    <View style={{ height, width, backgroundColor: '#fff' }}>
      <TouchableOpacity
        onPress={() => this.props.navigation.goBack()}
        style={{
          height: 50,
          width: 50,
          borderRadius: 40,
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          top: 20,
          left: 20,
          backgroundColor: 'grey',
          zIndex: 999,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,

          elevation: 13,
        }}>
        <Icon name="chevron-back" size={24} color="#fff" />
      </TouchableOpacity>
      {this.state.loading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="black" />
        </View>
      ) : (
        <ScrollView>
          {this.state.Data.map((day) => (
            <View key={day.lastUpdatedAtSource}>
              <View
                style={{
                  height: 200,
                  width: '100%',
                  //   backgroundColor: 'grey',
                  flexDirection: 'row',
                }}>
                <View //rod
                  style={{
                    backgroundColor: 'teal',
                    height: '100%',
                    width: 5,
                    position: 'absolute',
                    left: 120,
                  }}
                />

                <View //contentbox
                  style={{
                    // right: 20,
                    right: 25,
                    borderRadius: 5,
                    top: 50,
                    paddingTop: 5,
                    position: 'absolute',
                    height: 115,
                    width: 250,
                    backgroundColor: 'grey',
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 4.65,

                    elevation: 8,
                  }}>
                  <Text
                    style={{
                      ...material.display1White,
                      textAlign: 'center',
                      lineHeight: 18,
                      fontSize: 18,
                    }}>
                    Đang điều trị: {day.treated}
                  </Text>
        
                  <Text
                    style={{
                      ...material.display1White,
                      textAlign: 'center',
                      lineHeight: 18,
                      fontSize: 18,
                    }}>
                    Tổng số ca nhiễm: {day.infected}
                  </Text>
                  <Text
                    style={{
                      ...material.display1White,
                      textAlign: 'center',
                      fontSize: 18,
                      lineHeight: 18,
                    }}>
                    Phục hồi: {day.recovered}
                  </Text>
                  <Text
                    style={{
                      ...material.display1White,
                      textAlign: 'center',
                      fontSize: 18,
                      lineHeight: 18,
                    }}>
                    Tử vong: {day.deceased}
                  </Text>
                </View>
                
                <View //circle
                  style={{
                    backgroundColor: 'lightblue',
                    height: 20,
                    width: 20,
                    position: 'absolute',
                    top: 90,
                    borderRadius: 10,
                    left: 120 - 7.5,
                    zIndex: 99999999999,
                  }}
                />
                <View //datetbox
                  style={{
                    left: 20,
                    top: 65,
                    position: 'absolute',
                    height: 80,
                    width: 80,
                    borderRadius: 40,
                    backgroundColor: 'pink',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      ...material.display1,
                      fontSize: 18,
                      textAlign: 'center',
                      lineHeight: 20,
                    }}>
                    {day.lastUpdatedAtSource}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
}

export default TimeSeriesPage;
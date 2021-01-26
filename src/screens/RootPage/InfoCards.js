import React from 'react';
import { TouchableOpacity, ActivityIndicator, Linking } from 'react-native';
import { Image } from 'react-native-elements';

const InfoCards = () => (
  <>
    <TouchableOpacity
      onPress={() =>
        Linking.openURL('https://ncov.moh.gov.vn/')
      }>
      <Image
        resizeMode="cover"
        containerStyle={{
          borderRadius: 7,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          padding: 0,
          height: 125,
          borderWidth: 0,
          width: 350,
          marginRight: 10,
        }}
        source={{
          uri:
            'https://static.dw.com/image/52922784_403.jpg',
        }}
        PlaceholderContent={
          <ActivityIndicator
            style={{ height: '100%' }}
            size="large"
            color="black"
          />
        }
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        Linking.openURL('https://ncov.moh.gov.vn/')
      }>
      <Image
        resizeMode="cover"
        containerStyle={{
          borderRadius: 7,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          padding: 0,
          height: 125,
          borderWidth: 0,
          width: 350,
          marginRight: 10,
        }}
        source={{
          uri:
            'https://media.suckhoedoisong.vn/Images/thaibinh/2021/01/21/DDN_9714.jpg',
        }}
        PlaceholderContent={
          <ActivityIndicator
            style={{ height: '100%' }}
            size="large"
            color="black"
          />
        }
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() =>
        Linking.openURL(
          'https://ncov.moh.gov.vn/',
        )
      }>
      <Image
        resizeMode="cover"
        containerStyle={{
          borderRadius: 7,
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          padding: 0,
          height: 125,
          borderWidth: 0,
          width: 350,
          marginRight: 10,
        }}
        source={{
          uri:
            'https://moh.gov.vn/documents/174521/604740/23.1.2021+BT+Nguyen+Thanh+Long+1.jpg/8571e5af-5988-4be8-a75c-0a46edfadf30?t=1611398604501',
        }}
        PlaceholderContent={
          <ActivityIndicator
            style={{ height: '100%' }}
            size="large"
            color="black"
          />
        }
      />
    </TouchableOpacity>
  </>
);

export default InfoCards;

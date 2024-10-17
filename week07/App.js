import React, { useState } from 'react';
import {
  Button,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Icon,
  CheckBox,
  FlatList,
  tasks,
  renderTask,
  styles
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const DATA = [
  {
    id: 'task01',
    title: 'To check email',
  },
  {
    id: 'task01',
    title: 'UI task web page',
  },
  {
    id: 'task01',
    title: 'Lean javascript basic',
  },
  {
    id: 'task01',
    title: 'Lean HTML Advance',
  },
  {
    id: 'task01',
    title: 'Medical App UI',
  },
  {
    id: 'task01',
    title: 'Learn java',
  },
];



type ItemProps = {title: string};
 


const Item = ({title}: ItemProps) => (
  
  <View style={{marginVertical:10, backgroundColor:"gray", padding:10, borderRadius:30}}>
    <View style={{justifyContent: 'space-between', flexDirection:"row", }}>
      <View style={{ width:250 , flexDirection:'row'}}>
         <CheckBox
          style={{alignSelf: 'center',marginRight:20, borderColor:'green'}}
        />
        <Text style={{fontWeight:'bold', fontSize:20}}>{title.title}</Text>    
      </View>
    </View>
  </View>
);

function Screen1({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
      }}>
      <Image
        source={require('./img/photo1.png')}
        style={{ width: 150, height: 150, marginBottom: 20 }}
      />

      {/* Tiêu đề */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: '#7E3BD2',
          marginBottom: 20,
        }}>
        MANAGE YOUR TASK
      </Text>

      {/* Ô nhập tên */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#D3D3D3',
          borderRadius: 10,
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginBottom: 20,
        }}>
        <Image
          source={require('./img/photo2.png')}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <TextInput
          style={{ flex: 1, height: 40, fontSize: 16 }}
          placeholder="Enter your name"
        />
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#00CFFF',
          paddingVertical: 15,
          paddingHorizontal: 30,
          borderRadius: 25,
          borderWidth: 2,
          borderColor: '#00A3D9',
        }}
        onPress={() => navigation.navigate('Screen2')}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          GET STARTED ➔
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function Screen2({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <View style={{ marginBottom: 20, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{marginRight:70}}
            onPress={() => navigation.navigate('Screen1')}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>+---</Text>
          </TouchableOpacity>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginBottom: 10,
              marginRight:10
            }}
            source={require('./img/avatar.png')}
          />
          <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hi Twinkle</Text>
            <Text style={{ fontSize: 14, color: 'gray' }}>
              Have a great day ahead
            </Text>
          </View>
        </View>
      </View>

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 10,
          marginBottom: 20,
        }}
        placeholder="Search"
      />

      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item} />}
        keyExtractor={item => item.id}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#00CFFF',
          paddingVertical: 15,
          paddingHorizontal: 30,
          borderRadius: 60,
          borderWidth: 1,
          borderColor: '#00A3D9',
          width: '10%',
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 120,
        }}
        onPress={() => navigation.navigate('Screen3')}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function Screen3({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <View style={{ marginBottom: 20, flexDirection: 'row' }}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginBottom: 10,
              marginRight: 10,
            }}
            source={require('./img/avatar.png')}
          />
          <View>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hi Twinkle</Text>
            <Text style={{ fontSize: 14, color: 'gray' }}>
              Have a great day ahead
            </Text>
          </View>
          <TouchableOpacity
            style={{ marginLeft: 60 }}
            onPress={() => navigation.navigate('Screen2')}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>+---</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ADD YOUR JOB</Text>
      </View>

      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 10,
          marginBottom: 20,
        }}
        placeholder="input your job"
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#00CFFF',
          paddingVertical: 15,
          paddingHorizontal: 30,
          marginHorizontal: 70,
          borderRadius: 25,
          borderWidth: 2,
          borderColor: '#00A3D9',
        }}
        onPress={() => navigation.navigate('Screen2')}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          FINISH➔
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen2">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

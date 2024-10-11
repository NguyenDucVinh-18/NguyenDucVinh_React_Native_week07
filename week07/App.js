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
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item) => item.id}
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
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
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
  const [tasks, setTasks] = useState([
    { id: '1', text: 'To check email', completed: true },
    { id: '2', text: 'UI task web page', completed: true },
    { id: '3', text: 'Learn javascript basic', completed: true },
    { id: '4', text: 'Learn HTML Advance', completed: true },
    { id: '5', text: 'Medical App UI', completed: false },
    { id: '6', text: 'Learn Java', completed: true },
  ]);

  const renderTask = ({ item }) => (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#ecf0f1',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
      }}>
      <CheckBox
        checked={item.completed}
        onPress={() => toggleTaskCompletion(item.id)}
      />
      <Text style={{ flex: 1, marginLeft: 10 }}>{item.text}</Text>
      <TouchableOpacity>
        <Icon name="edit" type="feather" color="#E74C3C" />
      </TouchableOpacity>
    </View>
  );

  const toggleTaskCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

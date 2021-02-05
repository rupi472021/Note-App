import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CCPersonal from './ClassComponents/CCPersonal';
import CCWork from './ClassComponents/CCWork';
import CCGroceries from './ClassComponents/CCGroceries';
import { Text, View } from 'react-native';
import CameraPage from './Pages/CameraPage';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/Home';



const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="- My Notes -"
        component={Home}
        options={{ drawerLabel: 'First Page' }}
      />
      <Drawer.Screen
        name="Personal"
        component={PersonalScreen}
        options={{ drawerLabel: 'Personal Page' }}
      />
      <Drawer.Screen
        name="Work"
        component={WorkScreen}
        options={{ drawerLabel: 'Work Notes' }}
      />
      <Drawer.Screen
        name="Groceries"
        component={GroceriesScreen}
        options={{ drawerLabel: 'Groceries Notes' }}
      />
      <Drawer.Screen
        name="Camera Page"
        component={CameraPageScreen}
        options={{ drawerLabel: 'Take a Picture' }}
      />
    </Drawer.Navigator>
  );
}

function PersonalScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CCPersonal />
    </View>
  );
}

function WorkScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CCWork />
    </View>
  );
}

function GroceriesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CCGroceries />
    </View>
  );
}

function CameraPageScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CameraPage />
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="- My Notes -" component={Home} />
          <Stack.Screen name="Personal" component={PersonalScreen} />
          <Stack.Screen name="Work" component={WorkScreen} />
          <Stack.Screen name="Groceries" component={GroceriesScreen} />
          <Stack.Screen name="Camera Page" component={CameraPageScreen} />
        </Stack.Navigator>
      </MyDrawer>
    </NavigationContainer>
  );
}



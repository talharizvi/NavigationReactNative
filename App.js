//import { createStackNavigator } from "react-navigation";

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import {Platform, StyleSheet, Text, ProgressBarAndroid,View,DrawerLayoutAndroid,TextInput,Button,Alert,ScrollView,Image,FlatList, ActivityIndicator,Picker,DatePickerIOS,Switch} from 'react-native';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// type Props = {};


// export default class FetchExample extends React.Component {

//   constructor(props){
//     super(props);
//     this.state ={ isLoading: true,
//       chosenDate:new Date()
//     };
//     // this.state ={
//     //   chosenDate=new Date()
//     // };
//     this.setDate=this.setDate.bind(this)
//   }

//   componentDidMount(){
//     return fetch('https://facebook.github.io/react-native/movies.json')
//       .then((response) => response.json())
//       .then((responseJson) => {

//         this.setState({
//           isLoading: false,
//           dataSource: responseJson.movies,
//         }, function(){

//         });

//       })
//       .catch((error) =>{
//         console.error(error);
//       });
//   }

//   setDate(newDate) {
//     this.setState({chosenDate: newDate});
//   }

//   render(){

    
//     if(this.state.isLoading){
//       return(
//         <View style={{flex: 1, padding: 20}}>
//           <ActivityIndicator/>
//         </View>
//       )
//     }

//     var navigationView = (
//       <View style={{flex: 1, backgroundColor: '#fff'}}>
//         <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
//       </View>
//     );

//     return(

//       <View style={{flex: 1, paddingTop:20}}>
//          <Picker
//   selectedValue={this.state.language}
//   style={{height: 50, width: 100}}
//   onValueChange={(itemValue, itemIndex) =>
//     this.setState({language: itemValue})
//   }>
//   <Picker.Item label="Java" value="java" />
//   <Picker.Item label="JavaScript" value="js" />
//   </Picker>
//         <View style={{flexDirection: 'row'}}>
//         <ActivityIndicator size="large" color="#0000ff" />
//         <ActivityIndicator size="small" color="#00ff00" />
//         <ActivityIndicator size="large" color="#0000ff" />
//         <ActivityIndicator size="small" color="#00ff00" />
//         </View>
//         <DatePickerIOS
//           date={this.state.chosenDate}
//           onDateChange={this.setDate}
//         />
//         <Switch></Switch>
//         <DrawerLayoutAndroid
//       drawerWidth={600}
//       drawerPosition={DrawerLayoutAndroid.positions.Left}
//       renderNavigationView={() => navigationView}>
//       <View style={{flex: 1, alignItems: 'center'}}>
//         <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
//         <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
//       </View>
//     </DrawerLayoutAndroid>
//         <FlatList
//           data={this.state.dataSource}
//           renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
//           keyExtractor={({id}, index) => id}
//         />
//         {/* <Button
//         >

//         </Button> */}
//         <ProgressBarAndroid />
//         <ProgressBarAndroid styleAttr="Horizontal" />
//         <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
//         <ProgressBarAndroid
//           styleAttr="Horizontal"
//           indeterminate={false}
//           progress={0.75}
//         />
//       </View>
//     );
//   }
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

///
///
// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
// import NextScreen from './NextScreen';

// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//         <Button
//           title="Go to Details"
//           onPress={() => {
//             this.props.navigation.dispatch(StackActions.reset({
//               index: 0,
//               actions: [
//                 NavigationActions.navigate({ routeName: 'Next' })//Details
//               ],
//             }))
//           }}
//         />
//       </View>
//     );
//   }  
// }

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Details Screen</Text>
//       </View>
//     );
//   }  
// }

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//   },
//   Details: {
//     screen: DetailsScreen,
//   },
//   Next:{
//     screen:NextScreen
//   }
// }, {
//     initialRouteName: 'Home',
// });

// export default createAppContainer(AppNavigator);

///
///
import React,{Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './HomeScreen';
import NextScreen from './NextScreen';



const RootStack=createStackNavigator(
  {
    Home:{
    screen:HomeScreen
    },
    Next:{
    screen:NextScreen
  }
},  {
      initialRouteName:'Home'
    }
  
  );

  const AppStack = createAppContainer(RootStack)

  export default class App extends Component{
    render(){
      return <AppStack/>
    }
  }



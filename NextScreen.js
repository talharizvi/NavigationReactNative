import React from 'react';
import { View, Text,Button } from 'react-native';
// import { createStackNavigator, createAppContainer } from "react-navigation";

class NextScreen extends React.Component{
    render(){
        return <View style={{flex:1,alignItems:"center",justifyContent:"center"}}
        >
            <Text>Profile Screen</Text>
            <Button
                title="Go to home" 
                onPress={()=>this.props.navigation.navigate('Home')}
            ></Button>
        </View>
    }
}

export default NextScreen

// const AppNavigator = createStackNavigator({
//     Home:{
//         screen:NextScreen
//     }
// });

// export default createAppContainer(AppNavigator);

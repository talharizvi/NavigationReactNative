
import React from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends React.Component{
    render(){
        return <View>
            <Text>Home Screen</Text>
            <Button title="Go to Profile" 
                onPress={()=>this.props.navigation.navigate('Next')}
            />
        </View>
    }
}

export default HomeScreen
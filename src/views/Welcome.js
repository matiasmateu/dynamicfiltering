import React from 'react';
import { Button } from 'react-native'
import { View, Text } from 'native-base';

class WelcomeScreen extends React.Component{
    render(){
        return (
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Button title={"Login"} onPress={() => this.props.navigation.navigate('Dashboard')}/>
            </View>
        )
    }
}

export default WelcomeScreen
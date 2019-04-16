import React from 'react';
import { View, Text } from 'native-base';

class SettingsScreen extends React.Component{
    render(){
        return (
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Text>
                    Settings
                </Text>
            </View>
        )
    }
}

export default SettingsScreen
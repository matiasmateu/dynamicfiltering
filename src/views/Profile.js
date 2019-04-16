import React from 'react';
import { View, Text } from 'native-base';

class ProfileScreen extends React.Component{
    render(){
        return (
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Text>
                    Profile 
                </Text>
            </View>
        )
    }
}

export default ProfileScreen
import React from 'react';
import { View, Text } from 'native-base';

class DashBoardScreen extends React.Component{
    render(){
        return (
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Text>
                    Dash Board
                </Text>
            </View>
        )
    }
}

export default DashBoardScreen
import React from 'react';
import { View, Text, Content, ListItem, CheckBox, Body,  } from 'native-base';
import { StyleSheet, ScrollView } from "react-native";

/**
 *  Creates a list of filters to be displayed in the sidebar menu
 */
const FiltersView = () => {
  return (
        <Content style={styles.filterMenu}>
            <ListItem>
              <CheckBox checked={false} />
              <Body>
                <Text>Open Work Orders</Text>
              </Body>
            </ListItem>
        </Content>
    )
}

const styles = StyleSheet.create({
  filterMenu:{
    paddingTop:48
  }
});

export default FiltersView
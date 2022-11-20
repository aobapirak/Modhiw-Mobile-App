import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";

const Testpage = ({ navigation, route }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://10.0.2.2:5000/api/restaurant')
        .then(res => res.json())
        .then((result) => {
            setItems(result)
            setIsLoading(false)
        })
    }, [isLoading])
  
    const renderItem = ({ item }) => (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{item.menu_name}</Text>
        </View>
    )
  
    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>yolo</Text>
        </View>
        /*
        <View>
            <FlatList
                data = {items}
                renderItem = {renderItem}
                keyExtractor = {item => item.menu_name}
                refreshing = {isLoading}
                onRefresh = {() => setIsLoading(true)}
            />
        </View>*/
    )
}

module.exports = Testpage;
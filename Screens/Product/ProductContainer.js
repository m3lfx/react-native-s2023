import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator, ScrollView, Dimensions } from 'react-native'
import { Container, Header, Icon, Item, Input, Text, VStack, Heading, Center } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import ProductList from './ProductList'

const data = require('../../assets/data/products.json')
const ProductContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(data);
        return () => {
            setProducts([])
        }
    }, [])

    return (
        <ScrollView>
            <Center>
                <VStack w="100%" space={5} alignSelf="center">
                    <Heading fontSize="lg">Search</Heading>
                    <Input
                        placeholder="Search"
                        variant="filled"
                        width="100%"
                        borderRadius="10"
                        py="1"
                        px="2"
                        InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
                </VStack>
                <View>

                    <View style={styles.listContainer} >
                        <FlatList
                            //    horizontal
                            columnWrapperStyle={{ justifyContent: 'space-between' }}
                            numColumns={2}
                            data={products}
                            // renderItem={({item}) => <Text>{item.brand}</Text>}
                            renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                            keyExtractor={item => item.name}
                        />
                    </View>
                </View>
            </Center>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProductContainer;
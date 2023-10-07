import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator, ScrollView, Dimensions } from 'react-native'
import { Container, Header, Icon, Item, Input, Text } from "native-base";

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

            <View style={{ marginTop: 200 }} >
                <FlatList
                    //    horizontal
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    numColumns={2}
                    data={products}

                    renderItem={({ item }) => <ProductList key={item.id} item={item} />}
                    keyExtractor={item => item.name}
                />
            </View>
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
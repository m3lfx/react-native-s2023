import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet,FlatList, ActivityIndicator } from 'react-native'

import ProductList from './ProductList'

const data =require('../../assets/data/products.json')

const ProductContainer = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        setProducts(data);
        return () => {
            setProducts([])
        }
    }, [])

    return (
        <View>
        <Text>Product Container</Text>
        <View style={{ marginTop: 200}} >
            <FlatList 
                horizontal
                data={products}
                renderItem={({item}) => <ProductList key={item.id}/>}
                keyExtractor={item => item.name}
            />
        </View>
    </View> 
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
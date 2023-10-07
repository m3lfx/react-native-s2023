import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator, ScrollView, Dimensions } from 'react-native'
import { Container, Header, Icon, Item, Input, Text, VStack, Heading, Center, } from "native-base";
import { Ionicons, MaterialIcons, SmallCloseIcon } from "@expo/vector-icons";
import ProductList from './ProductList'
import SearchedProduct from "./SearchedProduct";

const data = require('../../assets/data/products.json')
const ProductContainer = () => {
    const [products, setProducts] = useState([])
    const [productsFiltered, setProductsFiltered] = useState([]);
    const [focus, setFocus] = useState();
    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        return () => {
            setProducts([])
            setProductsFiltered([]);
            setFocus();
        }
    }, [])

    const searchProduct = (text) => {
        console.log(text)
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = () => {
        setFocus(true);
    }

    const onBlur = () => {
        setFocus(false);
    }
    console.log(productsFiltered)

    return (

        <Center>
            <VStack w="100%" space={5} alignSelf="center">
                <Heading fontSize="lg">Search</Heading>
                <Input
                    onFocus={openList}
                    onChangeText={(text) => searchProduct(text)}
                    placeholder="Search"
                    variant="filled"
                    width="100%"
                    borderRadius="10"
                    py="1"
                    px="2"
                    InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />}
                    InputRightElement={focus === true ? <Icon ml="2" size="4" color="gray.400" as={<Ionicons name="close" size="12" color="black"  />}/>: null}
                />
            </VStack>
            {focus === true ? (
                <SearchedProduct
                    productsFiltered={productsFiltered}
                />
            ) : (
                <ScrollView>
                    <FlatList
                        //    horizontal
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        numColumns={2}
                        data={products}
                        renderItem={({ item }) => <ProductList key={item._id.$oid} item={item} />}
                        keyExtractor={item => item._id.$oid}
                    />

                </ScrollView>)}

            {/* <View>

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
                </View> */}
        </Center>

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
import React from 'react'

import {Text, View, StyleSheet, Dimensions} from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import cartItems from '../../Redux/Actions/cartActions';

var { height, width } = Dimensions.get("window");
const Cart =(props) => {
    console.log(props)
    const cartItems = useSelector(state => state.cartItems)
    return (
        <View style={{flex:1}}>
          {cartItems.map(x => {
            return(
              <Text>{x.name}</Text>
            )
          })}
        </View>

    )
}

const styles = StyleSheet.create({
    emptyContainer: {
        height: height,
        alignItems: "center",
        justifyContent: "center",
    },
    bottomContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: 'white',
        elevation: 20
    },
    price: {
        fontSize: 18,
        margin: 20,
        color: 'red'
    },
    hiddenContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row',
        // width: 'lg'
    },
    hiddenButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 25,
        height: 70,
        width: width / 1.2
    }
});

export default Cart
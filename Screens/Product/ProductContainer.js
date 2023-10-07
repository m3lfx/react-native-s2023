import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'

const ProductContainer = () => {

    return (
        <View>
            <Text>Product container</Text>
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
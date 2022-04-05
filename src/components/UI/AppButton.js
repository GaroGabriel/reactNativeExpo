import React from 'react';

import {Text, View, StyleSheet, TouchableOpacity,TouchableNativeFeedback, Platform} from 'react-native';
import AppTextBold from "./AppTextBold";
import {THEME} from "../../theme";

const AppButton = ({children,onPress,color = THEME.BLUE_COLOR}) => {

    const Wrapper = Platform.OS === 'android'? TouchableNativeFeedback : TouchableOpacity
    return (
        <Wrapper onPress={onPress} activeOpacity={0.5}>
            <View style={[styles.button , {backgroundColor: color}]}>
                <AppTextBold>
                    {children}
                </AppTextBold>
            </View>
        </Wrapper>
    );
};

export default AppButton;

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:'center'
    }
})

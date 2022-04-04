import React from 'react';
import {StyleSheet, View} from "react-native";
import {THEME} from "../../theme";

const AppCard = (props) => {
    return (
        <View  style={[styles.default,props.style]}>
            {props.children}
        </View>
    );
};

export default AppCard;

const styles = StyleSheet.create({
    default: {
        padding:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        shadowColor:THEME.BLACK_COLOR,
        shadowRadius:2,
        shadowOpacity:0.3,
        shadowOffset:{width:2,height:2},
        marginTop:20,
        elevation:8,
        marginBottom:20,
        borderRadius:10,
    }
});

import {StyleSheet, View,Platform} from "react-native";
import {THEME} from "../theme";
import AppTextBold from "./UI/AppTextBold";

const NavBar = ({title}) => {
    return (
        <View style={[styles.navBar, Platform.select({
                ios: styles.navbarIos,
                android: styles.navbarAndroid
            })]}>
            <AppTextBold style={styles.navBar__text}>{title}</AppTextBold>
        </View>
    );
};

export default NavBar;

const styles = StyleSheet.create({
    navBar: {
        height:70,
        justifyContent:"flex-end",
        alignItems:"center",
        paddingBottom:10,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,

        width:'100%'
    },
    navbarAndroid:{
        backgroundColor:THEME.BLACK_COLOR,
    },
    navbarIos:{
        backgroundColor:THEME.BLACK_COLOR,
    },
    navBar__text: {
        color: THEME.WHITE_COLOR,
        fontSize:18
    }
})

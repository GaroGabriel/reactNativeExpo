import {StyleSheet, View, Text} from "react-native";
import {THEME} from "../theme";

const NavBar = ({title}) => {
    return (
        <View style={styles.navBar}>
            <Text style={styles.navBar__text}>{title}</Text>
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
        backgroundColor:THEME.BLACK_COLOR,
        width:'100%'
    },
    navBar__text: {
        color: THEME.WHITE_COLOR,
        fontSize:18
    }
})

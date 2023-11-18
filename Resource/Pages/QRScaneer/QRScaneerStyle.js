import React, { Component } from 'react'
import { Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;
const styles = {
    scrollViewStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },

    textTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 16,
        color: 'white'
    },
    textTitle1: {
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        padding: 16,
        color: 'black'
    },
    cardView: {
        width: deviceWidth - 32,
        height: deviceHeight / 2,
        alignSelf: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderBottomWidth: 0,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    scanCardView: {
        width: deviceWidth - 32,
        height: deviceHeight / 2,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 4,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        backgroundColor: 'white'
    },
    buttonScan: {
        width: 42,

    },
    descText: {
        padding: 16,
        textAlign: 'justify',
        fontSize: 16
    },


    highlight: {
        fontWeight: '700',
    },

    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonTouchable: {
        fontSize: 21,
        backgroundColor: '#fff',
        marginTop: 32,

        width: deviceWidth - 62,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30
    },
    buttonTextStyle: {
        color: '#000',
        fontWeight: 'bold',
    }
}
export default styles;
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Modal } from 'react-native';
import { Styles, Colors } from '../styles';
import dataCurrency from "../constants/CommonCurrency.json";
import { DialogCountry } from '../components';
import { CurrencyFlag } from "./CurrencyFlag";

export const CountryPicker = (props) => {

    const [currencyName, setCurrencyName] = useState("US Dollar");
    const [code, setCode] = useState("USD");
    const [symbol, setSymbol] = useState("$");
    const [symbolNative, setSymbolNative] = useState("$");
    const [visible, setVisible] = useState(false);

    const {
        onSelectCurrency,
        currencyCode,
        showFlag = true,
        showCurrencyName = true,
        showSymbol = true,
        showNativeSymbol = true,
        darkMode = true,
        renderChildren,
        showCurrencyCode = true,

        currencyPickerRef,
        enable = true,
        onOpen,
        onClose,

        containerStyle = {},
        modalStyle = {},

        title,
        searchPlaceholder,
        textEmpty,
        showCloseButton = true,
        showModalTitle = true
    } = props;

    const { container, flagWidth = 25, countryCodeStyle, countryNameStyle } = containerStyle;

    useEffect(() => {
        let currency = undefined;
        currencyPickerRef && currencyPickerRef(countryRef);

        if (currencyCode) {
            currency = dataCurrency.filter(item => item.code === currencyCode)[0];
        }

        if (currency) {
            const { code, symbol, symbol_native, name } = currency;
            setCurrencyName(name);
            setCode(code);
            setSymbol(symbol);
            setSymbolNative(symbol_native);
        }
    }, [props]);

    const countryRef = {
        open: () => {
            setVisible(true);
            onOpen && onOpen();
        },
        close: () => {
            setVisible(false);
            onClose && onClose();
        }
    }

    const onSelect = (data) => {
        const { code, symbol, symbol_native, name } = data;
        onSelectCurrency && onSelectCurrency(data);
        setCurrencyName(name);
        setCode(code);
        setSymbol(symbol);
        setSymbolNative(symbol_native);
    }

    return (
        <View>
            {enable ? <TouchableOpacity
                onPress={() => { setVisible(true); onOpen && onOpen() }}
                style={[Styles.justifyContent, container]}
            >
                {renderChildren ? renderChildren : <View style={{ flexDirection: "row" }}>
                    {showFlag && <CurrencyFlag currency={currencyCode} width={flagWidth} />}
                    {showCurrencyCode && <Text style={[styles.txtCountryCode, countryCodeStyle]}>{code}</Text>}
                    {showCurrencyName && <Text style={[styles.txtCountryName, countryNameStyle]}>{currencyName}</Text>}
                    {showSymbol && <Text style={[styles.txtCountryName, countryNameStyle]}>{symbol}</Text>}
                    {showNativeSymbol && <Text style={[styles.txtCountryName, countryNameStyle]}>{symbolNative}</Text>}
                </View>}
            </TouchableOpacity> : null}
            <Modal
                visible={visible}
            >
                <DialogCountry
                    onSelectItem={(data) => { onSelect(data) }}
                    setVisible={(value) => { setVisible(value); onClose && onClose(); }}
                    showCallingCode={showCallingCode}
                    title={title}
                    searchPlaceholder={searchPlaceholder}
                    textEmpty={textEmpty}
                    darkMode={darkMode}
                    modalStyle={modalStyle}
                    showCloseButton={showCloseButton}
                    showModalTitle={showModalTitle}
                />
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    callingCodeStyle: {
        ...Styles.fontDefault
    },
    flagStyle: {
        marginRight: 5,
        color: Colors.black
    },
    txtCountryName: {
        ...Styles.fontDefault,
        marginLeft: 10
    },
    txtCountryCode: {
        ...Styles.fontDefault,
        marginLeft: 10,
        fontWeight: "600"
    }
});

import { CurrencyPicker as CurrencyPickerComponent } from "./src/screens"
import React from "react";

const DEFAULT_OPTIONS = {
    onSelectCurrency: () => { },
    style: {},
    showFlag: true,
    showCurrencyName: true,
    darkMode: true
}

export default CurrencyPicker = (props) => {

    const propsModel = {
        ...DEFAULT_OPTIONS,
        ...props
    }

    return (
        <CurrencyPickerComponent {...propsModel} />
    );
}

# react-native-currency-picker

**Various currency picker** for **iOS** and **Android**

## Demo

<img src="https://github.com/alien9996/library-gif/blob/main/courrency_gif.gif?raw=true" width="350">

## Getting started

`$ npm install react-native-currency-picker --save`
<br>
OR
<br>
`$ yarn add react-native-currency-picker`

## Example

```javascript
import CurrencyPicker from "react-native-currency-picker"

let currencyPickerRef = undefined;

// use currencyPickerRef
currencyPickerRef.open();
currencyPickerRef.close();

<CurrencyPicker
  currencyPickerRef={(ref) => {currencyPickerRef = ref}}
  enable={true}
  darkMode={false}
  currencyCode={"EUR"}
  showFlag={true}
  showCurrencyName={true}
  showCurrencyCode={true}
  onSelectCurrency={(data) => { console.log("DATA", data) }}
  onOpen={() => {console.log("Open")}}
  onClose={() => {console.log("Close")}}
  showNativeSymbol={true}
  showSymbol={false}
  containerStyle={{
      container: {},
      flagWidth: 25,
      currencyCodeStyle: {},
      currencyNameStyle: {},
      symbolStyle: {},
      symbolNativeStyle: {}
  }}
  modalStyle={{
      container: {},
      searchStyle: {},
      tileStyle: {},
      itemStyle: {
        itemContainer: {},
        flagWidth: 25,
        currencyCodeStyle: {},
        currencyNameStyle: {},
        symbolStyle: {},
        symbolNativeStyle: {}
      }
  }}
  title={"Currency"}
  searchPlaceholder={"Search"}
  showCloseButton={true}
  showModalTitle={true}
/>

```

## Options

| Props                | Default | Options/Info |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| enable (Boolean)             | true    | Show component that choose the currency. |
| currencyPickerRef (Function) | null    | Get the open() and close() modal methods. |
| darkMode (Boolean)           | true    | Dark mode for currency modal. |
| currencyCode (String)        | USD     | Currency code displayed is selected at start. |
| onSelectCurrency (Function)  | null    | Called when the user chooses a currency and returns information for the selected currency. |
| onOpen (Function)            | null      | Called when the open modal.                                                              |
| onClose (Function)           | null      | Called when the close modal.                                                             |
| showNativeSymbol (Boolean)   | true    | Show the native symbol of the currency. |
| showSymbol (Boolean)         | false   | Show the symbol of the currency. |
| showFlag (Boolean)           | true    | Show the icon of the currency. |
| showCurrencyName (Boolean)   | true    | Show the name of the currency. |
| showCurrencyCode (Boolean)   | true    | Show the code of the currency. |
| title  (String)              | "Currency"  | The title of the modal select currency. |
| showCloseButton  (Boolean)   | true    | Show the close button of the modal select currency. |
| showModalTitle  (Boolean)    | true    | Show the title of the modal select currency. |
| containerStyle  (Object)     | null    | Style for component that choose the currency. <br> **Note**: See more details below. |
| modalStyle  (Object)         | null    | Style for modal select currency. <br> **Note**: See more details below. |
| renderChildren (Component)   | null    | The child component replaces the component element of the library    |


## containerStyle

| Props                | Default | Options/Info |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| container (Object)     | style          | Style for component container. |
| flagWidth (number)     | default: 25    | Width for the icon currency. |
| currencyCodeStyle (Object)   | style      | Style for currency code. |
| currencyNameStyle (Object)     | style  | Style for currency name. |
| symbolStyle (Object)   | style      | Style for currency symbol. |
| symbolNativeStyle (Object)   | style      | Style for currency native symbol. |


## modalStyle

| Props                | Default | Options/Info |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| container (Object)     | style      | Style for modal container |
| searchStyle (Object)   | style      | Style for modal search input  |
| tileStyle (Object)     | style      | Style for modal title |
| itemStyle (Object)     | style      | Style for item select currency <br> **Note**: See more details below. |


## itemStyle

| Props                | Default | Options/Info |
| -------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| itemContainer (Object)     | style      | Style for item currency container |
| flagWidth (number)     | default: 25    | Width for the icon currency |
| currencyCodeStyle (Object)   | style    | Style for currency code   |
| currencyNameStyle (Object)     | style  | Style for currency name |
| symbolStyle (Object)   | style      | Style for currency symbol |
| symbolNativeStyle (Object)   | style      | Style for currency native symbol |


### Thank you for your interest!

import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";

import convertCurrency from "../utils/convertCurrency";

const ConvertButton = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.convertBtn}>
        <TouchableOpacity
          onPress={() => {
            convertCurrency({
              setResult: props.setResult,
              to: props.to,
              from: props.from,
              amount: props.amount,
              currencyRate: props.currencyRate,
            });
          }}
        >
          <Text style={{ textAlign: "center", color: "#fff", fontSize: 18 }}>
            {props.currencyRate.length ? "Convert" : "Loading Currency Rates"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    height: 50,
  },
  convertBtn: {
    width: "90%",
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#537FE7",
    justifyContent: "center",
  },
});

export default ConvertButton;

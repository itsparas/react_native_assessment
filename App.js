import CurrencySelector from "./components/CurrencySelector";
import ConvertButton from "./components/ConvertButton";
import ConvertAmount from "./components/ConvertAmount";

import currencyRates from "./utils/currencyRates";

import Icon from "react-native-vector-icons/FontAwesome";

import { StyleSheet, Text, View, StatusBar, ScrollView } from "react-native";
import { useEffect, useState } from "react";
import { countryList } from "./utils/data";

export default function App() {
  const [currencyList, setCurrencyList] = useState(countryList);
  const [currencyRate, setCurrencyRate] = useState([]);

  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");

  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  useEffect(() => {
    currencyRates(setCurrencyRate);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#F0EEED" }}>
      <ScrollView>
        <View style={styles.container}>
          <StatusBar backgroundColor="#537FE7" />
          <View style={styles.header}>
            <Text style={styles.headerText}>Currency Converter</Text>
          </View>
          <View style={styles.separator} />
          <CurrencySelector
            metaData={{ title: "Select Your Currency", inputTitle: "From" }}
            data={currencyList}
            value={fromCurrency}
            setCurrency={setFromCurrency}
          />
          <View style={{ marginBottom: 20 }}>
            <Text
              onPress={() => {
                setToCurrency(fromCurrency);
                setFromCurrency(toCurrency);
              }}
            >
              <Icon name="arrow-circle-down" size={50} color="#537FE7" />
            </Text>
          </View>
          <CurrencySelector
            metaData={{ title: "Select Your Currency", inputTitle: "To" }}
            data={currencyList}
            value={toCurrency}
            setCurrency={setToCurrency}
          />
          <ConvertAmount
            title={"Enter Amount"}
            value={amount}
            setAmount={setAmount}
            disabled={true}
          />
          <ConvertButton
            setResult={setResult}
            from={fromCurrency}
            to={toCurrency}
            amount={amount}
            result={result}
            currencyRate={currencyRate}
          />
          <View style={styles.resultcontainer}>
            <View style={styles.innercontainer}>
              <Text style={styles.amountInput}>
                {result ? result : "Result"}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0EEED",
    paddingTop: 30,
    alignItems: "center",
  },
  header: {
    marginBottom: 30,
    width: "90%",
  },
  headerText: {
    fontSize: 30,
    color: "#537FE7",
    fontWeight: "bold",
    textAlign: "center",
  },
  resultcontainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 10,
    marginBottom: 20,
    alignItems: "center",
    marginTop: 20,
  },
  innercontainer: {
    width: "90%",
    paddingVertical: 10,
    justifyContent: "center",
    backgroundColor: "#F0EEED",
    borderRadius: 10,
  },
  amountInput: {
    paddingHorizontal: 10,
    textAlign: "center",
    fontSize: 18,
  },
  separator: {
    width: "100%",
    borderBottomColor: "#537FE7",
    borderBottomWidth: 2,
    marginBottom: 30,
  },
});

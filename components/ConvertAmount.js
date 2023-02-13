import { View, Text, TextInput, StyleSheet } from "react-native";

const ConvertAmount = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innercontainer}>
        <Text style={styles.amountText}>{props.title}</Text>

        <TextInput
          style={styles.amountInput}
          value={props.value}
          placeholder={props.title}
          keyboardType="number-pad"
          onChangeText={(newText) => {
            props.setAmount(newText);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
  },
  amountInput: {
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: "#F0EEED",
    width: "100%",
    borderRadius: 10,
  },
  amountText: {
    paddingBottom: 10,
    marginLeft: 3,
    fontSize: 18,
  },
});

export default ConvertAmount;

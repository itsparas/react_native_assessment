import { StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const CurrencySelector = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.from}>
        <View style={{ width: "100%", paddingLeft: 6 }}>
          <Text style={{ marginLeft: 5, fontSize: 18 }}>
            {props.metaData.title}
          </Text>
        </View>

        <View style={styles.dropdownContainer}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            data={props.data}
            search
            maxHeight={400}
            labelField="label"
            valueField="value"
            placeholder={props.metaData.inputTitle}
            searchPlaceholder="Search Currency..."
            value={props.value}
            onChange={(item) => {
              props.setCurrency(item.value);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center" },
  from: {
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    width: "90%",
    marginBottom: 20,
    position: "relative",
  },

  fromInput: {
    width: "95%",
    height: 50,
    backgroundColor: "#F0EEED",
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 0,
    marginLeft: 8,
  },
  dropdownContainer: {
    width: "95%",
    backgroundColor: "#F0EEED",
    borderRadius: 8,
    marginTop: 10,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    borderWidth: 0,
  },

  placeholderStyle: {
    fontSize: 18,
    color: "grey",
  },
  selectedTextStyle: {
    fontSize: 18,
    color: "grey",
  },

  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 8,
  },
});

export default CurrencySelector;

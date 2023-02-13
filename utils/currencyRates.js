import axios from "axios";

const currencyRates = (setCurrencyRate) => {
  let data = [];
  axios
    .get("https://api.apilayer.com/fixer/latest?symbols=&base=usd", {
      headers: {
        apikey: "DUoWEXbNDQEvnUzsyfFMG7ElgH7WLnhL",
      },
    })
    .then((result) => {
      const list = { ...result.data.rates };

      for (let key in list) {
        data.push({
          label: key,
          value: list[key],
        });
      }

      setCurrencyRate(data);
    })
    .catch((error) => console.log("error", error));
};

export default currencyRates;

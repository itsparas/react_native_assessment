import axios from "axios";

const convertCurrency = ({ setResult, to, from, amount }) => {
  axios
    .get(
      `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`,
      {
        headers: {
          apikey: "fzSl0lpYC50PYPfBcSIaLp5fvlbHSWvL",
        },
      }
    )
    .then((data) => {
      setResult(data.data.result);
    })
    .catch((error) => console.log("error", error));
};

export default convertCurrency;

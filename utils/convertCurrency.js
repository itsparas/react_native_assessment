//below commented function uses api to convert currency

// import axios from "axios";

// const convertCurrency = ({ setResult, to, from, amount }) => {
//   axios
//     .get(
//       `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`,
//       {
//         headers: {
//           apikey: "fzSl0lpYC50PYPfBcSIaLp5fvlbHSWvL",
//         },
//       }
//     )
//     .then((data) => {
//       setResult(data.data.result);
//     })
//     .catch((error) => console.log("error", error));
// };

//this does not uses api to convert currency
const convertCurrency = ({ setResult, to, from, amount, currencyRate }) => {
  const fromIndex = currencyRate.findIndex((item) => {
    return item.label === from;
  });
  const toIndex = currencyRate.findIndex((item) => {
    return item.label === to;
  });

  const result =
    amount * (currencyRate[toIndex].value / currencyRate[fromIndex].value);

  setResult(result);
};

export default convertCurrency;

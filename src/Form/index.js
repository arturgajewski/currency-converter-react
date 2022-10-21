import "./style.css";
import { useState } from "react";
import currencies from "../Currencies";
import Result from "../Result";

const Form = ({ button }) => {
  const [result, setResult] = useState("");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].id);

  const calculateResult = (amount, currency) => {
    const targetRate = currencies.find(({ id }) => id === currency).rate;

    setResult({
      originalAmount: +amount,
      finalResult: amount / targetRate,
      currency: currency,
    });
  };

  return (
    <form className="form" onInput={calculateResult}>
      <fieldset className="form__currencyContainer">
        <span className="form__currencyOptionName">EURO 4.84</span>
        <input
          type="radio"
          name={currencies.map(({ currency }) => currency === "EURO")}
          required
          value={amount}
          className="form_input"
        />
        <span className="form__currencyOptionName">DOLAR 4.95</span>
        <input
          type="radio"
          name={currencies.map(({ currency }) => currency === "DOLAR")}
          required
          value={amount}
          className="form_input"
        />
        <span className="form__currencyOptionName">GBP 5.57</span>
        <input
          type="radio"
          name={currencies.map(({ currency }) => currency === "GBP")}
          required
          value={amount}
          className="form_input"
        />
        <span className="form__currencyOptionName">CHF 4.93</span>
        <input
          type="radio"
          name={currencies.map(({ currency }) => currency === "CHF")}
          required
          value={amount}
          className="form_input"
        />
        <span className="form__currencyOptionName">CZK 0.19</span>
        <input
          type="radio"
          name={currencies.map(({ currency }) => currency === "CZK")}
          required
          value={amount}
          className="form_input"
        />
      </fieldset>
      <div className="form__setResult">
        *Wpisz kwotę PLN :
        <input
          className="form__input"
          type="number"
          maxLength="10"
          minLength="2"
          required
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <Result result={result} />
      </div>
      {button}
    </form>
  );
};

export default Form;

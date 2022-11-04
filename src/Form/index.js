import "./style.css";
import { currencies } from "../currencies/currencies";
import { useState } from "react";
import Button from "../Button";
import Result from "../Result";

const Form = ({ result, calculateResult }) => {
  const [currency, setCurrency] = useState(currencies[0].fullName);
  const [amount, setAmount] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(amount, currency);
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__currencyContainer">
        <label className="form__currencyOption">
          <select
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {currencies.map(({ name, fullName }) => (
              <option key={name} value={name}>
                {fullName}
              </option>
            ))}
            ;
          </select>
        </label>
      </fieldset>
      <fieldset className="form__currencyContainer">
        <span className="form__currencyOption"> Wpisz kwotę PLN :</span>
        <input
          className="form__input"
          required
          type="number"
          name="kwota"
          step="0.01"
          min="1"
          max="1000000000"
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
        />
        <label>
          <Result result={result} />
        </label>
      </fieldset>
      <Button />
    </form>
  );
};
export default Form;

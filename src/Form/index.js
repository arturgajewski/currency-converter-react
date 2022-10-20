import "./style.css";

const Form = ({button}) => {
  return (
    <form className="form">
      <fieldset className="form__currencyContainer">
        
        <span className="form__currencyOption">EURO 4.85</span>
        <input
          type="radio"
          name="currency"
          required
          value="4.85"
          className="form_input"
        />
        <span className="form__currencyOption">DOLAR 4.95</span>
        <input
          type="radio"
          name="currency"
          required
          value="4.95"
          className="form_input"
        />
        <span className="form__currencyOption">GBP 5.49</span>
        <input
          type="radio"
          name="currency"
          required
          value="5.49"
          className="form_input"
        />
        <span className="form__currencyOption">CHF 5.07</span>
        <input
          type="radio"
          name="currency"
          required
          value="5.07"
          className="form_input"
        />
        <span className="form__currencyOption">CZK 0.2</span>
        <input
          type="radio"
          name="currency"
          required
          value="0.20"
          className="form_input"
        />
      </fieldset>
      <div className="form__setResult">
      Wpisz kwotę PLN :
      <input
        className="form__input"
        type="number"
        maxlength="10"
        minlength="2"
        required
      />
      Kwota którą otrzymasz to: <span className="form__result">0</span>
      </div>
    {button}
    </form>
  );
};

export default Form;

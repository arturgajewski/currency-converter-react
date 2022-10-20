import "./style.css";

const Form = ({button}) => {
  return (
    <form className="form">
      <fieldset className="form__currencyContainer">
        
        <span className="form__currencyOptionName">EURO 4.84</span>
        <input
          type="radio"
          name="currency"
          required
          value="4.84"
          className="form_input"
        />
        <span className="form__currencyOptionName">DOLAR 4.95</span>
        <input
          type="radio"
          name="currency"
          required
          value="4.95"
          className="form_input"
        />
        <span className="form__currencyOptionName">GBP 5.57</span>
        <input
          type="radio"
          name="currency"
          required
          value="5.57"
          className="form_input"
        />
        <span className="form__currencyOptionName">CHF 4.93</span>
        <input
          type="radio"
          name="currency"
          required
          value="4.93"
          className="form_input"
        />
        <span className="form__currencyOptionName">CZK 0.19</span>
        <input
          type="radio"
          name="currency"
          required
          value="0.19"
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
      />
      Kwota którą otrzymasz to: <span className="form__result">0</span>
      </div>
    {button}
    </form>
  );
};

export default Form;

import "./style.css"

const Form = () => {
  return (
  <section>
      <form className="form">
        <h1 className="form__headerTitle"> Internetowy Kantor Walut</h1>
        <fieldset className="form__fieldset">
          <legend className="form__legend">Kalkulator Walut</legend>
          <p className="form__paragraph">
            Żeby przeliczyć musisz zaznaczyć walutę.
          </p>
          <p className="form__paragraph">
            Pola oznaczone <span className="form__fieldset--star">*</span> są
            wymagane.
          </p>
        </fieldset>
        <fieldset className="form__fieldset">
          <legend className="form__legend">Wybierz walutę</legend>
          <p className="form__paragraph">
            <label className="form__label">
              <span className="form__nameCurrency">EURO 4.85</span>{" "}
              <input
                type="radio"
                name="currency"
                required
                value="4.85"
                className="form_input"
              />
            </label>
            <label className="form__label">
              <span className="form__nameCurrency">DOLAR 4.95</span>{" "}
              <input
                type="radio"
                name="currency"
                required
                value="4.95"
                className="form_input"
              />
            </label>
            <label className="form__label">
              <span className="form__nameCurrency">GBP 5.49</span>{" "}
              <input
                type="radio"
                name="currency"
                required
                value="5.49"
                className="form_input"
              />
            </label>
            <label className="form__label">
              <span className="form__nameCurrency">CHF 5.07</span>{" "}
              <input
                type="radio"
                name="currency"
                required
                value="5.07"
                className="form_input"
              />
            </label>
            <label className="form__label">
              <span className="form__nameCurrency">CZK 0.2</span>{" "}
              <input
                type="radio"
                name="currency"
                required
                value="0.20"
                className="form_input"
              />
            </label>
          </p>
        </fieldset>
        <fieldset className="form__fieldset">
          <p className="form__paragraph">
            <legend className="form__legend"> Wpisz kwotę PLN</legend>
          </p>
          <p className="form__paragraph">
            <label className="form__label">
              Wpisz kwotę PLN,jaką chcesz wymienić
              <span className="form__fieldset--star">*</span>:{" "}
              <input
                className="form__input"
                type="number"
                maxlength="10"
                minlength="2"
                required
              />
            </label>
          </p>
          <p className="form__currency--summary">
            Kwota którą otrzymasz to: <span className="form__finished">0</span>{" "}
            kurs waluty to ...
          </p>
        </fieldset>
        <button className="form__button" value="reset" type="reset">
          {" "}
          Wyczyść pole kwota
        </button>
      </form>

      <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Wybierz walutę na którą chcesz wymienić PLN</legend>
            <p className="form__paragraph">
                <label className="form__label">
                    <span className="form__nameCurrency">EURO 4.85</span> <input type="radio" name="currency" required
                        value="4.85" className="form_input" />
                </label>
                <label className="form__label">
                    <span className="form__nameCurrency">DOLAR 4.95</span> <input type="radio" name="currency" required
                        value="4.95" className="form_input"/>
                </label>
                <label className="form__label">
                    <span className="form__nameCurrency">GBP 5.49</span> <input type="radio" name="currency" required
                        value="5.49" className="form_input"/>
                </label>
                <label className="form__label">
                    <span className="form__nameCurrency">CHF 5.07</span> <input type="radio" name="currency" required
                        value="5.07" className="form_input"/>
                </label>
                <label className="form__label">
                    <span className="form__nameCurrency">CZK 0.2</span> <input type="radio" name="currency" required
                        value="0.20" className="form_input"/>
                </label>
            </p>
        </fieldset>
        <fieldset className="form__fieldset">
            <p className="form__paragraph">
                <legend className="form__legend"> Wpisz kwotę aby wymienić na wybraną walutę</legend>
            </p>
            <p className="form__paragraph">
                <label className="form__label">
                    Wpisz kwotę PLN,jaką chcesz wymienić<span
                        className="form__fieldset--star">*</span>: <input className="form__input" type="number"
                        maxlength="10" minlength="2" required/>
                </label>
            </p>
            <p className="form__currency--summary">
                Kwota którą otrzymasz to: <span className="form__finishedPln">0</span>PLN kurs waluty to
                ....
            </p>
        </fieldset>

        <button className="form__button" value="reset" type="reset"> Wyczyść pole kwota</button>
    </form>
    </section>
)};


export default Form;
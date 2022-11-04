import "./style.css"

const Result = ({ result }) => {
  if (result === "") {
    return "";
  }
  return (
    <fieldset className="result">
      <>
        <span className="form__currencyOption">
          Za {result.originalAmount} PLN otrzymasz:{" "}
        </span>
        <span className="result__finish">
          {" "}
          {result.finalResult.toFixed(2)} {result.currency}
        </span>
      </>
    </fieldset>
  );
};

export default Result;

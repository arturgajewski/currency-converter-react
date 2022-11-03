const Result = ({ result }) => {
  if (result === "") {
    return "";
  }
  return (
    <fieldset>
      <>
        <span className="form__currencyOption">
          Za {result.originalAmount} PLN otrzymasz{" "}
        </span>
        <span className="form__result">
          {" "}
          {result.finalResult}
          {result.fullName}
        </span>
      </>
    </fieldset>
  );
};

export default Result;

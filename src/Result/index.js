const Result = ({ result }) => {
  if (result === "") {
    return "";
  }
  return (
    
 <fieldset>
        Za {result.originalAmount} PLN otrzymasz <span className="form__result">{result.finalResult.toFixed(2)}{" "}
        {result.name}</span>
    </fieldset> 
  
  );
};

export default Result;
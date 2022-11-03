const Result = ({ result,originalAmount,finalResult,fullName }) => {
  if (result === "") {
    return "";
  }
  return (
    
 <fieldset>
        Za {result.originalAmount} PLN otrzymasz <span className="form__result">{result.finalResult}
        {result.fullName}</span>
    </fieldset> 
  
  );
};

export default Result;
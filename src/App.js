import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Buttons from "./Button";
import { currencies } from "./currencies/currencies";
import { useState } from "react";

function App() {
  const [result, setResult] = useState(0);

  const calculateResult = (amount, currency) => {
    const targetRate = currencies.find(({ id }) => id === currency).rate;

    setResult({
      originalAmount: +amount,
      finalResult: +amount / targetRate,
      currency: currency,
    });
  };
  return (
    <Container>
      <Header title="Kantor Walut" />
      <Section
        title="Wybierz walutę"
        description="Pola oznaczone * są
wymagane."
        body={
          <Form
            result={result}
            calculateResult={calculateResult}
            button={<Buttons />}
          />
        }
      />
    </Container>
  );
}
export default App;

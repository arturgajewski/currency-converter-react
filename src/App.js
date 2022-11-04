import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Buttons from "./Button";
import Footer from "./Footer";
import { currencies } from "./currencies/currencies";
import { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const calculateResult = (amount, currency) => {
    const exchangeRate = currencies.find((id) => id.name === currency);
    const rate = exchangeRate.rate;

    setResult({
      originalAmount: +amount,
      finalResult: +amount / rate,
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
        information="Kurs walut aktualny na dzień 03.11.2022"
      />
      <Footer title="Strona stworzona przez Artur Gajewski" />
    </Container>
  );
}
export default App;

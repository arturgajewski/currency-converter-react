import { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Buttons from "./Button";

const currencies = [
  {
    id: 1,
    name: "EURO",
    value: 4.84,
  },
  {
    id: 2,
    name: "DOLAR",
    value: 4.95,
  },
  {
    id: 3,
    name: "GBP",
    value: 5.57,
  },
  {
    id: 4,
    name: "CZK",
    value: 0.19,
  },
];

function App() {
const [currency,setCurrency] = useState();

const onChangeSetCurrency = () => {
  console.log("Witaj w konsoli programisty :)");
};
console.log(onChangeSetCurrency());

  return (
   <Container>
     <Header title="Kantor Walut" />
      <Section 
    title="Wybierz walutę"
    description="Pola oznaczone * są wymagane."
    body={<Form 
    button={<Buttons />} 
      />}
    information="Kursy walut na dzień 20.10.2022 pobrane z NBP"
     />
    
    </Container>
  );
}

export default App;

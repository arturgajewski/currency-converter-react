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
    value: 4.89,
  },
  {
    id: 2,
    name: "DOLAR",
    value: 4.93,
  },
  {
    id: 3,
    name: "GBP",
    value: 5.44,
  },
  {
    id: 4,
    name: "CZK",
    value: 0.21,
  },
];

function App() {
  return (
   <Container>
    <Header title="Kantor Walut" />
<Section 
title="Wybierz walutę"
description="Pola oznaczone * są
wymagane."
body={<Form 
button={<Buttons />}
/>}
/>
    </Container>
  );
}

export default App;

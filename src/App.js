import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import Section from "./Section";
import Buttons from "./Button";
import Result from "./Result";

function App() {
  return (
    <Container>
      <Header title="Kantor Walut" />
      <Section
        title="Wybierz walutę *"
        description="Pola oznaczone * są wymagane."
        body={<Form 
          result={<Result />}
          button={<Buttons />} />}
        information="Kursy walut na dzień 20.10.2022 pobrane z NBP"
      />
    </Container>
  );
}

export default App;

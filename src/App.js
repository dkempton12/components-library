import "./App.css";
import Container from "./components/Layout/Container/Container";
import WebsiteHero from "./components/WebsiteHero/WebsiteHero";
import Form from "./components/Form/Form/Form";

function App() {
  return (
    <div className="App">
      <WebsiteHero bg_color="blue" text_color="white" />
      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>

        <Form label="Name:" />
      </Container>
    </div>
  );
}

export default App;

import "./styles.css";
import Form from "./Form";
import Overview from "./Overview";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Form />
      <Overview />
      <Weather />
    </div>
  );
}

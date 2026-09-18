import { Header, Button, Card, Table } from "../components";
import "./App.css";

function App() {
  const handlePrimaryClick = () => {
    alert("Primary Button");
  };

  const handleDangerClick = () => {
    alert("Danger Button");
  };

  const columns = ["name", "city", "age"];

  const student = [
    { name: "Ahmed", city: "Cairo", age: 27 },
    { name: "Mohamed", city: "Giza", age: 25 },
    { name: "Mahmoud", city: "Alex", age: 30 },
  ];

  // const columns2 = ["name", "color", "ram"];

  // const product = [
  //   { name: "iphone", color: "red", ram: 27 },
  //   { name: "samsung", color: "black", ram: 25 },
  //   { name: "oppo", color: "white", ram: 30 },
  // ];

  return (
    <>
      <Header />

      <Button text="Click Me" onClick={handlePrimaryClick} variant="primary" />

      <Button text="Delete" onClick={handleDangerClick} variant="danger" />

      <Card title="card 1" description="hello from card 1" />
      <Card title="card 2" description="hello from card 2" />
      <Card title="card 3" description="hello from card 3">
        <button>view more</button>
      </Card>

      <Table columns={columns} data={student} striped={true} />
      {/* <Table columns={columns2} data={product} striped={true} /> */}
    </>
  );
}

export default App;

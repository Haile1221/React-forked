function Greeting({ name, age }) {
  return (
    <h1>
      Hello, {name}, {age}
    </h1>
  );
}

export default function App() {
  return <Greeting name="world" age=" 20" />;
}

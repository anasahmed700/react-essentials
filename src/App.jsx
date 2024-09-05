import reactImg from "./assets/react-core-concepts.png";
import componentImg from "./assets/components.png";
import jsxImg from "./assets/jsx-ui.png";

const reactDesc = ["Fundamental", "Crucial", "Core"];

function genRandInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDesc[genRandInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept
              title="Components"
              description="Reusable UI elements"
              image={componentImg}
            />
            <CoreConcept
              title="JSX"
              description="React's declarative programming elements"
              image={jsxImg}
            />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;

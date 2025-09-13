import { CORE_CONCEPTS } from "./data";
import { CoreConcepts } from "./components/CoreConcepts";
import { Header } from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx.jsx";

function App() {
    function handleSelect() {
        console.log("Clicked");
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcepts
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        <CoreConcepts {...CORE_CONCEPTS[1]} />
                        <CoreConcepts {...CORE_CONCEPTS[2]} />
                        <CoreConcepts {...CORE_CONCEPTS[3]} />
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onSelect={handleSelect}>
                            Components
                        </TabButton>
                        <TabButton onSelect={handleSelect}>JSX</TabButton>
                        <TabButton onSelect={handleSelect}>Props</TabButton>
                        <TabButton onSelect={handleSelect}>State</TabButton>
                    </menu>
                    Dynamic Content
                </section>
            </main>
        </div>
    );
}

export default App;

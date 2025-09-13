import { useState } from "react";

import { CORE_CONCEPTS } from "./data";
import { CoreConcepts } from "./components/CoreConcepts";
import { Header } from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx.jsx";

import { EXAMPLES } from "./data.js";

function App() {
    const [selectedTopic, setSelectedTopic] = useState("components");

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
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
                        <TabButton onSelect={() => handleSelect("components")}>
                            Components
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("jsx")}>
                            JSX
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("props")}>
                            Props
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("state")}>
                            State
                        </TabButton>
                    </menu>
                    <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;

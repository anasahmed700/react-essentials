import { CORE_CONCEPTS } from '../assets/data'
import CoreConcept from './CoreConcept'

const CoreConcepts = () => {
    return (
        <section id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map(conceptItem => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
            </ul>
        </section>
    )
}

export default CoreConcepts
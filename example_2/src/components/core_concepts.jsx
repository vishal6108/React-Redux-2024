import React from 'react'
import CoreConcept from "./core_concept";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
          {/* <CoreConcept
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]} /> */}
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept
                key={item.title}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </section>
  )
}
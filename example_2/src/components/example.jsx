import React from 'react';
import TabButton from "../components/Tab_btn";
import { useState } from "react";
import { EXAMPLES } from "../data";
import Tabs from './Tabs';

function Example() {
  const [selectedTab, setSelectedTab] = useState();
  function changeHandler(data) {
    setSelectedTab(data);
  }

  let content = <h3>Please select topic</h3>;

  if (selectedTab) {
    content = (
      <div>
        <h3>{EXAMPLES[selectedTab].title}</h3>
        <p>{EXAMPLES[selectedTab].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTab].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <section id="examples">
    <h2>Examples</h2>
    <Tabs 
    buttonContainers={'menu'}
    button={
    <>
      <TabButton
        label={"Components"}
        isSelected={selectedTab === "components"}
        onSelect={() => changeHandler("components")}
      />
      <TabButton
        label={"JSX"}
        isSelected={selectedTab === "jsx"}
        onSelect={() => changeHandler("jsx")}
      />
      <TabButton
        label={"Props"}
        isSelected={selectedTab === "props"}
        onSelect={() => changeHandler("props")}
      />
      <TabButton
        label={"State"}
        isSelected={selectedTab === "state"}
        onSelect={() => changeHandler("state")}
      />
    </>
  }>
    <div id="tab-content">
      {/* {!selectedTab && <h3>Please select topic</h3>}
      {selectedTab && (
        <div>
          <h3>{EXAMPLES[selectedTab].title}</h3>
          <p>{EXAMPLES[selectedTab].description}</p>
          <pre>
            <code>{EXAMPLES[selectedTab].code}</code>
          </pre>
        </div>
      )} */}
      {content}
    </div>
    
    </Tabs>
  </section>
  )
}

export default Example
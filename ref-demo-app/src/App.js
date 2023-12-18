import { useState } from "react";
import MainSection from "./components/main_section";
import NotStartedProject from "./components/not_started_project";
import SideBar from "./components/sidebar";

function App() {
  const [isProjectSelected, setIsProjectSelected] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  let content;
  function addProjectHandler() {
    setIsProjectSelected((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }
  function handleCancelAddProject() {
    setIsProjectSelected((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleAddProject(projectData) {
    setIsProjectSelected((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  if (isProjectSelected.selectedProjectId === null) {
    content = (
      <MainSection
        onDetail={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (isProjectSelected.selectedProjectId === undefined) {
    content = <NotStartedProject onAddProject={addProjectHandler} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar
        onAddProject={addProjectHandler}
        projects={isProjectSelected.projects}
      />
      {content}
      {/* <MainSection onAddProject={addProjectHandler} />
      <NotStartedProject onAddProject={addProjectHandler} /> */}
    </main>
  );
}

export default App;

import { useState } from "react";
import MainSection from "./components/main_section";
import NotStartedProject from "./components/not_started_project";
import SideBar from "./components/sidebar";
import SelectedProject from "./components/selected_project";

function App() {
  const [isProjectSelected, setIsProjectSelected] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setIsProjectSelected((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  function handleDeleteTask(id) {
    setIsProjectSelected((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }
  let content;
  function addProjectHandler() {
    setIsProjectSelected((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  }
  function handleSelectProject(id) {
    setIsProjectSelected((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
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

  function handleDeleteProject() {
    setIsProjectSelected((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProject = isProjectSelected.projects.find(
    (project) => project.id === isProjectSelected.selectedProjectId
  );

  content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={isProjectSelected.tasks}
    />
  );

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
        onSelectProject={handleSelectProject}
        selectedProjectId={isProjectSelected.selectedProjectId}
      />
      {content}
      {/* <MainSection onAddProject={addProjectHandler} />
      <NotStartedProject onAddProject={addProjectHandler} /> */}
    </main>
  );
}

export default App;

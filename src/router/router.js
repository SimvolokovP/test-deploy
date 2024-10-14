import GroupsPage from "../pages/GroupsPage/GroupsPage";
import HomePage from "../pages/HomePage/HomePage";
import TasksPage from "../pages/TasksPage/TasksPage";

export const appRoutes = [
  { path: "/", isIndex: true, component: HomePage },
  { path: "/tasks", isIndex: false, component: TasksPage },
  { path: "/groups", isIndex: false, component: GroupsPage },
];

import DefaultLayout from "./layouts/defaultLayout/defaultLayout";

// views
import modules from "./modules";

const routes = [
  {
    path: "/",
    layout: DefaultLayout,
    exact: true,
    component: modules.Home,
  }
]

export default routes;

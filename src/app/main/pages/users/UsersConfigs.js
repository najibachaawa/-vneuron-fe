import React from "react";
// import { authRoles } from "app/auth";

export const UsersPageConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  //auth: authRoles.admin,
  routes: [
    {
      path: "/pages/users",
      component: React.lazy(() => import("./Users"))
    }
  ]
};

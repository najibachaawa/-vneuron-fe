import React from "react";
import { Redirect } from "react-router-dom";

export const ContactsAppConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: "/pages/contacts/:id",
      component: React.lazy(() => import("./ContactsApp"))
    },
    {
      path: "/pages/contacts",
      component: () => <Redirect to="/pages/contacts/all" />
    }
  ]
};

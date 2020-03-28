import React from "react";

export const ChatAppConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  routes: [
    {
      path: "/pages/chat",
      component: React.lazy(() => import("./ChatApp"))
    }
  ]
};

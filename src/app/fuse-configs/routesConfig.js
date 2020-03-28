import React from "react";
import { Redirect } from "react-router-dom";
import { FuseUtils } from "@fuse";
import { pagesConfigs } from "app/main/pages/pagesConfigs";
import { LoginConfig } from "app/main/login/LoginConfig";
import { RegisterConfig } from "app/main/register/RegisterConfig";
import { LogoutConfig } from "app/main/logout/LogoutConfig";
import { CallbackConfig } from "app/main/callback/CallbackConfig";

const routeConfigs = [
  ...pagesConfigs,
  RegisterConfig,
  LoginConfig,
  LogoutConfig,
  CallbackConfig
];

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
  //   {
  //     path: "/",
  //     exact: true,
  //     component: () => <Redirect to="/login" />
  //   },
  {
    component: () => <Redirect to="/pages/errors/error-404" />
  }
];

export default routes;

import React, { ComponentType } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loader } from "./Loader";

interface ProtectedRouteProps {
  component: ComponentType;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Loader />,
  });

  return <Component />;
};

export default ProtectedRoute;

import * as React from "react";

type Props = {
  children?: React.ReactNode;
};

const Content = ({ children }: Props): React.ReactElement => {
  return <div>{children}</div>;
};

export default Content;

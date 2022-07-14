import { ReactElement } from "react";
import "./style.scss";
interface ChildrenProps {
  children: ReactElement | ReactElement[];
}

const Mainlayout: React.FC<ChildrenProps> = ({ children }) => {
  return <div className="mainlayout">{children}</div>;
};

export default Mainlayout;

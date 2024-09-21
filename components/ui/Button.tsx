import { IconType } from "react-icons";

type ButtonProps = {
  label: string;
  variant?: string;
  icon?: IconType;
};

const Button = ({ label, variant, icon: Icon }: ButtonProps) => {
  return (
    <button className={`px-6 py-4 title-16 ${variant}`}>
      {label}
      {Icon && <Icon />}
    </button>
  );
};

export default Button;

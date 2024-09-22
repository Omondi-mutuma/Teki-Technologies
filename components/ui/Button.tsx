import { IconType } from "react-icons";

type ButtonProps = {
  label: string;
  variant?: string;
  icon?: IconType;
};

const Button = ({ label, variant, icon: Icon }: ButtonProps) => {
  return (
    <button
      className={`px-8 py-4 title-16 ${variant} flex justify-center items-center`}
    >
      {label}
      {Icon && <Icon size={12} className="ml-2" />}
    </button>
  );
};

export default Button;

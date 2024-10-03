import {Operator} from "@/lib/models/Operator.ts";
import {ArrowRightIcon} from "lucide-react";
import {useAuthContext} from "@/lib/context/AuthContext.ts";
import {useNavigate} from "@tanstack/react-router";

interface Props {
  operator: Operator;
}

const SelectOperatorButton = (props: Props) => {
  const { operator } = props;

  const { login } = useAuthContext();
  const navigate = useNavigate();

  const handleClick = () => {
    login(operator.id);

    navigate({ to: '/dashboard' });
  };

  return (
    <button type="button" onClick={handleClick} className="w-full p-2 flex items-center gap-3 hover:bg-card transition rounded-lg">
      <ArrowRightIcon className="w-[17px]" />

      <span>{operator.first_name} {operator.last_name} {operator.middle_name}</span>
    </button>
  );
};

export { SelectOperatorButton };

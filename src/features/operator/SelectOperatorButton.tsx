import {Operator} from "@/lib/models/Operator.ts";
import {ArrowRightIcon} from "lucide-react";

interface Props {
  operator: Operator;
  onClick?: () => void;
}

const SelectOperatorButton = (props: Props) => {
  const { operator, onClick } = props;

  return (
    <button type="button" onClick={onClick} className="w-full p-2 flex items-center gap-3 hover:bg-card transition rounded-lg">
      <ArrowRightIcon className="w-[17px]" />

      <span>{operator.first_name} {operator.last_name} {operator.middle_name}</span>
    </button>
  );
};

export { SelectOperatorButton };

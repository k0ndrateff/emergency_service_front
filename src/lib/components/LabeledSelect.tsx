import {ReactNode, useId} from "react";
import {Select} from "@/lib/components/ui/select.tsx";

interface Props {
  label: string;
  value: string;
  children: ReactNode;
  onChange: (value: string) => void;
}

const LabeledSelect = (props: Props) => {
  const { label, value, children, onChange } = props;

  const id = useId();

  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-slate-300 text-xs">{label}</span>

      <Select value={value} onValueChange={onChange}>
        {children}
      </Select>
    </label>
  );
};

export { LabeledSelect };

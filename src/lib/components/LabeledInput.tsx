import {useId} from "react";
import {Input} from "@/lib/components/ui/input.tsx";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

const LabeledInput = (props: Props) => {
  const { label, value, onBlur, onChange } = props;

  const id = useId();

  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-slate-300 text-xs">{label}</span>

      <Input id={id} className="border-card" value={value} onBlur={onBlur} onChange={e => onChange(e.target.value)} />
    </label>
  );
};

export { LabeledInput };

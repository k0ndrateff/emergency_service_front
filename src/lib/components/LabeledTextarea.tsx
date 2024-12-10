import {useId} from "react";
import {Textarea} from "@/lib/components/ui/textarea.tsx";

interface Props {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
}

const LabeledTextarea = (props: Props) => {
  const { label, value, onBlur, onChange } = props;

  const id = useId();

  return (
    <label htmlFor={id} className="flex flex-col gap-1.5">
      <span className="text-slate-300 text-xs">{label}</span>

      <Textarea id={id} className="border-card resize-none" value={value} onBlur={onBlur} onChange={e => onChange(e.target.value)} />
    </label>
  );
};

export { LabeledTextarea };

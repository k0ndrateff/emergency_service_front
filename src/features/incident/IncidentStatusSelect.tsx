import {LabeledSelect} from "@/lib/components/LabeledSelect.tsx";
import {SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/lib/components/ui/select.tsx";

interface Props {
  value: number;
  onBlur: () => void;
  onChange: (value: number) => void;
}

const IncidentStatusSelect = (props: Props) => {
  const { value, onBlur, onChange } = props;

  return (
    <LabeledSelect label="Статус" value={String(value)} onChange={(value) => onChange(Number(value))}>
      <SelectTrigger className="w-full" onBlur={onBlur}>
        <SelectValue placeholder="Статус" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Новый</SelectItem>
        <SelectItem value="2">Принятый</SelectItem>
        <SelectItem value="3">В работе</SelectItem>
        <SelectItem value="4">Завершен</SelectItem>
      </SelectContent>
    </LabeledSelect>
  );
};

export { IncidentStatusSelect };

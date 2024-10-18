import {LabeledSelect} from "@/lib/components/LabeledSelect.tsx";
import {SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/lib/components/ui/select.tsx";

interface Props {
  value: number;
  onBlur: () => void;
  onChange: (value: number) => void;
}

const IncidentPrioritySelect = (props: Props) => {
  const { value, onBlur, onChange } = props;

  return (
    <LabeledSelect label="Приоритет" value={String(value)} onChange={(value) => onChange(Number(value))}>
      <SelectTrigger className="w-full" onBlur={onBlur}>
        <SelectValue placeholder="Приоритет" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Экстренный</SelectItem>
        <SelectItem value="2">Неотложный</SelectItem>
        <SelectItem value="3">Низкий</SelectItem>
        <SelectItem value="4">Ложный</SelectItem>
      </SelectContent>
    </LabeledSelect>
  );
};

export { IncidentPrioritySelect };

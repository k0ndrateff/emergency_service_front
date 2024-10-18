import {LabeledSelect} from "@/lib/components/LabeledSelect.tsx";
import {SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/lib/components/ui/select.tsx";

interface Props {
  value: number;
  onBlur: () => void;
  onChange: (value: number) => void;
}

const DangerClassSelect = (props: Props) => {
  const { value, onBlur, onChange } = props;

  return (
    <LabeledSelect label="Класс опасности" value={String(value)} onChange={(value) => onChange(Number(value))}>
      <SelectTrigger className="w-full" onBlur={onBlur}>
        <SelectValue placeholder="Класс опасности" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="1">Первый</SelectItem>
        <SelectItem value="2">Высокий</SelectItem>
        <SelectItem value="3">Средний</SelectItem>
        <SelectItem value="4">Низкий</SelectItem>
      </SelectContent>
    </LabeledSelect>
  );
};

export { DangerClassSelect };

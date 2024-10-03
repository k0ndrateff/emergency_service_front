import {Button} from "@/lib/components/ui/button.tsx";
import {Input} from "@/lib/components/ui/input.tsx";
import {useState} from "react";
import {useCreateOperator} from "@/api/operators/operatorsQueries.ts";

const CreateOperatorForm = () => {
  const [name, setName] = useState("");

  const { mutate: createOperator, isPending: isCreating } = useCreateOperator();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    createOperator(name);
  };

  return (
    <form className="w-full flex items-center gap-2" onSubmit={handleSubmit}>
      <Input value={name} disabled={isCreating} placeholder="Фамилия, имя и отчество" onChange={(e) => setName(e.target.value)} />

      <Button type="submit" disabled={isCreating}>Войти</Button>
    </form>
  );
};

export { CreateOperatorForm };

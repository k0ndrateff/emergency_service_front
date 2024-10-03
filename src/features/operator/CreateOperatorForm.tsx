import {Button} from "@/lib/components/ui/button.tsx";
import {Input} from "@/lib/components/ui/input.tsx";
import {useEffect, useState} from "react";
import {useCreateOperator} from "@/api/operators/operatorsQueries.ts";
import {useAuthContext} from "@/lib/context/AuthContext.ts";
import {useNavigate} from "@tanstack/react-router";

const CreateOperatorForm = () => {
  const { login } = useAuthContext();

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const { mutate: createOperator, isPending: isCreating, data: createdOperator } = useCreateOperator();

  useEffect(() => {
    if (createdOperator) {
      login(createdOperator.id);

      navigate({ to: '/dashboard' });
    }
  }, [createdOperator, login, navigate]);

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

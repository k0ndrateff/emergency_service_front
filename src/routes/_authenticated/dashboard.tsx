import {createFileRoute, useNavigate} from '@tanstack/react-router'
import {Button} from "@/lib/components/ui/button.tsx";
import {useAuthContext} from "@/lib/context/AuthContext.ts";

export const Route = createFileRoute('/_authenticated/dashboard')({
  component: Dashboard,
});

function Dashboard() {
  const { logout } = useAuthContext();

  const navigate = useNavigate();

  const handleClick = () => {
    logout();

    navigate({ to: '/login' });
  };

  return (
    <div>
      Только для зарегистрированных!

      <Button onClick={handleClick}>Выйти</Button>
    </div>
  );
}

import {useAuthContext} from "@/lib/context/AuthContext.ts";
import {useGetOneOperator} from "@/api/operators/operatorsQueries.ts";
import {useNavigate} from "@tanstack/react-router";
import {flushSync} from "react-dom";

const LogoutBlock = () => {
  const { userId, logout } = useAuthContext();

  if (!userId)
    throw new Error("Failed to get userId from AuthContext in LogoutBlock.");

  const navigate = useNavigate();

  const handleClick = () => {
    flushSync(() => {
      logout();

      navigate({ to: '/login' });
    });
  };

  const { data: operator } = useGetOneOperator(userId);

  if (!operator)
    return null;

  return (
    <div className="flex flex-col items-end justify-end gap-0.5">
      <span className="text-white text-xs">
        {`${operator.first_name} ${operator.last_name} ${operator.middle_name}`}
      </span>

      <span className="text-blue-700 text-xs cursor-pointer hover:text-blue-700/90 active:text-blue-700/80 select-none" onClick={handleClick}>
        Завершить смену
      </span>
    </div>
  );
};

export { LogoutBlock };

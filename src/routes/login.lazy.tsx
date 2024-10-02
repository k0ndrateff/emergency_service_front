import { createLazyFileRoute } from '@tanstack/react-router'
import {AmbulanceIcon} from "@/assets";

export const Route = createLazyFileRoute('/login')({
  component: Login,
})

function Login() {
  return (
    <div className="w-full min-h-dvh p-12 flex flex-col">
      <div className="flex flex-col gap-8">
        <div className="flex items-end gap-4">
          <h1 className="text-6xl">Вход в систему</h1>

          <AmbulanceIcon className="w-[92px]" />
        </div>
      </div>
    </div>
  );
}

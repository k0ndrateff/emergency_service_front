import { createFileRoute } from '@tanstack/react-router'
import { AmbulanceIcon } from '@/assets'
import { queryClient } from '@/api/queryClient.ts'
import { getAllOperatorsQueryOptions } from '@/api/operators/operatorsQueries.ts'
import {useSuspenseQuery} from "@tanstack/react-query";
import {SelectOperatorButton} from "@/features/operator/SelectOperatorButton.tsx";

export const Route = createFileRoute('/login')({
  loader: () => queryClient.ensureQueryData(getAllOperatorsQueryOptions),
  component: Login,
})

function Login() {
  const { data: operators } = useSuspenseQuery(getAllOperatorsQueryOptions);

  return (
    <div className="w-full min-h-dvh p-12 flex flex-col">
      <div className="flex flex-col gap-8 w-fit">
        <div className="flex items-end gap-4">
          <h1 className="text-6xl">Вход в систему</h1>

          <AmbulanceIcon className="w-[92px]" />
        </div>

        <div className="flex flex-col gap-24">
          <section className="flex flex-col gap-2">
            <h2 className="font-bold small-caps">Выберите оператора</h2>

            {operators.map((operator) => (
              <SelectOperatorButton operator={operator} />
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}

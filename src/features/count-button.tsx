import { useReducer } from "react"

export const CountButton = () => {
  const [count, increase] = useReducer((c) => c + 1, 0)

  return (
    <button
      onClick={() => increase()}
      type="button"
      className="plasmo:flex plasmo:flex-row plasmo:items-center plasmo:px-4 plasmo:py-2 plasmo:text-sm plasmo:rounded-lg plasmo:transition-all plasmo:border-none
      plasmo:shadow-lg plasmo:hover:shadow-md
      plasmo:active:scale-105 plasmo:bg-slate-50 plasmo:hover:bg-slate-100 plasmo:text-slate-800 plasmo:hover:text-slate-900">
      Count: <span className="plasmo:inline-flex plasmo:items-center plasmo:justify-center plasmo:w-8 plasmo:h-4 plasmo:ml-2 plasmo:text-xs plasmo:font-semibold plasmo:rounded-full">{count}</span>
    </button>
  )
}

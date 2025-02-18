"use client"
import { ExampleCard } from "@/components/example-card.tsx"
import React from "react"
import { Outlet } from "react-router"

export const TimeContext = React.createContext<Date | null>(null)

const UseHook = () => {
  return (
    <TimeContext value={new Date()}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ExampleCard title="use context" to="use-context" />
        <ExampleCard title="use data" to="use-data" />
        <ExampleCard
          title={<p className="text-6xl font-bold">?</p>}
          to="use-in-loop"
          className="border-destructive text-destructive shadow-destructive"
        />

        <div className="col-span-full flex items-center justify-center p-12">
          <Outlet />
        </div>
      </div>
    </TimeContext>
  )
}

export default UseHook

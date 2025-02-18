import { ExampleCard } from "@/components/example-card.tsx"

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-4">
      <ExampleCard
        to="/profile"
        title="Actions"
        description="Example of a profile form for useActionState"
      />
      <ExampleCard
        to="/chat-room"
        title="useOptimistic"
        description="Example of a message box for useOptimistic"
      />
      <ExampleCard
        to="/use-hook"
        title="use"
        description="Example of a message box for use hook"
      />
      <ExampleCard
        to="/resources"
        title="Loading resources"
        description="Example of a message box for loading resources"
      />
      <div className="col-span-1 h-[700px] md:col-span-2 lg:col-span-4" />
      <ExampleCard
        to="/expensive"
        title="A very expensive component"
        className="col-span-1 mb-8 border-destructive text-destructive shadow-2xl shadow-destructive md:col-span-2 lg:col-span-4"
      />
    </div>
  )
}

import AddTask from "./components/AddTask";

export default function Home() {
  return (
    <main className='max-w-4xl mx-auto bg-white h-screen'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl'>Todo List App</h1>
        <AddTask />
      </div>
    </main>
  );
}

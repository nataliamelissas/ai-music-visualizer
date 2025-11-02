import Notes from './notes';

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center m-5">
      <h1 className="text-4xl font-bold text-center sm:text-left">
        Music Visualizer
      </h1>
      <Notes />
    </main>
  );
}

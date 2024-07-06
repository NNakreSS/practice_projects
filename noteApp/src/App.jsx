import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import NoteAPP from "./components/note";
function App() {
  return (
    <>
      <NextUIProvider>
        <main className="dark text-foreground bg-background p-10 min-h-screen h-full m-auto">
          <NoteAPP />
        </main>
      </NextUIProvider>
    </>
  );
}

export default App;

import { Button } from "../@ibti/components";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-white flex  justify-center items-center gap-2 flex-col">
      <Button variant={"destructive"}>Teste</Button>
      <Button variant={"ghost"}>Teste</Button>
      <Button variant={"link"}>Teste</Button>
    </div>
  );
}

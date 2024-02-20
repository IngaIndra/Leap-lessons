import { Chip } from "@/components/Chip";
import { Highlight } from "@/components/Highlight";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <div className="dark:bg-black dark:text-white">
      <Header />
      <Highlight />
      <div className="flex flex-col items-center justify-center gap-2 mt-20">
        <Chip label="About me" />
        <Chip label={"Skills"} />
        <Chip label={"Experience"} />
      </div>

      <AwesomeButton type="primary">Button</AwesomeButton>
    </div>
  );
}

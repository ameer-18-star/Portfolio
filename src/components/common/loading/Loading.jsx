import { HashLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center fixed inset-0 bg-obsidian z-50">
      <HashLoader color="#22d3ee" speedMultiplier={2} size={64} />
      <p className="font-mono text-muted text-xs tracking-widest">BOOTING INTERFACE…</p>
    </div>
  );
};

export default Loading;

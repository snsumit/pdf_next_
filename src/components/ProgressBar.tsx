import { Progress } from "./ui/Progress";

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="w-full">
      <Progress value={progress} />
    </div>
  );
}

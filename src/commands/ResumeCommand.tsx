import { useEffect, useState } from "react";

export default function ResumeCommand() {
  const [progress, setProgress] = useState<number>(0);
  const progressBar = Array.from({ length: 20 }, (_, i) =>
    i < progress ? "#" : "   ",
  ).join("");
  const [msg, setMsg] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 20) {
          clearInterval(interval);

          return prev;
        }
        return prev + 1;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 20) {
      const link = document.createElement("a");
      link.href = "/Resume.pdf";
      link.download = "Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setMsg("Done.");
    }
  }, [progress]);

  return (
    <div className="flex flex-col">
      <span>Initializing Resume.pdf ....</span>
      <span style={{ whiteSpace: "pre" }}>
        Downloading |{progressBar}| {progress * 5}%
      </span>
      <span>{msg}</span>
    </div>
  );
}

import { ArrowRight } from "lucide-react";

interface IGetStartedButtonProps {
  text: string;
  className?: string;
  onClick?: () => void; 
}

export default function ButtonGetStarted({
  text = "Get started",
  className,
  onClick, 
}: IGetStartedButtonProps) {
  return (
    <div className="min-h-12 w-60 mt-4">
      <button
        onClick={onClick} 
        className={`group flex h-12 w-40 items-center justify-center gap-3 rounded-lg bg-buttonbackground p-2 font-bold transition-colors duration-100 ease-in-out hover:bg-white ${className}`}
      >
        <span className="text-white transition-colors duration-100 ease-in-out group-hover:text-buttonbackground">
          {text}
        </span>
        <div className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-full transition-transform duration-100 bg-white group-hover:bg-buttonbackground">
          <div className="absolute left-0 flex h-7 w-14 -translate-x-1/2 items-center justify-center transition-all duration-200 ease-in-out group-hover:translate-x-0">
            <ArrowRight
              size={16}
              className="size-7 transform p-1 text-white opacity-0 group-hover:opacity-100"
            />
            <ArrowRight
              size={16}
              className="size-7 transform p-1 text-buttonbackground opacity-100 transition-transform duration-300 ease-in-out group-hover:opacity-0"
            />
          </div>
        </div>
      </button>
    </div>
  );
}
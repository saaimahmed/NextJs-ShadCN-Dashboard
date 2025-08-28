
import {cn } from '@/lib/utils';
const customButton = ({
  disabled,
  isRounded,
}: {
  disabled: boolean;
  isRounded: boolean;
}) => {
  return (
    // <button className={`text-sm ${disabled ? 'bg-gray-300' : 'bg-blue-500'} ${isRounded && "rounded-full" ? "" : ""}`}>
    // Hello
    // </button>

    <button className={cn("text-sm", disabled ? "bg-gray-200" : "bg-blue-400", isRounded && "rounded-full" ,"p-4")}>hello</button>
  
  );
};

export default customButton;

import { motion } from "framer-motion";
import { Badge } from "./badge";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Tab = ({ text, selected, setSelected, discount = false }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={classNames(
        "relative w-fit px-4 py-2 text-sm font-semibold capitalize text-foreground transition-colors",
        discount && "flex items-center justify-center gap-2.5"
      )}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-full bg-background shadow-sm"
        ></motion.span>
      )}
      {discount && (
        <Badge
          className={classNames(
            "relative z-10 whitespace-nowrap bg-gray-100 text-xs text-black shadow-none hover:bg-gray-100",
            selected ? "bg-[#F3F4F6] hover:bg-[#F3F4F6]" : "bg-gray-300 hover:bg-gray-300"
          )}
        >
          Save 35%
        </Badge>
      )}
    </button>
  );
};

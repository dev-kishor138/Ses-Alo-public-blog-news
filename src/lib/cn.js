import clsx from "clsx";
import { twMerge } from "tw-merge";

export default function cn(...inputs) {
  return twMerge(clsx(inputs));
}

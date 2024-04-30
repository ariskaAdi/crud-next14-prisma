import Link from "next/link";
import { IoAddSharp } from "react-icons/io5";

export const CraeteButton = () => {
  return (
    <Link href="/contacts/create" className="inline-flex items-center justify-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
      <IoAddSharp size={20} />
      Create
    </Link>
  );
};

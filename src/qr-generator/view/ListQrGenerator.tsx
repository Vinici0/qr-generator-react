// BsInstagram
import { BsInstagram } from "react-icons/bs";
export const ListQrGenerator = () => {
  return (
    <div className="grid grid-cols-12 gap-4 bg-slate-400">
      <div className="bg-gray-200 col-span-5">
        <div className="flex flex-col flex-grow px-4 mt-5">
          <div className="flex flex-row justify-start items-center">
            <BsInstagram className="w-7 h-7 text-black" />
            <span className="ml-4">Instagram</span>
          </div>
          <div></div>
        </div>
      </div>
      <div className="bg-gray-200 col-span-2">1</div>
      <div className="bg-gray-200 col-span-3">1</div>
      <div className="bg-gray-200 col-span-2">1</div>
    </div>
  );
};

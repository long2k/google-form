import { useSession } from "next-auth/react";
import Link from "next/link";

const TopCard = () => {
  const { data: session } = useSession()
  return (
    <div className="w-full h-fit bg-white border overflow-hidden rounded-[10px] ">
      <div className="h-[10px] bg-violet-800"></div>
      <div className="p-[24px]">
        <div className="pb-[12px]">
          <p className="text-[24pt] font-medium">Hobbies Test</p>
        </div>
        <hr className="z-[3]" />
        <div className="pt-[12px] ">
          <div className="flex justify-between">
            <div className="w-full flex gap-x-2">
              <p className="text-sm font-bold text-slate-600">
              {session?.user?.email}
              </p>
              <Link href={"#"} className="text-sm font-light text-sky-600">
                Chuyển đổi tài khoản
              </Link>
            </div>
            <div>
              <p className="text-xs">Đã lưu bản nháp</p>
            </div>
          </div>
          <div className="flex">
            <p className="font-light text-slate-600 text-slate-400 text-sm">
              Không được chia sẻ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;

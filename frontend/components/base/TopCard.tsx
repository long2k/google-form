import Link from "next/link"




const TopCard = () => {
    return (
        <div className="min-w-[640px] h-fit bg-white border rounded-[10px] ">
            <div className="h-[10px] bg-purple-500"></div>
            <div>
                <p className="text-2xl font-medium">Mẫu không có tiêu đề</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <div className="w-full flex gap-x-2">
                    <p className="text-sm font-bold text-slate-600">truongquanglong777@gmail.com</p>
                    <Link href={"#"} className="text-sm font-light text-sky-600">Chuyển đổi tài khoản</Link>
                </div>
                <div>
                    <p className="text-xs">Đã lưu bản nháp</p>
                </div>
            </div>
            <div className="flex">
                <p className="font-light text-slate-600 text-slate-400 text-sm">Không được chia sẻ</p>
            </div>
        </div>
    )
}

export default TopCard
import Menu from "./Menu";

interface Props {
  children: React.ReactNode;
}

export default function UserAccountLayout({ children }: Props) {
  return (
    <div>
      <div className="flex justify-between">
        {/* breadcrumb component */}
        <div> breadcumb component</div>
        <div>
          <span>
            Welcome <span className="text-accent">User</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5">
        {/* menu */}
        <div className="col-span-1 ">
          <Menu />
        </div>
        <div className="col-span-2 ">
          {/* profile/ wishlist/ order history/ order detail component */}
          {children}
        </div>
      </div>
    </div>
  );
}

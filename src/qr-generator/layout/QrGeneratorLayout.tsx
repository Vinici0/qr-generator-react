import { SideBar } from "../components";

interface QrGeneratorLayoutProps {
  children?: React.ReactNode;
}

// const drawerWidth:int = 240;
export const QrGeneratorLayout = ({ children }: QrGeneratorLayoutProps) => {
  return (
    <div>
      {/*Navbar*/}

      {/*Sidebar*/}
      <div className="flex overflow-hidden bg-white rounded-lg ">
        <SideBar />
        <div className="flex flex-col flex-1 w-0 overflow-hidden">
          <main className="relative flex-1 overflow-y-auto focus:outline-none">
            <div className="py-6">
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                {children}
              </div>
              <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                <div className="py-4">
                  <div className="rounded-lg bg-neutral-50 h-96"></div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* <main>{children}</main> */}
    </div>
  );
};

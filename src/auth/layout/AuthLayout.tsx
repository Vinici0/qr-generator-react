interface AuthLayoutProps {
  children: React.ReactNode;
  text?: string;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="h-screen flex flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8 items-center">
      <div className="flex items-center justify-center my-9">
        <img
          className="h-20 w-20"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="ml-2 text-3xl font-extrabold text-neutral-600">
          Qr Generator
        </h2>
      </div>

      <section className="overflow-hidden border-2 border-gray-300 rounded-xl ">
        <div className="flex min- overflow-hidden">
          <div className="flex flex-col justify-center flex-1 px-4 py-12 overflow-hidden sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="w-full max-w-xl mx-auto lg:w-96">
              <div>
                {/* <div className="flex items-center justify-center">
                  <p>{text}</p>
                  <span className="mx-2">
                  </span>
                  <Link
                    to="/auth/register"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Regístrate
                  </Link>
                </div> */}

                {/* <a className="text-blue-600 text-medium" href="/groups/login/">
                  Qr Generator
                </a>
                <h2 className="mt-6 text-3xl font-extrabold text-neutral-600">
                  Iniciar sesión.
                </h2> */}
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


const inputs = {
    username: "Username:",
    password: "Password:",
    checkbox: "Remember me",
    button: "Login",
}

const Login = () => {
  return (
    <header className="px-16 h-screen flex justify-center items-center">
      <main className="border-2 border-slate-300 rounded-sm border-solid p-16 w-2/5 mx-auto">
        <form className="flex flex-col gap-12 " action="">
          <section className="flex items-center gap-4 w-full">
            <div className="flex-auto w-32 text-sm">
              <label htmlFor="username">{inputs.username}</label>
            </div>
            <div className="flex-auto w-full">
              <input
                className="transition delay-50 duration-300 border border-slate-300 outline-0 focus:border-orange-200 rounded-sm border-solid px-4 py-2 w-full text-opacity-20 text-light text-sm"
                placeholder="Enter username"
                type="text"
                name="username"
                id="username"
              />
            </div>
          </section>
          <section className="flex items-center gap-4 w-full">
            <div className="flex-auto w-32 text-sm">
              <label htmlFor="password">{inputs.password}</label>
            </div>
            <div className="flex-auto w-full">
              <input
                className="transition delay-50 duration-300 border border-slate-300 outline-0 focus:border-orange-200 rounded-sm border-solid px-4 py-2 w-full text-opacity-20 text-light text-sm"
                placeholder="Enter password"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </section>
          <section>
            <div className="flex items-center gap-12 ml-8 text-sm">
              <input
                className="transition delay-50 duration-300 border border-slate-300 rounded-sm border-solid p-1 outline-0 focus:border-orange-200"
                type="checkbox"
                name="remember"
                id="remember"
              />
              <p className="text-zinc-400">{inputs.checkbox}</p>
            </div>
          </section>
          <button
            className="transition delay-50 duration-300 ease-in-out border border-slate-300 bg-slate-100 rounded-sm border-solid p-1 hover:bg-slate-700 outline-0 hover:text-white hover:rounded-lg"
            type="submit"
          >
            {inputs.button}
          </button>
        </form>
      </main>
    </header>
  );
};

export default Login;

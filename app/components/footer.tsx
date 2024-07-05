import Link from "next/link";
import { LuCloudSunRain } from "react-icons/lu";
import { LuVegan } from "react-icons/lu";

const linkClassName = {
  classname: `transition ease-in-out delay-150 duration-300 block hover:text-lime-50
  leading-10 hover:translate-y-1 hover:scale-90`,
};

const Footer = () => {
  return (
    <footer className=" bg-lime-950 text-white px-2 md:px-16 py-8">
      {/* first footer with Partners section */}
      <section>
        <div className="py-8">
          <h2 className="transition border border-double bg-transparent border-current md:w-1/5 text-center py-4 hover:border-slate-200 hover:text-lime-50">
            Partners
          </h2>
        </div>
        <aside className="flex justify-center items-center gap-16 my-12">
          {/*  */}
          <div className="flex items-center gap-4">
            <LuCloudSunRain className="text-3xl text-lime-50" />
            <div className="transition ease-in-out delay-100 duration-200 hover:text-lime-50">
              {" "}
              <h4>Royce Co</h4>
              <p className="text-opacity-50 font-light text-sm tracking-wider">
                Imagination
              </p>
            </div>
          </div>
          {/*  */}
          <div className="flex items-center gap-4">
            <LuVegan className="text-3xl text-lime-50" />
            <div className="transition ease-in-out delay-100 duration-200 hover:text-lime-50">
              {" "}
              <h4>Eagle Flight</h4>
              <p className="text-opacity-50 font-light text-sm tracking-wider">
                Possible
              </p>
            </div>
          </div>
        </aside>
      </section>
      {/* second footer with list */}
      <section>
        <div className="py-8">
          <h4 className="transition border border-double bg-transparent border-current md:w-1/5 text-center py-4 hover:border-slate-200 hover:text-lime-50">
            More Resources
          </h4>
        </div>
        {/* footer list items  */}
        <div className="grid grid-cols-2 md:grid-none p-2 md:flex justify-center items-center gap-16 text-sm font-light">
          <div>
            <ul>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Salter goo
                </Link>
              </li>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Salter goo
                </Link>
              </li>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Salter goo
                </Link>
              </li>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Salter goo
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Drisos sauce
                </Link>
              </li>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Drisos sauce
                </Link>
              </li>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Drisos sauce
                </Link>
              </li>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Drisos sauce
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Lorem ipsum dolor sit.
                </Link>
              </li>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Lorem ipsum dolor sit.
                </Link>
              </li>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Lorem ipsum dolor sit.
                </Link>
              </li>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Lorem ipsum dolor sit.
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Maude Clause
                </Link>
              </li>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Maude Clause
                </Link>
              </li>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Maude Clause
                </Link>
              </li>
              <li>
                <Link className={linkClassName.classname} href="/">
                  Maude Clause
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

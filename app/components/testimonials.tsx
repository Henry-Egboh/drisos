import Image from "next/image";
import bruce from "../../public/bruce-mars.jpg";
import janosch from "../../public/janosch.jpg";
import mieke from "../../public/mieke-campbell.jpg";

const Testimonials = () => {
  return (
    <main className="pt-8 pb-16 md:pt-16 md:pb-32 md:px-16 bg-gray-50">
      <section className="text-center font-medium text-2xl text-slate-800 mb-8 md:mb-16">
        <h2>Testimonials</h2>
      </section>
      <section className="grid md:grid-cols-3 gap-4 md:place-content-center">
        {/* first card */}
        <article className="flex flex-col gap-2 p-4 md:p-16 bg-white rounded">
          <time className="italic font-light text-sm" dateTime="2024-05-23">
            May 23, 2024
          </time>
          <h2 className="text-slate-800 text-base font-medium">Awesome Tool</h2>
          <p className="line-clamp-3 lg:line-clamp-none text-opacity-50 text-sm/6 font-light">
            Deleniti quia fuga aut placeat. Eaque, vel dolores vero suscipit
            debitis veritatis tenetur? Nesciunt facere vero culpa suscipit
            sequi, quia aliquid beatae eius quibusdam aliquam sed quae aperiam
            sunt numquam commodi nemo omnis dolores velit.
          </p>
          <div className="flex gap-2 items-center">
            <Image
              className="rounded-[50%]"
              src={janosch}
              alt="customer"
              width={50}
              height={100}
            />
            <p className="text-sm font-light text-zinc-400">Maxus Loster</p>
          </div>
        </article>
        {/* second card */}
        <article className="flex flex-col gap-2 p-4 md:p-16 bg-white rounded">
          <time className="italic font-light text-sm" dateTime="2024-05-23">
            May 23, 2024
          </time>
          <h2 className="text-slate-800 text-base font-medium">Awesome Tool</h2>
          <p className="line-clamp-3 lg:line-clamp-none text-opacity-50 text-sm/6 font-light">
            Deleniti quia fuga aut placeat. Eaque, vel dolores vero suscipit
            debitis veritatis tenetur? Nesciunt facere vero culpa suscipit
            sequi, quia aliquid beatae eius quibusdam aliquam sed quae aperiam
            sunt numquam commodi nemo omnis dolores velit.
          </p>
          <div className="flex gap-2 items-center">
            <Image
              className="rounded-[50%]"
              src={mieke}
              alt="mieke"
              width={50}
              height={100}
            />
            <p className="text-sm font-light text-zinc-400">Maxus Loster</p>
          </div>
        </article>
        {/* third card */}
        <article className="flex flex-col gap-2 p-4 md:p-16 bg-white rounded">
          <time className="italic font-light text-sm" dateTime="2024-05-23">
            May 23, 2024
          </time>
          <h2 className="text-slate-800 text-base font-medium">Awesome Tool</h2>
          <p className="line-clamp-3 lg:line-clamp-none text-opacity-50 text-sm/6 font-light">
            Deleniti quia fuga aut placeat. Eaque, vel dolores vero suscipit
            debitis veritatis tenetur? Nesciunt facere vero culpa suscipit
            sequi, quia aliquid beatae eius quibusdam aliquam sed quae aperiam
            sunt numquam commodi nemo omnis dolores velit.
          </p>
          <div className="flex gap-2 items-center">
            <Image
              className="rounded-[50%]"
              src={bruce}
              alt="bruce"
              width={50}
              height={100}
            />
            <p className="text-sm font-light text-zinc-400">Maxus Loster</p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Testimonials;

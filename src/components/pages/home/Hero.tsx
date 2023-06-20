import bgHero from "../../../../public/assets/images/home/bg-hero.jpg";
import logoApple from "../../../../public/assets/logos/apple.png";
import logoPlayStore from "../../../../public/assets/logos/play-store.png";

export default function Hero () {
  return (
    <section className="w-full flex flex-col gap-y-5">
      <article className="lg:w-7/12 2xl:w-5/12 mx-auto flex flex-col gap-y-2 text-center text-custom-gray">
        <h2 className="text-lg md:text-2xl text-left font-semibold">
          “ People who loves to eat are always Best People
        </h2>
        <h2 className="text-base md:text-lg text-custom-orange text-right font-bold">
          JULIA CHILD ”
        </h2>
      </article>

      <article className="w-full mx-auto overflow-clip rounded-2xl h-[10rem] md:h-[25rem] relative">
        <div className="top-0 left-0 w-full h-full absolute flex flex-col justify-center px-4 gap-5 md:pl-16 md:gap-10">
          <h1 className="text-lg sm:text-2xl md:w-5/12 md:text-4xl text-white leading-tight">
            Encuentra las mejores
            recetas para ti y
            tu familia
          </h1>
          <div className="flex gap-x-5">
            <button className="flex items-center gap-5 bg-red-700 text-white px-4 py-2 rounded-2xl">
              <img src={logoApple} className='w-6 h-6 md:w-8 md:h-8' />
              <div className="hidden sm:flex flex-col text-left">
                <h5>Descargar desde</h5>
                <h5>App Store</h5>
              </div>
            </button>
            <button className="flex items-center gap-5 bg-red-700 text-white px-4 py-2 rounded-2xl">
              <img src={logoPlayStore} className='w-6 h-6 md:w-8 md:h-8' />
              <div className="hidden sm:flex flex-col text-left">
                <h5>Descargar desde</h5>
                <h5>Play Store</h5>
              </div>
            </button>
          </div>
        </div>
        <img className="w-full h-full object-fill" src={bgHero} loading="lazy" />
      </article>
    </section>
  )
}
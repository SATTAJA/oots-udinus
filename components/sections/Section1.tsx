export default function Section1() {
  return (
    <section className="mb-52 flex min-h-[70vh] items-center justify-center">
      <div id="home" className="flex flex-col">
        {/* Teks sambutan */}
        <div className="mb-2 text-xl">
          <p>Hi!, Welcome to my</p>
        </div>

        {/* Teks utama: PORTOFOLIO */}
        <div className="flex">
          {/* Kata pertama */}
          <p className="cursor-default text-9xl font-bold">PORTO</p>

          {/* Kata kedua dengan efek outline */}
          <p
            className="cursor-pointer text-9xl font-bold text-transparent transition-all duration-500 hover:text-black"
            style={{
              WebkitTextStroke: '2px black',
            }}
          >
            FOLIO
          </p>
        </div>
      </div>
    </section>
  )
}

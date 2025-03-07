import Nav from './nav';

export default function Header() {
  return (
    <header className="text-white-n sticky top-0 bg-black-m z-99 w-full">
      <div className="w-full lg:max-w-6xl mx-auto flex justify-between">
        <a href="" className="flex items-center font-extrabold text-xl py-4 px-2">
          <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/PriskoJrMod.png" alt="Prisko Jr Mod Logo" width={28} height={28} />
          <span className="ms-2">Prisko Jr Mod</span>
        </a>
        <Nav />
      </div>
    </header>
  );
}

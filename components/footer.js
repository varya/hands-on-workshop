export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-2 mb-6 text-black">
            <p className="text-v-red no-underline hover:no-underline font-bold text-xl lg:text-2xl">
              HANDS-ON WITH DESIGN SYSTEMS
            </p>
          </div>
          <div className="flex-1 text-right text-v-red">
            ©{" "}
            <a
              href="https://varya.me"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold  underline hover:no-underline"
            >
              Varya Stepanova
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

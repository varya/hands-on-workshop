import Logo from "../public/hands_on_logo.svg";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-2 mb-6 text-black">
            <a
              className="text-pink-600 no-underline hover:no-underline font-bold text-xl lg:text-2xl"
              href="#"
            >
              <Logo width={40} height={40} className="inline mr-4" />
              HANDS-ON WITH DESIGN SYSTEMS
            </a>
          </div>
          <div className="flex-1 text-pink">
            <a
              href="https://varya.me"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-pink-600 ml-auto"
            >
              © Varya Stepanova
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

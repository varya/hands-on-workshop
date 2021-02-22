import Logo from "../public/hands_on_logo.svg";

export default function Nav() {
  return (
    <nav id="header" className="fixed w-full z-30 top-0">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <a
            className="toggleColour no-underline hover:no-underline font-bold text-xl lg:text-4xl"
            href="#"
          >
            {/* <!--Icon from: https://www.flaticon.com/ --> */}
            <Logo width={40} height={40} className="inline mr-4" />
            HANDS-ON WITH DESIGN SYSTEMS
          </a>
        </div>
      </div>
    </nav>
  );
}

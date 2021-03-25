import Button from "@components/button";
export default function Nav() {
  return (
    <nav
      id="header"
      className="fixed top-0 z-30 w-full bg-white border-bshadow"
    >
      <div className="container flex flex-wrap items-center justify-between w-full max-w-5xl px-3 py-2 mx-auto mt-0">
        <div>
          <span className="text-sm text-v-red sm:text-base">
            HANDS-ON WITH DESIGN SYSTEMS{" "}
          </span>
          <span className="hidden text-v-yellow sm:inline">WORKSHOP</span>
        </div>
        <Button
          name="header-register"
          variant="gradient-small"
          className="my-0 text-sm"
          onClick={() =>
            (location.href =
              "https://www.eventbrite.com/e/hands-on-with-design-systems-may-tickets-148020289671")
          }
        >
          Register
        </Button>
      </div>
    </nav>
  );
}

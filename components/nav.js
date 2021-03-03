import Button from "@components/button";
export default function Nav() {
  return (
    <nav
      id="header"
      className="fixed w-full z-30 top-0 bg-white border-bshadow"
    >
      <div className="w-full container max-w-5xl mx-auto px-3 flex flex-wrap items-center justify-between mt-0 py-2">
        <div>
          <span className="text-v-red text-sm sm:text-base">
            HANDS-ON WITH DESIGN SYSTEMS{" "}
          </span>
          <span className="text-v-yellow hidden sm:inline">WORKSHOP</span>
        </div>
        <Button
          name="header-register"
          variant="gradient-small"
          className="my-0 text-sm"
          onClick={() =>
            (location.href =
              "https://www.eventbrite.fi/e/hands-on-with-design-systems-tickets-143823667461")
          }
        >
          Register
        </Button>
      </div>
    </nav>
  );
}

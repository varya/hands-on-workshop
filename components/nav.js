import Button from "@components/button";
export default function Nav() {
  return (
    <nav
      id="header"
      className="fixed w-full z-30 top-0 bg-white border-bshadow"
    >
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div>
          <span className="text-v-red">HANDS-ON WITH DESIGN SYSTEMS </span>
          <span className="text-v-yellow">WORKSHOP</span>
        </div>
        <Button variant="gradient-small" className="my-0 text-sm">
          Register
        </Button>
      </div>
    </nav>
  );
}

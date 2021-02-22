export default function Footer() {
  return (
    <footer className="bg-blue-600">
      <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
        <li>
         ©{" "}
          <a
            href="https://varya.me"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Varya Stepanova
          </a>
        </li>
      </ul>
    </footer>
  );
}

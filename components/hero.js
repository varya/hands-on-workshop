export const HERO_HEIGHT = 64; //4rem
export default function Hero({ children }) {
  return (
    <div className="py-16 container max-w-5xl px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
      {children}
    </div>
  );
}

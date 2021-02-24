export const HERO_HEIGHT = 64; //4rem
export default function Hero({ children }) {
  return (
    <div className={`py-${HERO_HEIGHT / 4}`}>
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        {children}
      </div>
    </div>
  );
}

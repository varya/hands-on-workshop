export default function Toast() {
  return (
    <div className="flex-1 w-full h-full pt-8 bg-white">
      <div className="container flex-1 h-full max-w-5xl py-6 mx-auto bg-white">
        <h2 className="text-3xl font-bold text-gray-800">
          Making a toast
        </h2>
        <p className="pt-8 text-lg text-gray-800">
          Go to a Miro board of your team.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mt-8">
          Step 1 (5 minutes)
        </h3>
        <p className="pt-8 text-lg text-gray-800">
          Draw the stages of making a toast in the morning. You can go wild, we had some people who started with buying a farm because they needed to produce bread. But finally, you should have a nice crispy toast, and you have 5 steps to illustrate the steps.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mt-8">
          Step 2 (5 minutes)
        </h3>
        <p className="pt-8 text-lg text-gray-800">
          With your team members, merge all the steps you have into one timeline. Review each other's steps and collect them all into a sequence. If it happens that two or three of you have exactly the same steps, you can overlap them on top of each other. If these steps are even slightly different, keep them separate and give them the right order.
        </p>
        <h3 className="text-xl font-bold text-gray-800 mt-8">
          The boards
        </h3>
        <ul className="list-disc	pt-8 text-lg text-gray-800">
          <li>
            <a href="https://miro.com/app/board/o9J_lNcZsh8=/">Board # 1</a>
          </li>
          <li>
            <a href="https://miro.com/app/board/o9J_lNcZsss=/">Board # 2</a>
          </li>
          <li>
            <a href="https://miro.com/app/board/o9J_lNcbPy8=/">Board # 3</a>
          </li>
          <li>
            <a href="https://miro.com/app/board/o9J_lNcbP8g=/">Board # 4</a>
          </li>
          <li>
            <a href="https://miro.com/app/board/o9J_lNcbP4U=/">Board # 5</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

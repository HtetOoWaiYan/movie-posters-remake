export default function Toolbar() {
  return (
    <div className="mb-16 mt-12 grid w-full grid-cols-3">
      <div></div>
      <div className="relative w-full place-self-center">
        <input
          type="text"
          placeholder="Search movies"
          className="input input-bordered input-md input-primary w-full"
        />
        <button className="absolute right-4 top-[11px] hover:brightness-110 hover:duration-500">
          <kbd className="kbd kbd-sm">Enter</kbd>
        </button>
      </div>
      <select className="select select-ghost w-full max-w-xs place-self-end">
        <option disabled selected>
          Popular
        </option>
        <option>Top-rated</option>
        <option>Now Playing</option>
        <option>Upcoming</option>
      </select>
    </div>
  );
}

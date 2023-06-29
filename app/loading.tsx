export default function Loading() {
  return (
    <span className="absolute left-2/4 top-1/3 animate-pulse text-center duration-75">
      <span
        className="loading loading-ring loading-lg"
        aria-label="loading"
      ></span>
    </span>
  );
}

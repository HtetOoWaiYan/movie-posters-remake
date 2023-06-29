import Select from "#/ui/select";
import SearchBox from "#/ui/searchbox";

export default function Toolbar() {
  return (
    <div className="mb-16 mt-12 grid w-full grid-cols-3">
      <div></div>
      <SearchBox />
      <Select />
    </div>
  );
}

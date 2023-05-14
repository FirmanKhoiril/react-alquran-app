import { useGlobalContext } from "../utils/ContextAPI";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className="my-10  sticky top-[76px] z-20" onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search by surat"
        className="py-3 px-4 inline-flex grow min-w-full outline-none rounded-lg bg-[#27272a] min-h-[6.5vh] focus:border focus:border-white"
      />
    </form>
  );
};

export default SearchBar;

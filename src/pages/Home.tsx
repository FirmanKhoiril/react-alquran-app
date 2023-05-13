import { useQuery } from "react-query";
import { Hero } from "../layout";
import { fetchQuran } from "../api/FetchQuran";
import { IsiSurat, Loading, Error } from "../components";
import { useGlobalContext } from "../utils/ContextAPI";
import { Box, Typography } from "@mui/material";
import { TSurah } from "../types/Types";

const Home = () => {
  const { verse, setVerse } = useGlobalContext();
  const dataQuran = async (): Promise<TSurah> => {
    const data = await fetchQuran("1");
    setVerse(data?.verses);
    return data;
  };

  const dataVerses = Object.keys(verse).map((key) => {
    return { name: key, value: verse[key] };
  });

  const { data, isError, isFetching, isLoading, isSuccess } = useQuery<any>(["surah"], dataQuran, {
    refetchOnWindowFocus: false,
    staleTime: 60 * (10 * 60),
    refetchInterval: 60 * (10 * 60),
  });

  return (
    <div>
      <Hero />
      {isError && <Error />}
      {isFetching && isLoading ? (
        <Loading />
      ) : (
        isSuccess && (
          <Box sx={{ my: 2, display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="h4">{data?.["surah_name"]}</Typography>
            {dataVerses?.map((item: any, idx: number) => (
              <IsiSurat surat={item?.value} key={idx} />
            ))}
          </Box>
        )
      )}
    </div>
  );
};

export default Home;

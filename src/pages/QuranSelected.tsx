import { useParams } from "react-router-dom";
import { useGlobalContext } from "../utils/ContextAPI";
import { useQuery } from "react-query";
import { fetchQuran } from "../api/FetchQuran";
import { Box, Typography } from "@mui/material";
import { Error, IsiSurat, Loading } from "../components";
import { useEffect } from "react";
import { TVerses } from "../types/Types";
const QuranSelected = () => {
  const { verseDetail, setVerseDetail } = useGlobalContext();
  const { id } = useParams();

  const dataSurat = async () => {
    const res = await fetchQuran(`${id}`);
    setVerseDetail(data?.verses || {});
    return res;
  };

  const dataVerses = verseDetail
    ? Object.keys(verseDetail || {}).map((key: any) => {
        return { name: key, value: verseDetail[key as keyof typeof verseDetail] };
      })
    : [];

  useEffect(() => {
    setVerseDetail({});
  }, [id]);

  const { data, isLoading, isFetching, isError, isSuccess } = useQuery(["suratSelected", id], dataSurat, {
    refetchOnWindowFocus: false,
    staleTime: 3000,
    refetchInterval: 1000,
  });
  // console.log(data);
  return (
    <Box>
      {isError && <Error />}
      {isFetching && isLoading ? (
        <Loading />
      ) : (
        isSuccess && (
          <Box sx={{ my: 2, display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="h4">{data?.["surah_name"]}</Typography>
            {dataVerses?.map((item: TVerses) => (
              <IsiSurat surat={item?.value} key={item.name} />
            ))}
          </Box>
        )
      )}
    </Box>
  );
};

export default QuranSelected;

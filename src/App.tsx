import { useEffect, useState } from 'react';
import axios from 'axios';

import {
  AppWrapper,
  Header,
  HeaderText,
  HeadingContainer,
  TitleDiv,
  TagDiv,
  Overview,
  EarningReport,
  TableHead,
  TableHeadText,
} from './AppStyles';
import Search from './components/Search/Search';
import TableBody from './components/TableBody/TableBody';
import Pagination from './components/Pagination/Pagination';
import { SpinnerContainer } from './components/TableBody/TableBodyStyles';

interface UserData {
  username: string;
  dateAndTime: Date;
  status: string;
  value: number;
}

interface ApiResponse {
  data: UserData[];
  metadata?: {
    totalCount: number;
  };
}

function App() {
  const [userObj, setUserObj] = useState<ApiResponse>({ data: [] });
  const [searchObj, setSearchObj] = useState<UserData[]>([])
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiUrl

        if (search) {
          setIsLoading(true)
          apiUrl = `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/search?query=${search}`;
          const { data } = await axios.get<UserData[]>(apiUrl);
          console.log(data)
          setSearchObj(data);
          setIsLoading(false)
        } else {
          apiUrl = `https://theseus-staging.lithium.ventures/api/v1/analytics/tech-test/payouts?page=${page}&limit=8`;
          const { data } = await axios.get<ApiResponse>(apiUrl);
          setUserObj(data)
          setIsLoading(false);
        }
      } catch (error: any) {
        // console.log(error.message);
        setIsLoading(false);
        setError(error.message);
      }
    };

    fetchData();
  }, [page, search]);

  return (
    <AppWrapper>
      <Header>
        <HeaderText>Payouts</HeaderText>
      </Header>

      <HeadingContainer>
        <TitleDiv>
          <TagDiv />
          <Overview>Payout History</Overview>
        </TitleDiv>
        <Search setSearch={setSearch} />
      </HeadingContainer>

      <EarningReport>
        <TableHead>
          <TableHeadText>Date & Time</TableHeadText>
          <TableHeadText>Username</TableHeadText>
          <TableHeadText>Status</TableHeadText>
          <TableHeadText>Value</TableHeadText>
        </TableHead>

        <TableBody users={search ? searchObj : userObj.data} isloading={isLoading} error={error} />
        <Pagination page={page} total={userObj.metadata?.totalCount || 0} setPage={setPage} isloading={isLoading} />

        {searchObj.length == 0 && search && (
          <SpinnerContainer>
            <h4>No Result Found</h4>
          </SpinnerContainer>
        )}

      </EarningReport>
    </AppWrapper>
  );
}

export default App;

import React, { ChangeEvent } from 'react';
import { SearchWrapper, SearchField, Input } from './SearchStyles';

interface SearchProps {
    setSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearch }) => {
    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value);
    };

    return (
        <SearchWrapper>
            <SearchField>
                <Input type="text" placeholder="Search username" onChange={handleSearchChange} />
            </SearchField>
        </SearchWrapper>
    );
};

export default Search;

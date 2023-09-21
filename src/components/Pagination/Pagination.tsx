import React from 'react';
import { RoundEffect, FlexContainer, PaginateCtn } from './PaginationStyles';

interface PaginationProps {
    page: number;
    total: number;
    setPage: (page: number) => void;
    isloading: boolean;
}


const Pagination: React.FC<PaginationProps> = ({ page, total, setPage, isloading }) => {
    let maxPages = total;
    let items = [];
    let leftSide = page - 2;
    if (leftSide <= 0) leftSide = 1;
    let rightSide = page + 2;
    if (rightSide > maxPages) rightSide = maxPages;
    for (let number = leftSide; number <= rightSide; number++) {
        items.push(
            <RoundEffect
                key={number}
                active={number === page}
                onClick={() => {
                    setPage(number);
                }}
            >
                {number}
            </RoundEffect>
        );
    }

    const nextPage = () => {
        if (page < maxPages) {
            setPage(page + 1);
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const paginationRender = (
        <FlexContainer isloading={isloading}>
            <PaginateCtn>
                <RoundEffect active={items.length == page} onClick={prevPage}> &lsaquo; </RoundEffect>
                {items}
                <RoundEffect active={items.length == page} onClick={nextPage}> &rsaquo; </RoundEffect>
            </PaginateCtn>
        </FlexContainer>
    );

    return paginationRender;
};


export default Pagination;

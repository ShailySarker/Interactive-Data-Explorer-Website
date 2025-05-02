import React from 'react';

const Pagination = ({ currentPage, maxPage, onPageChange }) => {
    return (
        <div className="flex justify-center items-center xl:text-base lg:text-sm md:text-base text-sm font-medium xl:mt-10 lg:mt-8 md:mt-7 mt-5 xl:pb-24 lg:pb-20 md:pb-16 pb-10">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="mx-2 px-4 py-2 bg-[#A21D3C] text-white shadow-md rounded-xl disabled:opacity-50"
            >
                Prev
            </button>
            <span className="mx-2">
                Page {currentPage} of {maxPage}
            </span>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === maxPage}
                className="mx-2 px-4 py-2 bg-[#A21D3C] text-white shadow-md rounded-xl disabled:opacity-50"
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
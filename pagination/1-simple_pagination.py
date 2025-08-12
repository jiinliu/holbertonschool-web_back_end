#!/usr/bin/env python3
"""Simple pagination"""

import csv
from typing import List, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Return a tuple of (start_index, end_index) for pagination.
    Page is 1-indexed; indices are 0-indexed and end-exclusive.
    """
    start = (page - 1) * page_size
    end = page * page_size
    return start, end


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Return a page of the dataset.
        - Validates that page and page_size are ints > 0.
        - Uses index_range to compute slice bounds.
        - Returns [] if the slice is out of range.
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        start, end = index_range(page, page_size)
        data = self.dataset()

        return data[start:end]

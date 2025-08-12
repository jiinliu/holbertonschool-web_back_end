#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Deletion-resilient pagination.

        Returns:
            {
              'index': start index requested,
              'data': list of rows for this page,
              'page_size': len(data) actually returned,
              'next_index': first index after this page (or None if end)
            }
        """

        indexed = self.indexed_dataset()

        if index is None:
            index = 0
        assert isinstance(index, int)
        assert isinstance(page_size, int) and page_size > 0
        assert 0 <= index < len(indexed)

        data = []
        current = index

        max_key = max(indexed.keys()) if indexed else -1

        while len(data) < page_size and current <= max_key:
            if current in indexed:
                data.append(indexed[current])
            current += 1

        next_index = current if current <= max_key else None

        return {
            "index": index,
            "data": data,
            "page_size": len(data),
            "next_index": next_index,
        }

#!/usr/bin/env python3
"""Utility helpers for pagination.

This module provides small, well-documented helpers used to compute
index boundaries for paginated datasets.
"""


def index_range(page: int, page_size: int) -> tuple[int, int]:
    """Compute the start and end indices for a given page.

    Given a 1-indexed page number and a page size, return a tuple
    of (start_index, end_index) suitable for slicing a list.
    """
    start = (page - 1) * page_size
    end = start + page_size
    return start, end

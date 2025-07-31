#!/usr/bin/env python3
"""Import List type from typing module for type annotations."""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Returns the sum of a list of integers and floats."""
    return sum(mxd_lst)

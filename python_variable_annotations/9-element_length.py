#!/usr/bin/env python3
"""Import List type from typing module for type annotations."""
from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Takes an iterable (like a list or tuple) of sequences
    (like strings, lists, etc),
    and returns a list of tuples. Each tuple contains
    (the element itself, its length).
    """
    return [(i, len(i)) for i in lst]

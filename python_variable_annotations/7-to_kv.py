#!/usr/bin/env python3
"""
Importing Union and Tuple from the typing module.
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Returns a tuple with the string k and the square of v."""
    return (k, v ** 2)

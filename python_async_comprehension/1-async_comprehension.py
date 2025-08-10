#!/usr/bin/env python3
"""
This module provides a coroutine to asynchronously collect 10
random numbers into a list.
"""
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collect 10 random floats from async_generator and return them as a list.
    """
    return [num async for num in async_generator()]

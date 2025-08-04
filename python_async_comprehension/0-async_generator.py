#!/usr/bin/env python3
"""Module for async_generator coroutine.
The async_generator coroutine yields 10 random floats between 0 and 10, waiting 1 second asynchronously each time.
"""


import asyncio
import random
from typing import AsyncGenerator

async def async_generator() -> AsyncGenerator[float, None]:
    """Yield a random float between 0 and 10, 10 times, each after 1 second asynchronously."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)

#!/usr/bin/env python3
"""Module for measure_runtime.
This module measures the runtime for running async_comprehension 4 times in parallel.
"""

import asyncio
import time
from async_comprehension import async_comprehension

async def measure_runtime() -> float:
    """Run async_comprehension 4 times in parallel, measure total runtime and return it."""
    start = time.perf_counter()
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )
    end = time.perf_counter()
    return end - start

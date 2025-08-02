#!/usr/bin/env python3
"""
Module for running asynchronous random delays and collecting results.
"""
import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Run wait_random n times and return list of delays in order of completion..
    """
    tasks = []
    for _ in range(n):
        tasks.append(asyncio.create_task(wait_random(max_delay)))

    delays = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        delays.append(delay)
    return delays

# FIFO Queue
# https://www.codingem.com/what-is-a-fifo-queue/

# Deque objects
# https://docs.python.org/3/library/collections.html
from collections import deque


class Queue:
    def __init__(self):
        self._queue = deque()

    def __len__(self):
        return len(self._queue)

    def enqueue(self, value):
        return self._queue.append(value)

    def dequeue(self):
        if not len(self._queue):
            return None
        return self._queue.popleft()

    def search(self, index):
        if index < 0 or index >= len(self):
            raise IndexError()
        else:
            return self._queue[index]

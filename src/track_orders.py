from src.analyze_log import (
    most_requested_dish,
    never_requested_dish,
    days_never_visited,
)

from collections import defaultdict


def visited_days(log):
    days = defaultdict(int)
    for _, _, day in log:
        days[day] += 1
    return days


class TrackOrders:
    def __init__(self):
        self._orders = list()

    def __len__(self):
        return len(self._orders)

    def add_new_order(self, customer, order, day):
        self._orders([customer, order, day])

    def get_most_ordered_dish_per_costumer(self, customer):
        most_requested_dish(customer)

    def get_never_ordered_per_costumer(self, customer):
        never_requested_dish(customer)

    def get_days_never_visited_per_costumer(self, customer):
        days_never_visited(customer)

    def get_busiest_day(self):
        days = visited_days(self._orders)
        max_item = max(days, key=days.get)
        return max_item

    def get_least_busy_day(self):
        days = visited_days(self._orders)
        min_item = min(days, key=days.get)
        return min_item

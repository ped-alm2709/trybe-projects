from collections import defaultdict


def visited_days(log):
    days = defaultdict(int)
    for _, _, day in log:
        days[day] += 1
    return days


class TrackOrders:
    def __init__(self):
        self.filtered_list = []

    def __len__(self):
        return len(self.filtered_list)

    def add_new_order(self, customer, order, day):
        self.filtered_list.append([customer, order, day])

    def get_most_ordered_dish_per_costumer(self, customer):
        result = dict()
        for customer, meal, _ in self.filtered_list:
            result[customer] = meal

        return result[customer]

    def get_never_ordered_per_costumer(self, customer):
        result = dict()
        dishes = set()
        for customer, meal, _ in self.filtered_list:
            dishes.add(meal)
        if customer not in result:
            result[customer] = set()
        result[customer].add(meal)

        return dishes - result[customer]

    def get_days_never_visited_per_costumer(self, customer):
        result = dict()
        days = set()
        for customer, _, day in self.filtered_list:
            days.add(day)
            if customer not in result:
                result[customer] = set()
            result[customer].add(day)

        return days - result[customer]

    def get_busiest_day(self):
        days = visited_days(self.filtered_list)
        max_item = max(days, key=days.get)
        return max_item

    def get_least_busy_day(self):
        days = visited_days(self.filtered_list)
        min_item = min(days, key=days.get)
        return min_item

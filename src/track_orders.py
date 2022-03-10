from src.analyze_log import AnalyzeLog


class TrackOrders:
    def __init__(self):
        self.analyze_log = AnalyzeLog()

    def __len__(self):
        return len(self.analyze_log.total_orders)

    def add_new_order(self, customer, order, day):
        self.analyze_log.adding_log(customer, order, day)

    def get_most_ordered_dish_per_costumer(self, customer):
        self.analyze_log.most_requested_dish(customer)

    def get_never_ordered_per_costumer(self, customer):
        self.analyze_log.never_requested_dish(customer)

    def get_days_never_visited_per_costumer(self, customer):
        self.analyze_log.days_never_visited(customer)

    def get_busiest_day(self):
        self.analyze_log.busiest_day()

    def get_least_busy_day(self):
        self.analyze_log.least_busy_day()

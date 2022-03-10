# defaultdict:
# https://docs.python.org/3/library/collections.html#collections.defaultdict


import csv


class AnalyzeLog():
    def __init__(self):
        self.orders_report = dict()
        self.days_in_operation = dict()
        self.total_orders = dict()
        self.menu = set()

    def adding_log(self, customer, order, day):
        self.menu.add(order)
        if customer not in self.orders_report:
            self.orders_report[customer] = [(order, day)]
        else:
            self.orders_report[customer].append((order, day))

        if order not in self.total_orders:
            self.total_orders[order] = 1
        else:
            self.total_orders[order] += 1

        if day not in self.days_in_operation:
            self.days_in_operation[day] = 1
        else:
            self.days_in_operation[day] += 1

# Max value dictionary:
# https://datagy.io/python-get-dictionary-key-with-max-value/

# ValueError: I/O operation on closed file:
# https://pt.stackoverflow.com/questions/364156/erro-de-valueerror-i-o-operation-on-closed-file-ao-gerar-csv-com-python
    def most_requested_dish(self, customer):
        customer_log = dict()
        for order, _ in self.orders_report[customer]:
            if order not in customer_log:
                customer_log[order] = 1
            else:
                customer_log[order] += 1
        return max(customer_log, key=customer_log.get)

    def amount_of_preferred_dish(self, customer, dish):
        customer_log = dict()
        for order, _ in self.orders_report[customer]:
            if order not in customer_log:
                customer_log[order] = 1
            else:
                customer_log[order] += 1
        return customer_log[dish]

    def never_requested_dish(self, customer):
        dishes_log = set()
        for order, _ in self.orders_report[customer]:
            dishes_log.add(order)
        return self.menu.difference(dishes_log)

    def days_never_visited(self, customer):
        opened_days = set(day for day in self.days_in_operation.keys())
        visited_days = set()
        for _, day in self.orders_report[customer]:
            visited_days.add(day)
        return opened_days.difference(visited_days)


# Reading CSV file:
# https://www.geeksforgeeks.org/reading-csv-files-in-python/
def csv_reader(path_file):
    with open(path_file, mode='r') as file:
        data_log = csv.reader(file)
        return [row for row in data_log]


# Writing TXT file:
# https://www.geeksforgeeks.org/reading-writing-text-files-python/
def analyze_log(path_to_file):
    analyze_class = AnalyzeLog()

    with open(path_to_file) as file_csv:
        data_log = csv.reader(file_csv)
        for customer, order, day in data_log:
            analyze_class.adding_log(customer, order, day)

    data_report = [
        f"{analyze_class.most_requested_dish('maria')}\n",
        f"{analyze_class.amount_of_preferred_dish('arnaldo', 'hamburguer')}\n",
        f"{analyze_class.never_requested_dish('joao')}\n",
        f"{analyze_class.days_never_visited('joao')}\n"
    ]

    with open('./data/mkt_campaign.txt', 'w') as file_txt:
        file_txt.writelines(data_report)

import csv
# defaultdict:
# https://docs.python.org/3/library/collections.html#collections.defaultdict
from collections import defaultdict


# Reading CSV file:
# https://www.geeksforgeeks.org/reading-csv-files-in-python/
def csv_reader(path_file):
    with open(path_file, mode='r') as csv_file:
        csv_report = csv.reader(csv_file)
        return list(csv_report)


# Max value dictionary:
# https://datagy.io/python-get-dictionary-key-with-max-value/
def most_requested_dish(report, customer):
    most_requested_dish = defaultdict(int)
    for name, item, _ in report:
        if name == customer:
            most_requested_dish[item] += 1
    max_amount = max(most_requested_dish, key=most_requested_dish.get)
    return max_amount


def hamburguers_amount(report):
    quantity_of_hamburgers = 0
    for name, item, _ in report:
        if name == "arnaldo" and item == "hamburguer":
            quantity_of_hamburgers += 1
    return str(quantity_of_hamburgers)


def never_requested_dish(report, customer):
    orders = set()
    orders_by_customer = set()
    for name, item, _ in report:
        if name == customer:
            orders_by_customer.add(item)
        orders.add(item)
    return orders.difference(orders_by_customer)


def days_never_visited(report, customer):
    days = set()
    customer_days = set()
    for name, _, day in report:
        if name == customer:
            customer_days.add(day)
        days.add(day)
    return days.difference(customer_days)


def analyze_log(path_to_file):
    try:
        report = csv_reader(path_to_file)
    except FileNotFoundError:
        error = f"No such file or directory: '{path_to_file}'"
        raise FileNotFoundError(error)
    else:
        # Writing TXT file:
        # https://www.geeksforgeeks.org/reading-writing-text-files-python/
        with open("data/mkt_campaign.txt", mode="w") as file:
            file.write(
                f"{most_requested_dish(report, 'maria')}\n"
                f"{hamburguers_amount(report)}\n"
                f"{never_requested_dish(report, 'joao')}\n"
                f"{days_never_visited(report, 'joao')}\n"
            )

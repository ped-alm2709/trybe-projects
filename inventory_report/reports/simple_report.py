import csv


class SimpleReport():
    def __init__(self, path):
        self.path = path

    @classmethod
    def generate(path):
        with open(path, "r", encoding="iso-8859-1") as file:
            report_data = csv.DictReader(file)
            report_list = [report_data]
        print(report_list)


SimpleReport.generate('inventory_report/data/inventory.csv')

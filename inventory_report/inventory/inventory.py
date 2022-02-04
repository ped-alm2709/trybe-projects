import csv
from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport


class Inventory:
    def __init__(self, path, report_type):
        self.path = path
        self.report_type = report_type

    @staticmethod
    def import_data(self):
        reports = []
        with open(self.path) as file:
            reports_list = csv.DictReader(file, delimiter=',', quotechar='"')
            for report in reports_list:
                reports.append(report)

        if self.report_type == "simples":
            return SimpleReport.generate(reports)
        else:
            return CompleteReport.generate(reports)


Inventory.import_data('inventory_report/data/inventory.csv', 'simples')

import csv
from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport


class Inventory:
    @classmethod
    def read_file(cls, path):
        reports = []
        with open(path) as file:
            reports_list = csv.DictReader(file, delimiter=',', quotechar='"')
            for report in reports_list:
                reports.append(report)
        return reports

    @classmethod
    def import_data(cls, path, report_type):
        if report_type == "simples":
            return SimpleReport.generate(cls.read_file(path))
        else:
            return CompleteReport.generate(cls.read_file(path))


Inventory.import_data('inventory_report/data/inventory.csv', 'simples')

from inventory_report.inventory.inventory_file_reader import FileReader
from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport


class Inventory:

    @classmethod
    def read_file(cls, path):
        extension = path.split('.')[1]
        if extension == 'csv':
            data = FileReader.read_csv(path)
            return data
        elif extension == 'json':
            data = FileReader.read_json(path)
            return data
        elif extension == 'xml':
            data = FileReader.read_xml(path)
            return data

    @classmethod
    def import_data(cls, path, report_type):
        if report_type == "simples":
            return SimpleReport.generate(cls.read_file(path))
        else:
            return CompleteReport.generate(cls.read_file(path))


Inventory.import_data('inventory_report/data/inventory.csv', 'simples')

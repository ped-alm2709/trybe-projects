import csv
import json
import xmltodict
from inventory_report.reports.simple_report import SimpleReport
from inventory_report.reports.complete_report import CompleteReport


class Inventory:

    @classmethod
    def read_file(cls, path):
        extension = path.split('.')[1]
        print(extension)
        if extension == 'csv':
            data = []
            with open(path) as file:
                reports_list = csv.DictReader(
                    file, delimiter=',', quotechar='"')
                for report in reports_list:
                    data.append(report)
                return data
        elif extension == 'json':
            with open(path) as file:
                reports_list = json.load(file)
                data = reports_list
            return data

        # https://www.youtube.com/watch?v=1FBckemKu1Q xml to dict reference
        elif extension == 'xml':
            data = []
            with open(path, 'r', encoding='utf-8') as file:
                my_xml = file.read()
                teste = xmltodict.parse(my_xml)
                for d in teste['dataset']['record']:
                    data.append(d)
            return data

    @classmethod
    def import_data(cls, path, report_type):
        if report_type == "simples":
            return SimpleReport.generate(cls.read_file(path))
        else:
            return CompleteReport.generate(cls.read_file(path))


Inventory.import_data('inventory_report/data/inventory.csv', 'simples')

import json
import xmltodict
import csv


class FileReader():
    @classmethod
    def read_csv(cls, path):
        extension = path.split('.')[1]
        if extension == 'csv':
            data = []
            with open(path) as file:
                reports_list = csv.DictReader(
                    file, delimiter=',', quotechar='"')
                for report in reports_list:
                    data.append(report)
                return data

    @classmethod
    def read_json(cls, path):
        with open(path) as file:
            reports_list = json.load(file)
            data = reports_list
        return data

    @classmethod
    def read_xml(cls, path):
        data = []
        with open(path, 'r', encoding='utf-8') as file:
            my_xml = file.read()
            teste = xmltodict.parse(my_xml)
            for d in teste['dataset']['record']:
                data.append(d)
        return data

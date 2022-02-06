from inventory_report.importer.importer import Importer
import csv


class CsvImporter(Importer):
    @staticmethod
    def import_data(data):
        if data.endswith(".csv"):
            with open(data, "r") as f:
                dict_list = csv.DictReader(f)
                return list(dict_list)
        raise ValueError("Arquivo inválido")

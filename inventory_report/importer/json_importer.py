from inventory_report.importer.importer import Importer
import json


class JsonImporter(Importer):
    @staticmethod
    def import_data(path_file):
        if path_file.lower().endswith(".json"):
            with open(path_file, "r") as f:
                dict_list = json.load(f)
                return dict_list
        raise ValueError("Arquivo inválido")

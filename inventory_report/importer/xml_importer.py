# https://docs.python.org/3/library/xml.etree.elementtree.html#module-xml.etree.ElementTree
import xml.etree.ElementTree as ET
from inventory_report.importer.importer import Importer


class XmlImporter(Importer):
    @staticmethod
    def import_data(path_file):
        if path_file.lower().endswith(".xml"):
            tree = ET.parse(path_file)
            root = tree.getroot()
            dict_list = []
            for child in root:
                obj = {}
                for key in child:
                    obj[key.tag] = key.text
                dict_list.append(obj)
                print(dict_list)
            return dict_list
        raise ValueError("Arquivo inválido")

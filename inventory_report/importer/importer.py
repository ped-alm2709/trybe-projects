from abc import ABC, abstractmethod


class Importer(ABC):
    @abstractmethod
    def import_data(data):
        raise NotImplementedError

# https://stackoverflow.com/questions/44315961/when-to-use-raise-notimplementederror

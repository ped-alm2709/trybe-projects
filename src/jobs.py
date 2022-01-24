import csv
from functools import lru_cache


@lru_cache
def read(path):
    """Reads a file from a given path and returns its contents

    Parameters
    ----------
    path : str
        Full path to file

    Returns
    -------
    list
        List of rows as dicts
    """
    with open(path, "r", encoding="iso-8859-1") as file:
        read_file = csv.DictReader(file)
        dict_list = list(read_file)
    return dict_list

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
    # encoding="iso-8859-1" = codificação que caracteriza o pt-br
    with open(path, "r", encoding="iso-8859-1") as file:
        read_file = csv.DictReader(file)
        dict_list = list(read_file)
        print(dict_list[0])
    return dict_list

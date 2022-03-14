# sys module:
# https://pt.stackoverflow.com/questions/432235/como-funciona-o-m%C3%B3dulo-sys-do-python-e-para-que-ele-serve
# https://docs.python.org/3/library/sys.html

# How to print to stderr in Python
# https://stackoverflow.com/questions/5574702/how-to-print-to-stderr-in-python
# http://www.bosontreinamentos.com.br/programacao-em-python/guia-basico-da-funcao-print-em-python/

import sys


def txt_importer(path_file):
    if not path_file.endswith('.txt'):
        sys.stderr.write('Formato inválido\n')
    try:
        with open(path_file, 'r') as txt_file:
            return txt_file.read().split('\n')
    except FileNotFoundError:
        print(f"Arquivo {path_file} não encontrado", file=sys.stderr)

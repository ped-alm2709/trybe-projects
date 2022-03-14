import sys
from ting_file_management.file_management import txt_importer


def response_txt_prototype(path_file):
    data = txt_importer(path_file)
    sys.stdout.write(str({
            "nome_do_arquivo": path_file,
            "qtd_linhas": len(data),
            "linhas_do_arquivo": data
    }))


# Instance parameter: queue implemented in queue.py
def file_is_ok(path_file, instance):
    file_is_ok = False
    for index in range(len(instance)):
        if instance.search(index) == path_file:
            file_is_ok = True
    return file_is_ok


def process(path_file, instance):
    if not file_is_ok(path_file, instance):
        instance.enqueue(path_file)
        response_txt_prototype(path_file)


# sys.stdout.write
# https://stackoverflow.com/questions/3263672/the-difference-between-sys-stdout-write-and-print
def remove(instance):
    if len(instance) == 0:
        sys.stdout.write('Não há elementos\n')
    else:
        file = instance.dequeue()
        sys.stdout.write(f'Arquivo {file} removido com sucesso\n')


def file_metadata(instance, position):
    try:
        file_name = instance.search(position)
        response_txt_prototype(file_name)
    except IndexError:
        sys.stderr.write('Posição inválida\n')

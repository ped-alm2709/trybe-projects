from ting_file_management.file_process import txt_importer


def expected_format_response(word, index, instance, line):
    occurrences = list()
    file_name = instance.search(index)
    file = txt_importer(file_name)
    for index, line_index in enumerate(file):
        if word.lower() in line_index.lower():
            line_obj = {"linha": index + 1}
            if line:
                line_obj["conteudo"] = line_index
            occurrences.append(line_obj)

    return {
        "palavra": word,
        "arquivo": file_name,
        "ocorrencias": occurrences
    }


def exists_word(word, instance):
    all_occurences = list()
    for index in range(len(instance)):
        func_response = expected_format_response(word, index, instance, False)
        if func_response and len(func_response['ocorrencias']) != 0:
            all_occurences.append(func_response)

    return all_occurences


def search_by_word(word, instance):
    result = list()
    for index in range(len(instance)):
        func_response = expected_format_response(word, index, instance, True)
        if func_response and len(func_response['ocorrencias']) != 0:
            result.append(func_response)

    return result

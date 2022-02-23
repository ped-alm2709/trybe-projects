# Verificando tempo de execuçao:
# https://stackoverflow.com/questions/8220801/how-to-use-timeit-module


def study_schedule(permanence_period, target_time):
    if not target_time:
        return None

    counter = 0

    for entrance, exit in permanence_period:
        if type(entrance) is not int or type(exit) is not int:
            return None
        if entrance <= target_time <= exit:
            counter += 1

    return counter

# Anagramas em Python
# https://programacaocompython.blogspot.com/2010/01/anagramas.html

# KeyErrors
# https://docs.python.org/3/library/exceptions.html#KeyError


def characters_counter(string):
    dict_counter = dict()

    for letter in string:
        try:
            dict_counter[letter] += 1
        except KeyError:
            dict_counter[letter] = 1

    return dict_counter


def is_anagram(first_string, second_string):
    characters_counter(first_string)
    characters_counter(second_string)

    if characters_counter(first_string) == characters_counter(second_string):
        return True
    else:
        return False

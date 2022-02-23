# low_index = 0 e high_index = len(word - 1)


def is_palindrome_recursive(word, low_index, high_index):
    if type(word) is not str or word == "":
        return False

    if len(word) < 2 or (low_index, high_index == 0):
        return True

    if word[low_index] == word[high_index]:
        return is_palindrome_recursive(word, (low_index + 1), (high_index - 1))
    else:
        return False

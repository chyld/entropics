from random import randint, choice
from operator import add, sub


def randomizer():
    fns = [add_sub, mul, div, mod, square_root, binary, greek, equation]
    fn = choice(fns)
    return fn


def add_sub():
    ops = [{"py": add, "la": "+"}, {"py": sub, "la": "-"}]
    a = randint(0, 100)
    b = randint(0, 100)
    o = choice(ops)
    problem = rf"{a} {o['la']} {b}"
    answer = o["py"](a, b)
    return problem, answer


def mul():
    a = randint(0, 20)
    b = randint(0, 20)
    problem = rf"{a} \times {b}"
    answer = a * b
    return problem, answer


def div():
    a = randint(1, 20)
    b = randint(1, 20)  # do not divide by zero
    problem = rf"\frac{{{a}}}{{{b}}}"
    answer = a // b
    return problem, answer


def mod():
    a = randint(1, 20)
    b = randint(1, 20)  # do not divide by zero
    problem = rf"{a} \: \% \: {b}"
    answer = a % b
    return problem, answer


def square_root():
    a = randint(1, 100)
    problem = rf"\sqrt{{{a}}}"
    answer = int(a**0.5)
    return problem, answer


def binary():
    a = randint(0, 63)  # (2 ** 6) - 1
    problem = rf"{a:#08b}"  # 8 total digits = 0b + 6 digits, pad with zeros
    answer = a
    return problem, answer


def equation():
    a = randint(1, 20)
    b = randint(1, 100)
    c = randint(1, 100)
    problem = rf"{a}x + {b} = {c}"
    answer = int((c - b) / a)
    return problem, answer


def greek():
    letters = [
        "alpha",
        "beta",
        "gamma",
        "delta",
        "epsilon",
        "zeta",
        "eta",
        "theta",
        "iota",
        "kappa",
        "lambda",
        "mu",
        "nu",
        "xi",
        "omicron",
        "pi",
        "rho",
        "sigma",
        "tau",
        "upsilon",
        "phi",
        "chi",
        "psi",
        "omega",
    ]
    letter = choice(letters)
    problem = rf"\{letter}"
    answer = f"{letter}"
    return problem, answer

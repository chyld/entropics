from random import randint, choice
from operator import add, sub


def randomizer():
    fns = [
        two_pow,
        two_pow,
        two_pow,
        dot,
        dot,
        add_sub,
        add_sub,
        mul,
        div,
        mod,
        square_root,
        binary,
        binary,
        greek,
        greek,
        greek,
        greek,
        equation,
    ]
    fn = choice(fns)
    return fn


def two_pow():
    a = randint(0, 20)
    problem = rf"2^{{{a}}}"
    answer = 2**a
    return problem, answer


def dot():
    v1, v2 = [], []
    for _ in range(randint(1, 3)):
        v1.append(randint(1, 9))
        v2.append(randint(1, 9))
    answer = sum([a * b for a, b in zip(v1, v2)])
    problem = rf"\alpha = {v1} \: \beta = {v2} \: \overrightarrow{{\alpha\beta}}"
    return problem, answer


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

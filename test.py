from random import randint

seed = randint(1<<59, 1<<60)

def unhackable(x): return type('unhackable_' + str(x), (x,), {"__hash__": lambda self: super(x, self).__hash__() ^ seed})

uint = unhackable(int)

class uint(int):
    def __hash__(self):
        print(f'hash {self}')
        return (int(self), seed).__hash__()

dict.__hash__
print(hash(uint(3)))

a = {}
a[3] = 1
print(a[uint(3)])
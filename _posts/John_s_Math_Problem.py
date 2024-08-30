s = input()

def get_sum(s):
    n = len(s)
    if n == 1: return (int(s), 11, 2)
    left, dl, cl = get_sum(s[:n//2])
    right, dr, cr = get_sum(s[n//2:])
    return ((left*dr + right*cl) % 998244353, dl*dr % 998244353, cl*cr % 998244353)

print(get_sum(s)[0])
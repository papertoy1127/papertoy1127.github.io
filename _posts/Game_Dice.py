import sys
def input(): return sys.stdin.readline()
def print(*values, end='\n', sep=' '): sys.stdout.write(sep.join(map(str, values)) + end)

from math import prod

while True:
    l = input().split()
    if l[0] == '0': break
    c = int(l[0])
    x = int(l[-1])
    dices = [int(i[1:]) for i in l[1:-1]]
    dp = [[-1] * 1001 for _ in range(c)]

    def get_cnt(i, x):
        if dp[i][x] != -1: return dp[i][x]

        if i == c-1:
            dp[i][x] = 1 if 0 < x <= dices[-1] else 0
            return dp[i][x]
        
        cc = 0
        for n in range(x - dices[i], x):
            cc += get_cnt(i+1, n)
        dp[i][x] = cc
        return cc
    
    print(f'{get_cnt(0, x) / prod(dices):.5f}')
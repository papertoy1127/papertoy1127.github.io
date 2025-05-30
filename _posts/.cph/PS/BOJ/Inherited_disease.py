import sys
print = sys.stdout.write

d = int(input())
arr = [*map(int, input().split())]

s = 1
left = 0
fact = 1
gen = 1

for i in arr:
    left += i-1
    print(s + left)
    print('\n')

    fact *= gen
    s += fact
    gen += 1
    left *= gen

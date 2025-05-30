v, n = input().split()
n = int(n)
v = float(v)

def volume(a, b, x):
    return 2*b/3 + a*x - a*(x**3)/3 + a*(x**5)/10 - a*(x**7)/42 + a*(x**9)/216 - a*(x**11)/1320 + a*(x**13)/9360 - a*(x**15)/75600

for i in range(n):
    a, b, h = map(float, input().split())
    print(volume(a, b, h) - volume(a, b, 0))
from math import acos, pi, sin, cos
_,_,z = map(int, input().split())
a = acos(z/6371)

f = lambda theta: 2*pi*sin(theta+a) - theta
fprime = lambda theta: 2*pi*cos(theta+a) - 1
x0 = 0
if a < 1: x0 = 3
elif a < 2: x0 = 2
else: x0 = 1

for i in range(100000):
    x1 = x0 - f(x0)/fprime(x0)
    x0 = x1

print(6371*x0)
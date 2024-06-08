---
title: Linear Sieve (선형 체)
date: 2024-06-08 23:38:00 +0900
categories: [PS, Algorithm, 수학]
tags: []     # TAG names should always be lowercase
toc: true
comments: true
math: true
---

## 에라토스테네스의 체
<hr>
[에라토스테네스의 체](https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4)는 $n$ 이하의 소수의 리스트를 $O(n\ \text{log}\ \text{log}\ n)$ 시간에 구해주는 알고리즘입니다. 아래와 같이 작동하며, 유명한 알고리즘이니만큼 다들 알고 계실 것이라 생각하며 구현은 생략하겠습니다.

<span>
![에라토스테네스의 체 작동 원리](https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif)
</span>

일반적인 상황에서는 에라토스테네스의 체만으로 충분히 빠르게 작동합니다. 물론 $n$ 자체가 소수인지 판별하는 데에는 [밀러-라빈 소수판별법](https://ko.wikipedia.org/wiki/%EB%B0%80%EB%9F%AC-%EB%9D%BC%EB%B9%88_%EC%86%8C%EC%88%98%ED%8C%90%EB%B3%84%EB%B2%95) 등의 여러 다른 좋은 알고리즘들이 많이 존재하나, $n$ 이하의 <u>모든</u> 소수들을 구하는 데는 에라토스테네스의 체가 가장 간단하면서도 빠른 축에 속합니다.

에라토스테네스의 체의 시간복잡도가 $O(n\ log\ log\ n)$인 것은 유명한 사실이지만, 어째서 저러한 시간복잡도가 나오는지 증명하기는 쉽지 않습니다. 에라토스테네스의 체가 작동하는 과정을 살펴보면, 

- n보다 작은 2의 배수들을 모두 지운다.
- n보다 작은 3의 배수들을 모두 지운다.
- ...

이런 식으로, n보다 작은 모든 p에 대해 n보다 작은 모든 p의 배수들을 지우는 과정을 반복하는 것을 알 수 있습니다. 결국 에라토스테네스의 체를 수행하는 과정에서 수행되는 연산의 횟수는,

$ \displaystyle \sum_{\scriptstyle p\text{ prime}\atop \scriptstyle p\le n} \lfloor \frac{n}{p} \rfloor$ 
 
인 것 역시 알 수 있습니다. 물론 이렇게 정리하여도 저것을 계산하는 과정은 쉽지 않고, [소수의 역수의 합의 발산성](https://ko.wikipedia.org/wiki/%EC%86%8C%EC%88%98%EC%9D%98_%EC%97%AD%EC%88%98%EC%9D%98_%ED%95%A9%EC%9D%98_%EB%B0%9C%EC%82%B0%EC%84%B1)과 관련된 다음의 정리에 따라 시간 복잡도를 구할 수 있습니다.

$ \displaystyle \sum_{\scriptstyle p\text{ prime }\atop \scriptstyle p\le n}\frac1p \ge \ln \ln (n+1) - \ln\frac{\pi^2}6 $

우리는 에라토스테네스의 체를 더 개선하여, 시간 복잡도를 $O(n)$까지 끌어올리고자 합니다.

## 에라토스테네스의 체의 문제점
<hr>
에라토스테네스의 체를 수행 과정을 직접 따라가다 보면 문제점을 알 수 있습니다.

- 먼저 2에 대해서 배수를 지우는 작업을 수행합니다. 4, 6, 8, 10, 12, ...을 이어가며 배수를 지웁니다.
- 다음으로 3에 대해서 배수를 지우는 작업을 수행합니다. <u>6</u>, 9, <u>12</u>, 15, ...을 이어가며 배수를 지웁니다.
- 다음으로 5에 대해서 배수를 지우는 작업을 수행합니다. <u>10</u>, <u>15</u>, <u>20</u>, ...을 이어가며 배수를 지웁니다.

문제점이 보이시나요? 어떤 소수에 대해서, 그 소수보다 작은 소수에서 <u>이미 지워진 수를 다시 지우는 것</u>을 확인할 수 있습니다.  그렇다면 이 어떤 합성수가 한 번만 지워진다는 것을 보장할 수 있다면, 충분히 $O(n)$의 시간 복잡도를 달성할 수 있을 텐데요... 

조금 더 규칙성을 알아보기 위해, 어떤 합성수 n에 대해서 n이 <u>어떤 소수를 지우는 과정에서 처음으로 지워지는지</u>를 확인해보겠습니다.

- $4 = 2 \cdot 2$
- $6 = 2 \cdot 3$
- $8 = 2 \cdot 4$
- $9 = 3 \cdot 3$
- $10 = 2 \cdot 5$
- $12 = 2 \cdot 6$
- $14 = 2 \cdot 7$
- $15 = 3 \cdot 5$
- ...

위의 표에서, $n = p \cdot q$에서의 $p$가 바로 합성수 $n$을 최초로 지우게 되는 소수입니다. 그리고 $q$는 그 소수에 곱해진 수이죠. 여기서 우리는 한 가지 사실을 알 수 있는데, $q$는 <u>$p$보다 작은 소수를 약수로 가질 수 없다</u>는 것입니다. $q$가 $p$보다 작은 소수를 약수로 가진다면, 그 소수의 배수를 지우는 과정에서 먼저 $n$이 지워졌을 것이기 때문입니다. <br>이 성질은 바로 아래에서 이용하니 잘 기억해 두세요.

결국, 위 식에서의 $p$는 $n$의 최소 소인수(Smallest Prime Factor; SPF)이라고 할 수 있습니다. 그렇다면 이것을 이용해 어떻게 에라토스테네스의 체를 개선할 수 있을까요? 

그 전에, $\text{spf}(n)$을 $n$의 SPF(최소 소인수), $q_n = \dfrac{n}{\text{spf}(n)}$라고 정의합시다. 이제 $n = \text{spf}(n) \cdot q_n$이 성립합니다.

> **혹시 이해가 잘 가지 않는다면? (1)**
> 
> 예를 들어, $n = 18$이라고 가정해 봅시다. $18 = p \cdot q$에서,
> $18 = 3 \cdot 6$이라고 가정한다면, 에라토스테네스의 체를 수행하는 과정에서 **3의 배수**를 지우는 과정에서 18이 제일 먼저 지워졌다는 의미입니다. <br>
> 그런데, 실제로는 18은 2의 배수이기도 하기 때문에 2의 배수를 지우는 과정에서 먼저 지워지게 됩니다. 결과적으로 $p = 2$가 됩니다. 그리고 이러한 $p = 2$는 18을 소인수분해했을 때 ($18 = 2 \cdot 3^2$) 18이 가지는 소인수 중 가장 작은 소인수, 즉 최소 소인수가 됩니다.
> 
> 만약 도저히 이해할 수 없다면, 아래의 수식 전개는 잠시 생략하고 표부터 보시는 것을 추천합니다.
{: .prompt-tip }

이제 $\text{spf}(n)$보다 작은 어떤 소수 $p'$에 대하여 $p' \not\mid q_n$인 것을 이용합니다.<br>
($a \mid b$ 는 a가 b의 약수라는 뜻이고, $a \not\mid b$는 그렇지 않다는 의미입니다.)

$p' \not\mid q_n$이기 때문에 $\text{spf}(q)$는 $p'$가 될 수 없고, 그렇기에 $\text{spf}(n) \leq \text{spf}(q_n)$이 성립합니다. <br>
(왜냐하면 $q' < \text{spf}(n)$인 소수였기 때문입니다.)

이제 $n = \text{spf}(n) \cdot q_n$이라는 식을 다시 봅시다. $q_n$이 정해지면, 가능한 $\text{spf}(n)$도 정해지게 되고, 결과적으로 $n$ 역시 정해지게 됩니다.

후우, 식으로 전개하느라 머리가 아팠으려나요? 그림으로 보면 보다 쉽게 이해가 될 겁니다.

위의 설명을 생략하고 넘어오신 분들을 위해 간략히 설명하자면, $n$에 대해 정리했던 처음의 식을 $q$에 대해서 정리했다고 생각해주세요.

| $q_n$ | $\text{spf}(q)$ | $n$ |
|-------|-----------------|
| $2$   | $2$             | $2 \cdot 2$ |
| $3$   | $3$             | $2 \cdot 3$ | $3 \cdot 3$ |
| $4$   | $2$             | $2 \cdot 4$ |
| $5$   | $5$             | $2 \cdot 5$ | $3 \cdot 5$ | $5 \cdot 5$ |
| $6$   | $2$             | $2 \cdot 6$ |
| $7$   | $7$             | $2 \cdot 7$ | $3 \cdot 7$ | $5 \cdot 7$ | $7 \cdot 7$ |
| $8$   | $2$             | $2 \cdot 8$ |
| $9$   | $3$             | $2 \cdot 9$ | $3 \cdot 9$ |
| $10$  | $2$             | $2 \cdot 10$ |

우리가 방금 했던 것은 체에서 어떤 합성수를 <u>단 한 번만</u> 걸러내기 위한 과정이었습니다. 우리가 체를 수행하는 동안 해야 할 것은 다음과 같습니다.
- $q$를 2부터 쭉 증가시키면서, $\text{spf}(q)$ 이하의 소수 $p$에 대해 $p \cdot q$를 체에서 지운다.

이를 위해 우리에게 필요한 것은 $q$ 이하의 소수들의 리스트입니다. $q$보다 작은 소수들을 순회하다가, $p \mid q$인 순간 $\text{spf}(n) = \text{spf}(q)$가 되기 때문에 멈추면 됩니다.

$q$ 이하의 소수들의 리스트는 어디 있을까요? $q$ 이하의 수들 중 체에서 지워지지 않은 수가 바로 $q$ 이하의 소수들이죠! 다만 $q$ 이하의 소수들을 찾겠다고 $1$ ~ $q$까지 체를 순회하는 것은 비효율적이니, 미리 리스트를 하나 만들어 놓고 거기에 지워지지 않은 수들을 넣어두면 되겠습니다.

> **혹시 이해가 잘 가지 않는다면? (2)**
> 
> 이번엔 $q = 9$라고 가정해 봅시다. $9$보다 작은 소수들은 $2, 3, 5, 7$입니다.
>  
> $p = 2$일 때 $n = 2 \cdot 9 = 18$이 됩니다.<br>
> $p = 3$일 때 $n = 3 \cdot 9 = 27$이 됩니다.<br>
> $p = 5$일 때 $n = 5 \cdot 9 = 45$가 되는데, $\text{spf}(45) = 3 \not= 5$이므로 이는 불가능합니다.<br>
> 따라서 $p \mid q$가 되는 $p$까지만 배수를 지우는 과정을 진행해주면 됩니다.
{: .prompt-tip }

## 선형 체 (Linear Sieve)

바로 위 문단에서 말한 과정을 의사코드로 나타내면 다음과 같습니다.

```
let sieve = [0] * INF
let primes = []

for i in [2..INF]:
    if sieve[i] == 0:
        primes <- i
    
    for p in primes:
        sieve[i*p] = 1;
        if (i % p == 0):
            break
```

우리가 실제로 사용할 때는 범위를 무한대로 잡고 사용할 수 없기에, `N보다 작은 수`라는 조건을 추가해 주겠습니다.

```
let sieve = [0] * N
let primes = []

for i in [2..N]:
    if sieve[i] == 0:
        primes <- i
    
    for p in primes:
        if i*p >= N: // 체의 범위를 벗어남
            break

        sieve[i*p] = 1;
        if (i % p == 0):
            break
```

이제, `primes`가 바로 우리가 원하던 소수들의 배열입니다.

이 알고리즘이 바로 선형 체(Linear Sieve), 혹은 오일러가 최초로 사용하였다 하여 오일러의 체(Euler's Sieve)라고 불리우는 알고리즘입니다!

## 구현
Python 3 <small style="color: gray">실행 가능한 의사코드다운 모습이네요</small>
```py
N = 1000

sieve = [0] * N
primes = []

for i in range(2, N):
if sieve[i] == 0:
    primes.append(i)

for p in primes:
    if i*p >= N:
        break
    
    sieve[i*p] = 1
    if (i % p == 0):
        break

print(primes)
```

C#
```cs
List<int> LinearSieve(int n) {
    var sieve = new bool[n];
    var primes = new List<int>();

    for (int i = 2; i < n; i++) {
        if (!sieve[i]) primes.Add(i);

        foreach (var p in primes) {
            if (i*p >= n) break;

            sieve[i*p] = true;
            if (i % p == 0) break;
        }
    }

    return primes;
}
```

C++
```cpp
vector<int> linearSieve(int n) {
    vector<bool> sieve(n);
    vector<int> primes;

    for (int i = 2; i < n; i++) {
        if (!sieve[i]) primes.push_back(i);

        for (int p : primes) {
            if (i*p >= n) break;

            sieve[i*p] = true;
            if (i % p == 0) break;
        }
    }

    return primes;
}
```

### C++, C# 등지에서의 주의점
위에서 계산한 대로, 선형 체는 에라토스테네스의 체보다 빨라야 합니다. 중복된 계산이 없으니만큼 말이죠. 그래서 직접 실행 시간을 재 보면..?

```
Eratosthenes Sieve: 796ms
Linear Sieve: 890ms
```

으에..? 더 느리다는 충격적인 결과가 나왔습니다. 이는 동적 배열의 할당 과정에서 생기는 오버헤드로, 미리 소수 배열의 크기를 잡아 할당해주면 피할 수 있습니다. 그러면..?

```
Eratosthenes Sieve: 703ms
Linear Sieve: 468ms
```

선형 체가 훨씬 빠르게 동작하는 것을 알 수 있습니다.

아래는 수정된 코드입니다.
```cpp
vector<int> linearSieve(int n) {
    vector<bool> sieve(n);
    vector<int> primes(n); // n 이하의 소수의 개수는 자명하게 n보다 작습니다. 실제로는 이것보다 더 작게 할당해도 됩니다.
    int primecount = 0;

    for (int i = 2; i < n; i++) {
        if (!sieve[i]) primes[primecount++] = i;

        for (int a = 0; a < primecount; a++) {
            int p = primes[a];
            if (i*p >= n) break;

            sieve[i*p] = true;
            if (i % p == 0) break;
        }
    }

    // cout << primecount; // n이 고정되어 있다면, primecount의 최종 값으로 소수 배열의 크기를 할당해주면 됩니다.

    return primes;
}
```

## 마치며
하지만, 제가 지금까지 선형 체를 그저 '속도 향상'을 위해 사용한 적은 단 한 번뿐입니다. 

그렇다면 선형 체로 또 무엇을 할 수 있을까요? 선형 체의 더 많은 활용에 대해서는 다음 시간에 다루겠습니다. 

감사합니다!

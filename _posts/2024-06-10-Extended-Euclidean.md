---
title: Extended Euclidean Algorithm (확장 유클리드 호제법)
date: 2024-06-10 03:04:00 +0900
categories: [PS, Algorithm, 수학]
tags: []     # TAG names should always be lowercase
toc: true
comments: true
math: true
---

> **이 글을 작성하는 데 참고한 자료**
>
> [neutrinox4b1님의 블로그](https://thfist-1071.tistory.com/251/)<br>
> 확장 유클리드 호제법의 전개 과정을 이해하는 데 도움이 되었습니다.
>
> [Euclidean Algorithm (영어 위키백과)](https://en.wikipedia.org/wiki/Euclidean_algorithm)<br>
> [Bézout's identity (영어 위키백과)](https://en.wikipedia.org/wiki/Bézout%27s_identity)<br>
> 
{: .prompt-info }

## 유클리드 호제법
유클리드 호제법은 주어진 두 정수 $a$과 $b$에 대해서 빠르게 $GCD(a,\ b)$을 구해주는 알고리즘으로, 간단히 나타내면 다음과 같습니다.

$$ \text{GCD}(a, b) = 
    \begin{cases}
        a & \text{if } b = 0 \\
        \text{GCD}(b, a\text{ mod }b) & \text{otherwise} 
    \end{cases} $$

잘 알려진 알고리즘이니만큼 증명은 생략하겠습니다.

유클리드 호제법을 이용해 실제로 계산을 진행하여보면, 숫자가 꽤나 크더라도 상당히 빠른 시간 내에 결과가 나오는 것을 알 수 있습니다. 딱 봐도 시간 복잡도가 $O(\text{log }a)$ 언저리일 거 같은 성능이죠? 

시간 복잡도를 구하기 전에, 유클리드 호제법을 수열로 나타내 보겠습니다. 유클리드 호제법을 시행할 두 숫자가 $a$와 $b$라고 했을 때, $r_0 = a$, $r_1 = b$로 정의된 수열 $r_k$를 생각해 보겠습니다.

이러한 $r_k$의 점화식은 다음과 같이 생각해볼 수 있습니다.

$$ r_{k+1} = r_{k-1}\text{ mod }r_k $$

결국, 이 수열의 $k-1$번째와 $k$번째 항은 유클리드 호제법을 $k$번 시행했을 때의 두 수를 나타냅니다. 이해를 돕기 위해, $r_0 = 34$, $r_1 = 12$인 수열 $r_k$에 대해서 $r_k$의 각 항을 구해 보겠습니다.

|-------|------|------|------|-----|-----|
|  $k$  |  $0$ |  $1$ |  $2$ | $3$ | $4$ |
| $r_k$ | $34$ | $12$ | $10$ | $2$ | $0$ |

n을 0으로 나눈 나머지를 정의할 수 없기 때문에, $4$항이 수열의 마지막 항이 되고 마지막 항의 바로 전 항인 $r_3$이 바로 $\text{GCD}(34, 12)$가 됩니다.


이제, 유클리드 호제법의 시간 복잡도를 구해 보겠습니다. 최악의 경우를 생각해 보면, 어떤 두 항 $r_k$과 $r_{k+1}$에 대해 $r_{k-1}$이 최소가 되는 항들로 이루어진 수열이 바로 최악의 경우를 나타내는 수열이 될 것입니다. 

> 여기서는 $r_{k-1} > r_k \geq 0$인 경우만 생각할 것인데, 이는 $r_{k-1} < r_k$이라면 $\text{GCD}(r_{k-1}, r_k) = \text{GCD}(r_k, r_{k-1}\text{ mod }r_k) = \text{GCD}(r_k, r_{k-1})$이 되기 때문입니다.<br>
> 예를 들어, $\text{GCD}(7, 12) = \text{GCD}(12, 7\text{ mod }12) = \text{GCD}(12, 7)$이 됩니다. 
> 
> 또한, $r_k = r_{k-1}$이라면 $r_{k+1} = 0$이 되기 때문에, 이 경우 역시 배제할 수 있습니다.
>
> 음의 정수가 포함되는 경우 역시 나머지 연산의 결과값은 항상 양수이기에 문제가 되지 않습니다. 최대공약수만을 구하는 경우에는 $\text{GCD}(a, b) = \text{GCD}(\vert a \vert, \vert b \vert)$이기도 합니다.
{: .prompt-tip }

이러한 수열의 길이를 $n$이라고 할 때, 위에서 보았듯 항상 $r_n = 0$입니다. 또한 $r_{n-1} = 1$이 최솟값, 즉 최악의 경우가 됩니다.

$r_k\text{ mod }r_{k+1} = r_{k+2}$이기 때문에, 어떤 정수 $q$에 대하여 $r_k = r_{k+2} + q \cdot r_{k+1}$로 나타낼 수 있습니다. 이때 우리가 구해야 할 것은 최솟값, 즉 최악의 경우이기에, $q = 1$이 됩니다. 

따라서 $r_k = r_{k+2} + r_{k+1}$이 됩니다. 어라, 이거 어디서 많이 본 형태 아닌가요? 바로 **피보나치 수열**의 점화식과 비슷한 형태가 되었습니다. 정확히는, 피보나치 수열의 $k$번째 항을 $F_k$라고 할 때, $r_{n-k} = F_k$가 되는 것이죠.

결과적으로 길이가 $n$인, 유클리드 호제법을 진행할 때 가능한 최악의 경우를 나타내는 수열 $r_k$의 첫 번째 항 $r_0 = F_n$이 됩니다.

피보나치 수열은 $O(\varphi^n)$로 증가하기 때문에, 유클리드 호제법은 최악의 경우에도 $O(\text{log }n)$의 시간복잡도를 가진다고 할 수 있습니다.

## 베주 항등식
베주 항등식은 다음의 항등식, 혹은 정리를 의미합니다.
> 두 정수 $a$와 $b$와 그 최대공약수 $g$에 대하여, $ax + by = g$를 만족하는 두 정수 $x$와 $y$가 **존재한다**.<br> 
> 또한 임의의 두 정수 $z$와 $t$에 대해, $az + bt$ 꼴로 나타낼 수 있는 정수는 $g$의 **모든** 배수이다.

엄밀한 증명은 그리 간단하지만은 않지만, 조금 생각해보면 직관적으로 성립한다는 것을 알 수 있습니다. 다만, 이때 베주 항등식은 $x$와 $y$의 존재성만 알려주며, 저 둘의 값을 구하는 법에 대해서는 알려주지 않습니다.

베주 항등식은 정수론의 굉장히 중요한 정리이고, 실제로도 유용하게 활용됩니다. 이러한 베주 항등식의 해를 알려주는 것이 **확장 유클리드 호제법**(Extended Euclidean Algorithm; EEA)입니다. (또는, 유클리드 호제법이 최대공약수(GCD)를 구하는 알고리즘인 것에 착안하여 확장 유클리드 호제법을 Extended GCD; EGCD라고도 합니다.)

참고로, 베주 항등식의 해는 유일하지 않습니다. $x$와 $y$가 항등식의 해라면, $x+\frac{bq}{g}$와 $y-\frac{aq}{g}$ 역시 항등식의 해가 됩니다.

## 확장 유클리드 호제법
아까 이야기했던 유클리드 호제법 수열로 돌아가봅시다.

$$ r_{k+1} = r_{k-1}\text{ mod }r_k $$

위 식에서, 어떤 정수 $q$에 대해 다음과 같이 나타내볼 수 있습니다.

$$ r_{k+1} = r_{k-1} - q \cdot r_k $$

이때 $q$는 $r_{k-1}$을 $r_k$로 나눈 몫이 됩니다. 이러한 $q$ 역시 다음과 같이 수열로 나타낼 수 있습니다.

$$ q_k = \lfloor \frac{r_{k-1}}{r_k} \rfloor $$

$$ r_{k+1} = r_{k-1} - q_k \cdot r_k $$

위 수열의 $n$번째 항을 생각해 봅시다. $\text{GCD}(a, b) = g$라고 할 때 $g \mid r_n$입니다.

이때, 베주 항등식의 두 번째 성질이었던 

> 임의의 두 정수 $z$와 $t$에 대해, $az + bt$ 꼴로 나타낼 수 있는 정수는 $g$의 **모든** 배수이다.

에 따라, 다음을 만족하는 정수 $z$와 $t$가 존재한다는 것을 알 수 있습니다. 이러한 $z$와 $t$를 $z_n$과 $t_n$이라고 하면,

$$ az_n + bt_n = r_n $$

이라는 식을 얻게 됩니다.

이제 위의 식을 수열의 점화식에 대입해 보겠습니다.

$$ r_{k+1} = r_{k-1} - q_k \cdot r_k $$

$$ az_{k+1} + bt_{k+1} = az_{k-1} + bt_{k-1} - q_k \cdot (az_k + bt_k) $$

그리고, 다시 위의 식을 $a$와 $b$에 대해 정리해 주겠습니다.

$$ a(z_{k+1} - z_{k-1} + q \cdot z_k) + b(t_{k+1} - t_{k-1} + q \cdot t_k) = 0 $$

앞서 말했듯, 베주 항등식의 해는 하나가 아니기 때문에 우리가 구해야 할 것은 해들 중 하나입니다.<br>
따라서 다음과 같이 정의한다면, 모든 $k$에 대해 위 식을 항상 만족하는 것을 알 수 있습니다.

$$ z_{k+1} = z_{k-1} - q_k \cdot z_k $$

$$ t_{k+1} = t_{k-1} - q_k \cdot t_k $$

이 과정은 다음의 그림으로 보다 간단히 나타낼 수 있습니다.

$$
\begin{array}{ll}
 & az_{k-1} & + & bt_{k-1} & = & r_{k-1} & \\
 -( & az_k & + & bt_k & = & r_k & ) \cdot q_k \\ \hline
 & az_{k+1} & + & bt_{k+1} & = & r_{k+1} &
\end{array}
$$

그리고, $\text{GCD}(a, b) = r_n$을 만족하는 $n$에 대해서도 다음의 식이 성립하는 것은 당연합니다.

$$ az_n + bt_n = r_n $$

이제, $z_n$과 $t_n$이 바로 베주 항등식의 해가 됩니다!

$z_n$과 $t_n$을 구하기 위해 필요한 것은 무엇일까요? 점화식은 위에서 구했으니, $0$번째와 $1$번째 항만 구해주면 됩니다. 다행히도, 우리는 $r_0 = a$, $r_1 = b$라는 사실을 알고 있습니다. 이걸 위의 식에 다시 대입해볼까요?

$$ az_0 + bt_0 = r_0 = a $$

$$ az_1 + bt_1 = r_1 = b $$

$z_0 = 1$, $t_0 = 0$, $z_1 = 0$, $t_1 = 1$이 위의 식을 만족한다는 사실을 바로 알 수 있습니다.

<hr>

지금까지 한 것을 정리해봅시다.

**초항**<br>
 $$
\begin{array}{ll}
r_0 = a & r_1 = b \\
z_0 = 1 & z_1 = 0 \\
t_0 = 0 & t_1 = 1
\end{array}
 $$
<br>

**점화식**<br>
 $$
\begin{array}{ll}
 & az_{k-1} & + & bt_{k-1} & = & r_{k-1} & \\
 -( & az_k & + & bt_k & = & r_k & ) \cdot q_k \\ \hline
 & az_{k+1} & + & bt_{k+1} & = & r_{k+1} &
\end{array}
 $$

위의 과정을 $r_{n+1} = 0$이 되는 $r_n$까지 반복해준 결과가 바로 확장 유클리드 호제법의 결과가 됩니다.

의사 코드로 나타내보면, 다음과 같습니다.

```
EEA(a, b):
    r0 = a, r1 = b
    z0 = 1, z1 = 0
    t0 = 0, t1 = 1

    while r1 > 0:
        q = ⌊r0 / r1⌋
        (r0, r1) = (r1, r0 - q*r1)
        (z0, z1) = (z1, z0 - q*z1)
        (t0, t1) = (t1, t0 - q*t1)

    return (r0, z0, t0)
```

결과값이 의미하는 것은 각각 $\text{GCD}(a, b)$와 $az + bt = \text{GCD}(a, b)$인 $z$, $t$입니다.

## 구현

**Python 3**
```py
def eea(a, b):
    r0, r1 = a, b
    z0, z1 = 1, 0
    t0, t1 = 0, 1

    while r1 != 0:
        q = r0 // r1
        r0, r1 = r1, r0 - q*r1
        z0, z1 = z1, z0 - q*z1
        t0, t1 = t1, t0 - q*t1

    return r0, z0, t0
```
가독성을 조금 무시한다면 다음과 같이 짧은 코드도 가능합니다.

```py
def eea(a, b):
    r0, r1, z0, z1, t0, t1 = a, b, 1, 0, 0, 1
    while r1 != 0:
        q = r0 // r1
        r0, r1, z0, z1, t0, t1 = r1, r0 - r1*q, z1, z0 - z1*q, t1, t0 - t1*q
    return r0, z0, t0
```

음수를 다루게 되는 경우에는 주의해야 합니다. 유클리드 호제법 등의 알고리즘이 성립하기 위한 나눗셈을 **유클리드 나눗셈**이라고 하는데, 일반적으로 프로그래밍 언어에서의 나눗셈이 항상 유클리드 나눗셈인 것은 아닙니다. 특히 나눗셈이 C와 같이 동작하는 언어들에서는 부호에 따라 나눗셈의 방향이 '일관적이지' 않기 때문에 무한 루프에 빠질 수 있습니다.

파이썬도 b가 음수인 경우에는 r의 범위가 (일반적으로 일컫는) 유클리드 나눗셈과는 다르지만, 어쨌든 동작이 '일관적'이기 때문에 작동할 것으로 생각합니다. 테스트해보지 않아서 잘은 모르겠습니다. a만 음수인 경우에는 문제없습니다.

정수 나눗셈에 대한 글은 추후 작성해볼 계획이 있습니다.

## 확장 유클리드 호제법의 활용
확장 유클리드 호제법은 대표적으로 **일차합동식**의 풀이에 쓰입니다. 일차합동식은 다음과 같은 형태의 식을 말합니다.

$$ ax \equiv b\text{ (mod }M) $$

(이때, $s \equiv t\text{ (mod }M)$은 $s$와 $t$가 $M$으로 나눈 나머지가 같다는 의미입니다.)

다시 위의 식으로 돌아가서, 위 식을 등식으로 바꾸려면 적당한 정수 $q$에 대해서, 

$$ ax = b + Mq $$

로 나타내면 됩니다. $ Mq $를 다시 이항해주면?

$$ ax - Mq = b $$

즉, 베주 항등식과 같은 형태가 됩니다. 이때, $ \text{GCD}(a, M) \not\mid b $ 라면 위 합동식의 해가 없다는 것 역시 알 수 있습니다.

베주 항등식을 푼 후, 양 변에 $ \frac{b}{\text{GCD}(a, M)} $을 곱해주면 합동식의 해를 구할 수 있게 되는 것이죠.

베주 항등식으로 할 수 있는 다른 것은, **모듈러 역원**을 구하는 것입니다. 모듈러 역원은 정수 $a$와 $M$에 대하여, 다음을 만족하는 $x$를 말합니다.

$$ ax \equiv 1\text{ (mod }M) $$

이때 $x$를 $a$의 모듈러 역원이라 말하며, $a = x^{-1}$로 표기합니다.

위 식의 형태에서 알 수 있듯이, 이 역시 일차합동식의 한 형태이며 위와 같은 방식으로 풀 수 있습니다.

합동식의 해를 구하든 모듈러 역원을 구하든 주의해야 할 점은 베주 항등식의 해는 하나가 아니라는 사실입니다. 따라서 적절한 수를 더하거나 빼어서 원하는 범위 (일반적으로 $0 \leq t < M$) 내에 맞춰주는 것이 중요합니다.

## 마치며
확장 유클리드 호제법은 베주 항등식의 해를 구할 수 있다는 그 자체로 매우 강력한 도구입니다. 

저는 처음 배운 후 한동안 블랙박스(원리를 모르고 사용하는 것)로 사용했던 기억이 있습니다. 사실, 자세한 증명까지 생각해 본 것 자체가 이번 글을 쓰면서가 처음이라고 보아도 될 듯합니다. 블로그를 시작한 것도 비슷한 이유에서였으니까 목표를 잘 달성하고 있다고 보아도 되겠죠.

읽어주셔서 감사합니다!

<hr>
> **24/06/25** - 음수 나눗셈 관련 내용을 추가했습니다.
{: .prompt-update }

---
title: 르장드르의 공식과 이항 계수 (팩토리얼 0의 개수, 이항 계수 4/6)
date: 2999-08-07 00:00:00 +0900
categories: [PS, 수학]
tags: []     # TAG names should always be lowercase
toc: true
comments: true
math: true
---

## *p*-adic valuation
어떤 정수 $n$과 소수 $p$에 대해, $n$이 $p$로 몇 번 나누어떨어지는지를 나타낼 수 있습니다. 이를 $\nu_p(n)$으로 나타내며, *p*-adic valuation이라고 합니다. 수학적으로는 다음과 같이 나타냅니다.

$$ \nu_p(n)=
\begin{cases}
\mathrm{max}\{k \in \mathbb{N}_0 : p^k \mid n\} & \text{if } n \neq 0\\
\infty & \text{if } n=0
\end{cases}
$$

$\nu_p(0)$은 $\infty$로 정의되는 것을 볼 수 있습니다. (여기서는 별로 중요하지 않습니다.)

## <boj-problem id=1676 tier='s5' name='팩토리얼 0의 개수'></boj-problem>
이 문제는 $n!$ 뒤에 있는 0의 개수를 구하는 문제입니다. 0의 개수는 어떤 수가 $10$을 몇 개 인수로 가지는지와 같습니다. $10 = 2 \cdot 5$이므로, $n!$이 $2$와 $5$를 몇 개 인수로 가지는지, 즉 $\text{min}(\nu_2(n!), \nu_5(n!))$를 생각해볼 수 있습니다.

조금 더 나아가 보면, 항상 $\nu_5(n!) \leq \nu_2(n!)$인 것을 알 수 있습니다. 팩토리얼의 정의에 따라 $n!$은 $n$ 이하의 모든 자연수를 곱한 값인데, $n$ 이하의 $2$의 배수의 개수는 항상 $5$의 배수의 개수보다 작거나 같기 때문입니다. 따라서 $n!$ 뒤에 있는 0의 개수는 $\nu_5(n!)$과 같은 것을 알 수 있습니다.

이를 어떻게 구할 수 있을까요? 단순히 생각해 보면, $\nu_5(n!)$은 $n$ 이하의 $5$의 배수의 개수와 같다고 생각할 수 있습니다. $n$ 이하의 $5$의 배수의 개수는 $\lfloor n/5 \rfloor$와 같으니, $\nu_5(n!) = \lfloor n/5 \rfloor$라고 생각할 수도 있습니다.

그러나 실제로는 5의 거듭제곱도 고려해야 합니다. $25!$와 같은 경우에는, $25 = 5^2$를 곱하는 과정에서 $5$를 $2$개 더 인수로 가지게 되었기 떄문입니다. 따라서 $n$ 이하의 $25$의 배수만큼 다시 더하고, 또 $125$의 배수만큼도 다시 더하고... <br> 결과적으로, $\nu_5(n!) = \lfloor n/5 \rfloor + \lfloor n/5^2 \rfloor + \lfloor n/5^3 \rfloor...$와 같이 구할 수 있다는 것을 알 수 있습니다.

팩토리얼 0의 개수 문제는 이로써 해결했습니다! 특히나 이 문제에서는 $0 \leq N \leq 500$이라고 하였기에, $5^4 = 625$ 이상의 배수는 고려할 필요가 없습니다. 따라서 $\lfloor n/5 \rfloor + \lfloor n/25 \rfloor + \lfloor n/125 \rfloor$가 이 문제의 정답이 됩니다.

## $\nu_p(n!)$과 르장드르의 공식
위에서는 5에 대한 경우만 생각했지만, 위와 같은 방법으로 임의의 소수 $p$에 대해서도 구할 수 있습니다. $\nu_p(n!) = \lfloor n/p \rfloor + \lfloor n/p^2 \rfloor + ...$ 와 같이 말이죠.

좀 더 간단히 나타내면,

$$ \nu_p(n!) = \sum_{k = 1}^{\infty} \lfloor \frac{n}{p^k} \rfloor $$

가 됩니다. 이를 **르장드르의 공식**이라고 부릅니다.

> 위의 식의 $\lfloor n/p^k \rfloor$에 대해, 이를 $\lfloor n/p^{k-1}p \rfloor = \lfloor \lfloor n/p^{k-1} \rfloor / p \rfloor$와 같이 생각할 수도 있습니다. 수학적으로 중요하다기보다는, 구현 과정이 조금 더 간편해집니다.
>
> 참고로 $ \lfloor \lfloor a/b \rfloor / c \rfloor = \lfloor a/bc \rfloor $이 성립합니다. 증명은 어렵지 않으니 생략하겠습니다. 아니면 간단히 수를 몇 개 집어넣어 보면 금방 알 수 있습니다.
{: .prompt-tip }

## <boj-problem id=17466 tier='b2' name='N! mod P (1)'></boj-problem>
$n!\text{ mod }p$를 구하기 앞서, 문제에서 왜 $n < p$라는 조건을 달아 두었는지 생각해 봅시다. 그 이유는 간단히 $n \geq p$라면 $p \mid n!$이 되어, $n!\text{ mod }p = 0$이 되어 버리기 때문입니다. 따라서 간단히 $1$부터 $n$까지 곱하면서 $p$로 나눈 나머지를 취해 주면 풀 수 있습니다.

## <boj-problem id=11402 tier='p4' name='이항 계수 4'></boj-problem>
이항 계수 4는 [뤼카의 정리 (Lucas' theorem)](https://en.wikipedia.org/wiki/Lucas'_theorem)를 통해 간단히 풀 수 있는 문제입니다. 그러나, 여기서는 위의 접근을 통해 조금은 다르게 문제를 해결해보도록 하겠습니다.

$ \binom nk = \frac{n!}{k!(n-k)!} $입니다. 그러나 여기서는 위와 같이 $n \geq p$라고 하여도 $ \binom nk\text{ mod }p$가 0이라고 말할 수 없습니다. 왜냐하면 분자의 $k!(n-k)!$에 의해 $p$가 약분되어 최종적인 $ \binom nk $는 $p$를 인수로 가지지 않을 수 있기 때문입니다.

따라서, 우리는 $ n!/p^{\nu_M(n!)}\text{ mod }p$을 구해 볼 수 있습니다. 말인즉슨, $n!$을 $p$으로 나누어떨어지지 않을 때까지 최대한 나눈 후 $p$로 나눈 나머지를 취한다는 의미입니다. $k!$과 $(n-k)!$에 대해서도 같은 것을 구해줄 수 있습니다. 식을 조금 더 간단히 나타내기 위해 $n! = q_1 \cdot p^{e_1}$, $k! = q_2 \cdot p^{e_2}$, $(n-k)! = q_3 \cdot p^{e_3}$으로 두겠습니다.

위의 이항 계수 식에서 분모와 분자를 정리해줍시다.

$$ \frac{n!}{k!(n-k)!} $$

$$ = \frac{q_1 \cdot p^{e_1}}{q_2 \cdot p^{e_2} \cdot q_3 \cdot p^{e_3}} $$

$$ = \frac{q_1}{q_2 q_3} \cdot \frac{p^{e_1}}{p^{e_2}p^{e_3}} $$

$$ = \frac{q_1}{q_2 q_3} \cdot p^{e_1 - e_2 - e_3} $$

$e_1, e_2, e_3$은 $\nu_p$를 구하는 법을 위에서 설명했으므로 그와 같이 구할 수 있습니다. 따라서 $q_1, q_2, q_3$을 빠르게 구한다면 문제를 해결할 수 있게 됩니다.

$n! = q \cdot p^e$라고 할 때 $q\text{ mod }p$를 

내용 어떻게 이어가지 ㅜㅜ
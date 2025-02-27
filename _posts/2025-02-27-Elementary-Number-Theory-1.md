---
title: 1. 나눗셈과 공약수
date: 2025-02-27 12:50:00 +0900
categories: [정수론 개론]
tags: []     # TAG names should always be lowercase
toc: true
comments: true
math: true
---

## 나눗셈 정리
정수 $a, b (b \neq 0)$에 대해 $a = bq+r\ (0 \leq r < \left | b \right |)$인 정수 $q, r$가 유일하게 존재한다.

이때 $q := \text{quotient(몫)}$, $r = \text{remainder/residue(나머지)}$로 정의한다.


또한 정수 $a, b$에 대해 $a = b \cdot q$인 정수 $q$가 존재할 때, 

이것을 $$ \left(
    \begin{array}{ll}
        a\text{ is divisible by }b \\
        b\text{ divides }a \\
        b \mid a \\
        b\text{ is a divisor of }a
    \end{array}
\right.$$ <span style="display: inline-block; vertical-align: middle; margin-bottom: 5px; line-height: 1.7rem">($a$는 $b$로 나누어진다)<br>($b$는 $a$를 나눈다)<br><br>($b$는 $a$의 약수이다)</span> 와 같이 말한다. <br>반대로 $b$가 $a$를 나누지 않을 때는 $b \not\mid a$라고 표기한다.

> $0$이 아닌 모든 정수는 $0$을 나눈다.
{: .prompt-tip }

## 공약수 (Common Divisor)
어떤 정수 $d$에 대해 $d \mid a$ 그리고 $d \mid b$일 때 $d$는 $a$와 $b$의 공약수(Common Divisor)라고 말한다.

또한, $a$와 $b$의 모든 공약수 중에 가장 큰 것을 최대공약수(GCD; Greatest Common Divisor)라고 말한다. $a$와 $b$의 최대공약수 $d$를 $d = \gcd(a, b)$와 같이 표기할 수 있다. 

$\gcd(a, b) = \gcd(\vert a \vert, \vert b \vert)$이다.

### (효율적인) GCD 계산
두 수의 GCD를 구하기 위해서는 **유클리드 호제법**(Euclid's Algorithm)을 사용할 수 있다.

$a$를 $b$로 나눈 몫과 나머지를 각각 $q_1, r_1$이라고 할 때 $a = b q_1 + r_1$이 성립한다.

마찬가지로 $b$를 $r_1$로 나눈 몫과 나머지를 각각 $q_2, r_2$이라고 할 때 $b = r_1 q_2 + r_2$가 성립한다.

일반화하여 $r_n = r_{n+1} q_{n+2} + r_{n+2}$ 라는 점화식을 세워줄 수 있다. $a = r_{-1}, b = r_0$으로 두자.

<hr>

**Theorem 1.** 어떤 $n$에 대하여 $r_{n+1} = 0$이다.
<br><small>- **pf)** $r_1 > r_2 > r_3 > ... \geq 0$ (나눗셈 정리에 의해 매 step마다 나머지는 단조 감소, 하한 0이 존재하므로)
<br>- 따라서 알고리즘은 언젠가 종료한다.</small>

<hr>

**Theorem 2.** 만약 $r_{n+1} = 0, r_n \neq 0$이라면 $\gcd(a, b) = r_n$
<br><span>
<span style="display: inline-block; padding: 15px; vertical-align: top">1) $r_n \mid a, r_n \mid b$
<br>$n$번째 step부터
<br>$$ \begin{array}{ll} \\
        r_{n-1} = r_n q_{n+1} & \dots & r_n \mid r_{n-1} \\
        r_{n-2} = r_{n-1} q_n + r_n & \dots & r_n \mid r_{n-2} \\
        r_{n-3} = r_{n-2} q_{n-1} + r_{n-1} & \dots & r_n \mid r_{n-3} \\
        \vdots & & \\ \\
        \text{by repetition, } r_n \mid r_i \\ \therefore r_n \mid b = r_0, r_n \mid a = r_{-1}
    \end{array}$$ <br></span>
<span style="display: inline-block; padding: 15px; vertical-align: top">2) $\gcd(a, b) \mid r_n$
<br>$d = \gcd(a, b)$일 때
<br>$$ \begin{array}{ll} \\
        \text{Step 1.} & a = b q_1 + r_1 & ... & d \mid r_1 \\
        \text{Step 2.} & b = r_1 q_2 + r_2 & ... & d \mid r_2 \\
        \text{Step 3.} & r_1 = r_2 q_3 + r_3 & ... & d \mid r_3 \\
        \vdots \\
        \text{Step n.} & r_{n-2} = r_{n-1} q_n + r_n & ... & d \mid r_n \\
    \end{array}$$ <br></span></span>

이때 1)에 의해 $r_n \mid d$이고 2)에 의해 $d \mid r_n$이므로 $r_n = d$.

<hr>


> **강의에서 다루지는 않았으나 책에 있는 내용**
> 
> 다음 역시 모두 성립한다: $\gcd(a, b) = \gcd(\pm a, \pm b) = \gcd(a, b + na) $ ($n$은 임의의 정수)
> 
{: .prompt-info }

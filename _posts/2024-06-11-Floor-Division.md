---
title: 유클리드 나눗셈과 나머지
date: 2029-06-11 19:04:00 +0900
categories: [PS, 수학]
tags: []     # TAG names should always be lowercase
toc: true
comments: true
math: true
---

> **이 글을 작성하는 데 참고한 자료**
>
> [Division with negative dividend, but rounded towards negative infinity? (stack overflow)](https://stackoverflow.com/questions/39304681/division-with-negative-dividend-but-rounded-towards-negative-infinity)<br>
> [나눗셈 정리 (한국어 위키백과)](https://ko.wikipedia.org/wiki/%EB%82%98%EB%88%97%EC%85%88_%EC%A0%95%EB%A6%AC)
>
> 
{: .prompt-info }

## 몫과 나머지
[나눗셈 정리](https://ko.wikipedia.org/wiki/%EB%82%98%EB%88%97%EC%85%88_%EC%A0%95%EB%A6%AC)에 따라, 주어진 두 정수 $m$, $n$에 대해 $m = nq + r$ 그리고 $0 \leq r \leq \vert n \vert$을 만족하는 정수 $q$와 $r$이 유일하게 존재합니다. 이때 $q$를 몫(quotient), $r$을 나머지(remainder)라고 부릅니다. 또한 이 조건을 만족하는 $q$와 $r$을 구하는 것을 <u>유클리드 나눗셈(Euclidean Division)</u>이라고 합니다.

유클리드 나눗셈이 중요한 이유는, 유클리드 나눗셈이 성립할 때 사용할 수 있는 여러 강력한 알고리즘들이 존재하기 때문입니다. 대표적으로, 유클리드 호제법이나 [확장 유클리드 호제법](/posts/Extended-Euclidean/) 등이 있습니다.

그렇다면 유클리드 나눗셈을 어떻게 할 수 있을까요?

먼저 $m$과 $n$이 모두 양의 정수일 때는 우리 모두가 잘 알고 있습니다. 초등학교 때 배운 몫과 나머지가 바로 양의 정수의 유클리드 나눗셈을 하는 과정입니다. $q = \lfloor \frac{m}{n} \rfloor$ ($\lfloor x \rfloor$은 $x$보다 크지 않은 최대의 정수)인 것은 우리 모두가 잘 알고 있는 사실입니다.

우리가 주목해야 할 부분은 $n$ 또는 $m$이 음수인 경우이다. 위에서 두 __정수__ $m$과 $n$이라고 말했듯이, 음의 정수에 대해서도 위의 정리는 성립한다.


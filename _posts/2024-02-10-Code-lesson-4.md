---
title: 4. 자료형과 변수, 그리고 연산 (2)
date: 2024-02-10 11:51:00 +0900
categories: [연재글, 초보를 위한 프로그래밍]
tags: []     # TAG names should always be lowercase
toc: true
comments: true
---

> <span style="font-weight: 500; font-size: 1.4em; margin-top: -5px; display: inline-block">복습하기</span><br>
> Q. 부호 없는 4바이트 정수를 의미하는 자료형은 무엇인가요?<br>
> Q. printf로 문자를 출력할 때 쓰이는 서식 지정자는 무엇인가요?
{: .prompt-tip }

<br>
<hr>

## 컴퓨터에서의 실수 표현
지금까지 배운 수는 모두 정수였습니다. 하지만 컴퓨터로 정수가 아닌, 실수도 표현할 수 있겠죠? 이번 장에서는 그 방법에 대해서 알아보겠습니다.

> 정수와 마찬가지로 실수도 2진법으로 나타냅니다. 이 점을 유의하시며 읽어주세요.
{: .prompt-warning }

### 고정 소수점
**고정 소수점**은 간단합니다. 어떤 수가 <code>0010 1011<sub>(2)</sub></code>로 표현된다고 할 때, <code>0010.1011<sub>(2)</sub></code>처럼 소수점의 위치를 정해 두고 그 앞은 정수부분, 그 뒤는 소수부분으로 처리하는 것입니다. 이 경우에는 1바이트 내의 앞 4비트를 정수부분, 뒤 4비트를 실수부분으로 표현한 예시가 되겠죠.

이런 식으로 소수를 나타내는 것은 결국 정수를 처리하는 것과 똑같이 처리할 수 있으므로, 성능상의 이점이 있습니다. 그러나 아래의 부동 소수점(유동 소수점) 방식에 밀려 잘 사용되지 않습니다.

<div><h3 style="display: inline-block" id="부동-소수점">부동 소수점</h3><a href="#fn-1" id="rfn-1">1</a></div>
**부동 소수점**은 고정 소수점과 대비되는 개념으로, 소수점의 위치가 고정되어 있지 않고 움직인다는 의미로 붙여진 이름입니다.


<br>
<hr>
## 정리

이번 장에서는 변수의 정의와 변수를 선언하는 법, 그리고 변수를 통해 값을 연산하는 법을 다루었습니다.

또한 `printf`을 통해 값을 콘솔에 출력하는 법 역시 다루었습니다.

마지막으로 간단한 문제를 하나 내 보겠습니다.
> <span class="font-mspace">printf("%c", 65);</span>는 어떤 결과를 출력할까요?
> <details style="margin-top: -15px">
>    <summary>정답 보기</summary>
>    <p style="margin: -2px 0.5rem">정답은 <code>A</code>입니다. 이유가 궁금하시다면, <a href="/posts/Code-lesson-2#컴퓨터에서의-문자-저장">2장</a>을 참고하세요.</p>
> </details>
{: .prompt-tip }

다음 시간에는 조금 더 다양한 연산들에 대해서 알아보겠습니다. 오늘도 읽어주셔서 감사합니다.

<br>
<hr style="margin-bottom: -10px">
<span class="hide-next"></span>
## 각주
<div class="footnote" id="fn-1"><a href="#rfn-1">↑</a> <sup>1</sup> <b>부동 소수점</b>은 영어 <i>Floating Point</i>를 직역한 것으로, 여기서의 <i>float</i>는 물 위를 떠다닌다는 뜻으로 사용될 때와 같은 의미입니다. 움직이지 않는다는 의미의 <ruby>不<rt>부</rt></ruby><ruby>動<rt>동</rt></ruby>이 아니라, 떠다니며 움직인다는 의미의 <ruby>浮<rt>부</rt></ruby><ruby>動<rt>동</rt></ruby>인 것이죠. 좀 더 직관적인 의미의 번역어로 <b>유동</b> 소수점이라고 일컬을 수 있겠지만, 부동 소수점이 사실상 표준 번역어로 통용되므로 부동 소수점으로 칭하도록 하겠습니다.</div>
<hr>

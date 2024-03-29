---
title: 3. 자료형과 변수, 그리고 연산 (1)
date: 2024-02-08 11:51:00 +0900
categories: [연재글, 초보를 위한 프로그래밍]
tags: []     # TAG names should always be lowercase
toc: true
comments: true
---

> <span style="font-weight: 500; font-size: 1.4em; margin-top: -5px; display: inline-block">복습하기</span><br>
> Q. 256 이상의 숫자를 나타나기 위해 어떤 방법을 사용하나요?<br>
> Q. 컴퓨터로 문자를 어떻게 표현하나요?
{: .prompt-tip }

<br>
<hr>
## 변수
수학에서의 변수는 <U>정해지지 않은 값</U>을 나타낼 때, 특히 어떤 값에 따라 달라지는 값을 나타낼 때 쓰이곤 합니다. 프로그래밍에서의 **변수**는, 좀 더 그 이름에 걸맞게 실제로 <U>변하는 수</U>입니다.

어떤 수가 변하려면 결국 어딘가에 저장되어야 있어야 합니다. 그리고 지금까지 이야기해온 것처럼 컴퓨터는 수를 메모리에 저장하죠. 그러니까, 변수는 결국 <U>메모리의 특정 공간을 나타내는 별칭</U>이라고 할 수 있습니다.

물론 우리가 메모리의 어느 부분을 사용할 것인지 정할 필요는 없습니다. 그저 <U>사용되지 않는</U> 메모리의 일부 공간을 변수로 빌려와서, 그 공간을 <U>사용하겠다</U>고 알려주면 되는 것이죠. 바로 그것이 우리가 일반적으로 프로그래밍에서 변수를 **선언**한다고 하는 것입니다.

C언어에서 (그리고 여타 많은 언어들에서) 변수를 선언하기 위해서는 다음과 같은 문법이 필요합니다.

```c
type_name variable_name;
```

`type_name`은 **자료형**을 나타내고, `variable_name`은 **변수명**을 나타냅니다.<a href="#fn-1" id="rfn-1">1</a>

변수명은 말 그대로 변수의 이름이지만, 자료형은 무엇일까요?

<br>
<hr>
## 정수의 부호와 자료형
저번 시간에 우리는, 하나의 바이트를 여러 가지 방법으로 사용하는 법을 배웠습니다. 2개의 바이트나 4개의 바이트를 연이어 수를 표현하기 위해 사용한다던가, 하나의 바이트를 하나의 문자를 표현하기 위해 사용한다던가 등으로 말이죠. 그러면서 덧붙인 말은, 컴퓨터가 아닌 우리가 <U>바이트의 용도를 구분하고 다르게 처리</U>하라고 명령한다는 것이죠.

사실, 저번 시간까지 자세히 다루지 않은 것이 있습니다. 그것은 바로 정수의 부호인데요, 저번 시간까지 다루던 정수는 부호가 없이 0부터 최대값까지의 수를 표현할 수 있었습니다.

부호를 나타내기 위해서는 바이트(들)의 맨 첫 번째 비트를 **부호 비트**로 사용할 수 있습니다. 보통 맨 첫 번째 비트가 0이면 음이 아닌 정수, 1이면 음의 정수를 표현하는 데 사용하죠.

부호를 나타내기 위해 비트를 하나 추가했으니, 실제로 표현할 수 있는 정수의 최댓값은 절반이 될 것입니다. 대신 나머지 절반만큼으로 음수를 표현할 수 있는 셈이죠.

우리는 지금까지 부호 없는 정수, 부호 있는 정수, 그리고 문자를 컴퓨터에서 표현하는 법을 배웠습니다. 그리고 이제 이것을 컴퓨터에게 알려주어야 합니다. 그를 위해 사용하는 것이 **자료형**입니다.

예를 들면, 우리가 처음으로 배운 부호 없는 1바이트 길이의 정수는 C언어에서 `unsigned char`로 나타냅니다. 부호 없는 정수 자료형은 앞에 `unsigned`을 붙이고, 부호 있는 자료형은 앞에 `signed`를 붙이지만 일반적으로 생략해서 나타냅니다. 실제로 부호 있는 자료형을 사용할 일이 더 많으니까요. 뒤쪽의 `char`이 바로 1바이트 길이의 정수를 의미합니다.

<style>
    .tb1 {
        text-align: center;
        width: 100%;
    }

    .tb1 th:first-child {
        width: 0
    }

    .tb1 td:first-child {
        text-align: right;
        font-weight: 500;
    }
</style>

<figure>
C에서의 정수 자료형
    <table class="tb1">
    <th>이름</th><th>종류</th><th>부호</th><th>길이</th>
    <tr><td>char</td><td>정수, 문자</td><td rowspan=4>부호 있는</td><td>1바이트 정수</td></tr>
    <tr><td>short</td><td rowspan=7>정수</td><td>2바이트 정수</td></tr>
    <tr><td>int</td><td>4바이트 정수</td></tr>
    <tr><td>long long<a href="#fn-2" id="rfn-2">2</a></td><td>8바이트 정수</td></tr>
    <tr><td>unsigned char</td><td rowspan=4>부호 없는</td><td>1바이트 정수</td></tr>
    <tr><td>unsigned short</td><td>2바이트 정수</td></tr>
    <tr><td>unsigned int</td><td>4바이트 정수</td></tr>
    <tr><td>unsigned long long</td><td>8바이트 정수</td></tr>
    </table>
</figure>

여기서 주의할 점은, 정수와 문자를 나타내는 자료형이 `char`로 동일<a href="#fn-3" id="rfn-3">3</a>하다는 것입니다. 다만, 실제 사용에서는 문자로 사용되는 일이 대체로 더 많으며, 숫자로 사용하는 경우인지 문자로 사용하는 경우인지 별개로 생각하여 처리해주어야 합니다.

<br>
<hr>
## 변수로 연산하고 값을 출력하기
이제 [1장](../Code-lesson-1)에서 예시로 들었던 두 개의 한 바이트 정수의 덧셈을 C로 구현해 보겠습니다.

```c
#include <stdio.h>

int main() {
    char a;
    char b, c;
    a = 1;
    b = 2;
    c = a + b;
    
    printf("%d", c);

    return 0;
}
```

아래의 설명은 [1장의 해당 부분](/posts/Code-lesson-1#두-바이트의-덧셈)과 비교하면서 보시는 것을 추천합니다.<br>
<small>아래에 설명하지 않은 부분에 대해서는 각주<a href="#fn-4" id="rfn-4">4</a>에 설명해 두었습니다.<br>다만, 아래에서 설명하지 않은 부분을 지금 이해하지 못 한다 하더라도 큰 지장은 없습니다.</small>

<div style="display: flex; flex-direction: row">
<blockquote class="prompt-block">
<code>char a;</code>와 <code>char b, c;</code>는 변수를 선언하는 부분입니다. 쉼표를 통해서 같은 자료형의 변수를 여러 개 선언할 수 있습니다.
<br><br>
<code>a = 1;</code>은 a에 1을 대입하는 부분입니다. 마찬가지로 <code>b = 2;</code>는 b에 2를 대입하는 부분입니다. 
<br><br>
<code>c = a + b;</code>는 두 개의 명령으로 나누어서 볼 수 있습니다. 첫 번째는 <code>a + b</code>로, a와 b를 더하라는 명령입니다. 
<br><br>
1장에서 이야기했듯, 두 수를 더하는 것만으로는 아무 것도 할 수 없습니다.
그렇기에 <code>c = a + b;</code>라는 대입식을 사용해서, <code>c</code>에 <code>a + b</code>의 결과 값을 대입한 것입니다.
</blockquote>
<div style="margin-left: 10px;background-color: var(--heading-color); border-radius: .675rem; margin-bottom: 1rem" class="hide-mobile">
<iframe width="300" height="360" src="/posts/Code-lesson-1#두-바이트의-덧셈" style="opacity: 0.96; height: 100%"></iframe>
</div>
</div>

이제 마지막으로 남은 부분은 `printf("%d", c);`입니다. 

컴퓨터는 메모리에 두 개의 숫자를 꺼내 더한 후 메모리에 저장했지만, 우리 인간이 메모리를 뜯어서 열어 보기는 어렵겠죠. 그래서 콘솔(화면)에 변수 c에 들어있는 값을 출력하라는 의미의 `printf`를 사용한 것입니다.

printf 안에 있는 `"%d"`는 무엇일까요? 이 부분이 지금껏 줄곧 강조해왔던 <u>형식에 따른 처리</u>의 일종입니다. 컴퓨터에게 변수 c에 담긴 내용을 콘솔에 출력하라고 하기는 했는데, 그 c에 담긴 게 무엇인지 나타내주기 위해서 사용하는 부분인 것이죠. 이것을 [서식 지정자](https://en.wikipedia.org/wiki/Printf#Format_placeholder_specification)라고 부릅니다.

간략히 서식 지정자에 대해서 정리해 보았습니다.

<figure>
    <table class="tb2">
    <th>형태</th><th>종류</th>
    <tr><td>%d</td><td>부호 있는 정수</td></tr>
    <tr><td>%u</td><td>부호 없는 정수</td></tr>
    <tr><td>%o</td><td>부호 없는 정수를 8진법으로 출력</td></tr>
    <tr><td>%x</td><td>부호 없는 정수를 16진법으로 출력</td></tr>
    <tr><td>%c</td><td>문자</td></tr>
    </table>
</figure>

실제로는 더 상세하고 많은 종류의 서식 지정자가 존재하지만, 지금까지 배운 범위 내에서는 이 정도로도 충분합니다.

그리고 저 프로그램을 컴파일<a href="#fn-5" id="rfn-5">5</a>하고 실행하면, 

```console
3
```

이라는 결과가 출력되게 됩니다.


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

다음 시간에는 조금 더 다양한 자료형들에 대해서 알아보겠습니다. 오늘도 읽어주셔서 감사합니다.

<br>
<hr style="margin-bottom: -10px">
<span class="hide-next"></span>
## 각주
<div class="footnote" id="fn-1"><a href="#rfn-1">↑</a> <sup>1</sup> 맨 마지막에 오는 세미콜론(;)은 하나의 식이 끝났다는 의미입니다. 많은 프로그래밍 언어에서 동일한 의미로 사용되니 혹시라도 모르셨다면 지금이라도 알아두시면 되겠습니다.</div>
<div class="footnote" id="fn-2"><a href="#rfn-2">↑</a> <sup>2</sup> 언어마다 다릅니다. 예를 들면 C#과 java에서는, <code>long long</code> 대신 <code>long</code> 자료형으로 8바이트 정수를 나타냅니다. (일반적인 환경의 C에서, <code>long</code>은 <code>int</code>와 같은 의미를 나타냅니다.)</div>
<div class="footnote" id="fn-3"><a href="#rfn-3">↑</a> <sup>3</sup> C언어와 그 직계라고 할 수 있는 C++ 등의 일부 언어를 제외한다면, 문자와 1바이트 정수를 다루는 자료형은 나뉘어 있습니다. C#이나 java를 예로 든다면, 1바이트 정수는 <code>byte</code>이지만 문자는 <code>char</code>로 나타냅니다. (더하여, C#에서는 <code>char</code> 자료형의 크기가 2바이트이기에, <code>byte</code> 자료형과 비교할 때 크기 역시 다릅니다.)</div>
<div class="footnote" id="fn-4"><a href="#rfn-4">↑</a> <sup>4</sup> 바로 처음에 등장하는 <code>#include &lt;stdio.h&gt;</code>는 stdio.h 헤더를 파일에서 사용(실제로는 포함)하겠다는 의미입니다. 헤더 파일을 포함하면 그 헤더 파일에 있는 코드를 사용할 수 있는데, 여기서는 <code>printf</code>를 사용했습니다.<br><br>
<code>int main() ...</code>로 시작하는 부분은 <b>함수</b> 선언입니다. 함수는 일종의 여러 작업을 하나로 묶어둔 것이라고 할 수 있는데, 여기서는 그런 목적으로 사용되지 않았습니다. 이름이 main인 함수는 일반적인 함수와 다른 특별한 목적을 가지고 있는데, 바로 <U>프로그램 시작 지점</U>라는 의미입니다. 많은 코드 중에서 여기부터 읽기 시작해라- 하는 의미라고 받아들여주시면 됩니다.<br><br>
<code>return 0;</code>은 함수의 반환값을 결정하는 코드입니다. (반환값이 무엇인지 모르신다면 추후 설명할 계획이니, 지금은 일단 무시하고 넘어가셔도 됩니다.) 앞서 main 함수는 특별한 목적을 가지고 있다고 했듯, main 함수의 반환값에도 특별한 의미가 있습니다. main 함수의 반환값이 0인 경우에는 프로그램이 정상 종료되었다는 의미이고, 그렇지 않다면 프로그램이 비정상적으로 종료되었다는 의미입니다. 따라서 <code>return <U>0</U>;</code>이라는 값을 통해 프로그램이 정상 종료되었다는 것을 나타낸 것입니다.</div>
<div class="footnote" id="fn-5"><a href="#rfn-5">↑</a> <sup>5</sup> 항상 말하듯, 컴퓨터의 모든 것은 2진법 숫자들로 이루어져 있습니다. 프로그램도 예외는 아니죠. 인간이 이해할 수 있는 언어로 쓰여진 프로그램을 컴퓨터가 이해할 수 있는, 0과 1로 이루어진 <b>기계어</b>로 번역하는 것이 <b>컴파일</b> 과정입니다. 그 컴파일 과정을 수행하는 프로그램이 <b>컴파일러</b>이고요.</div>
<hr>

> 24/02/10: 아앗, C에서는 long이 4바이트고 long long이 8바이트였더라고요. 주 사용 언어가 C#인 저로서는 헷갈릴 수밖에 없었습니다.
{: .prompt-update }
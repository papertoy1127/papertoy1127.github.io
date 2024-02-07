---
title: 1. 메모리와 값 (2)
date: 2025-02-07 00:00:00 +0900
categories: [연재글, 초보를 위한 프로그래밍]
tags: []     # TAG names should always be lowercase
toc: true
comments: true
---

> <span style="font-weight: 500; font-size: 1.4em; margin-top: -5px; display: inline-block">복습하기</span><br>
> Q. 컴퓨터는 어떤 기수법을 사용하나요?<br>
> Q. 메모리가 하는 역할은 무엇인가요?
{: .prompt-tip }

이제 컴퓨터에게 덧셈을 시킬 수는 있지만, 그것은 한 바이트 (0-255)까지의 수로 한정됩니다. 우리는 `1+2`를 할 수 있지만, 또 `12+34`도 할 수 있잖아요? 컴퓨터가 더 큰 수를 계산하기 위해서는 자릿수의, 그러니까 컴퓨터 기준에서는 바이트의, 개수를 늘려야 합니다.

<figure>
<table class="font-mspace" style="margin: 0 auto">
<th>주소</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th>
<tr>
<td>값</td><td>00110101</td><td>00001000</td><td>01011101</td><td>00101110</td><td>01011101</td><td>11010110</td>
</tr>
</table>
  <figcaption style="color: gray; font-weight: 600; font-size: 0.5em; margin-top: -20px">저번 글에서도 봤던 메모리입니다.</figcaption>
</figure>

오늘은 2024와 7020, 각각 이진법으로 `0b 0000 0111 1110 1000`과 `0b 0001 1011 0110 1100`을 더해보도록 하겠습니다.

이번에는 각 숫자가 바이트 한 칸에 들어가지 않습니다. 

<hr>

<div class="footnote" id="fn-1"><a href="#rfn-1">↑</a> <sup>2</sup> 숫자의 길이가 너무 길어져서, 네 자리씩 끊어서 표기했습니다. 3980000을 3,980,000으로 끊어 표기하는 것과 비슷하게 생각하시면 됩니다.</div>



# Quiz Answer

I normally use next.js as my main framework. So sorry for not using angular like you prefer

First, clone this repo and run yarn install

```
yarn install
```
then run development server
```
yarn dev
```
## Section 1

- question 1 - Open [http://localhost:3000/sec1q1](http://localhost:3000/sec1q1) with your browser to see the result. 1.1 and 1.2 I think can use the same code.
- question 2 - Open [http://localhost:3000/sec1q2](http://localhost:3000/sec1q2).
- question 3 - Open [http://localhost:3000/sec1q3](http://localhost:3000/sec1q3).
- question 4 - Open [http://localhost:3000/sec1q4.html](http://localhost:3000/sec1q4.html).
- question 5 - Open [http://localhost:3000/memleak.html](http://localhost:3000/memleak.html). I fixed it by delete Javascript Object that Attach to the dom before the dom node is removed.

```
  delete closeBtn.tmp
```

I investigate it by using Chrome dev tools (Memory tab and select Heap snapshots) then i click show dialog and see what different between snapshots. It will keep increase around 25MB like you said. After i fixed it It does not happen again.

## Section 2
 - question 1 - Open [http://localhost:3000/sec2q1](http://localhost:3000/sec2q1).
 - question 2 - Open [http://localhost:3000/sec2q2](http://localhost:3000/sec2q2).
 - question 3 - I spent a lot of time fixing it first. But still can't figure out how to do it.
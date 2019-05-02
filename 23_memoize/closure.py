#Jabir Chowdhury
#SoftDev2 pd6
#K #23: Closure
#2019-05-2

def memoize(f):
    memo = []
    def inner(n):
        nonlocal memo
        if not len(memo) > n:
            memo.append(f(n))
        return memo[n]
    return inner

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

for x in range(10):
    print(fib(x))

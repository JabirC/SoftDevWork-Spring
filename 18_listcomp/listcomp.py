def pyth(n):
     return [(a,b,int((a*a + b*b)**.5)) for a in range(1,n) for b in range(a+1,n) if int((a*a + b*b)**.5) < n and ((a*a + b*b)**.5).is_integer()]
print(pyth(10000))
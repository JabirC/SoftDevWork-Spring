
#Jabir Chowdhury
#SoftDev2 pd6
#K #22: Closure
#2019-05-29

def repeat(w):
  def num(n):
    return w * n
  return num


def make_counter():
  x = 0
  def inc():
    nonlocal x
    x += 1
    return x
  def access():
    nonlocal x
    return x
  return inc, access

r1 = repeat('hello')
print(r1(2))

r2 = repeat('goodbye')
print(r2(2))

ctr1, acc1 = make_counter()
print(ctr1())
print(ctr1())
ctr2, acc2 = make_counter()
print(ctr2())
print(ctr1())
print(ctr2())

print(acc1())
print(acc2())

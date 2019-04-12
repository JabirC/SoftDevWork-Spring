# Jabir Chowdhury
# SoftDev2 pd6
# K16: Do You Even List?
# 2019-04-11

def pass_checker(password):
    lst = [1 if x.isupper() else 2 if x.islower() else 3 if x.isnumeric() else 0 for x in password]
    return 1 in lst and 2 in lst and 3 in lst

def pass_rating(password):
    lst = [1 if x.isupper() else 2 if x.islower() else 3 if x.isnumeric() else 4 if not x.isalnum() else 0 for x in password]
    return sum(set(lst))

print("Keys2Succ3$$ : " + str(pass_rating("Keys2Succ3$$"))) #10
print("Keys2 : " + str(pass_rating("Keys2"))) #6
print("Keys : " + str(pass_rating("Keys"))) #3
print("K : " + str(pass_rating("K"))) #1

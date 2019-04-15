
    # Jabir Chowdhury, Brian Lee
    # Softdev2 pd6
    # K17 -- PPFTLCW
    # 2019-04-14

    # 1
    counter = 0
    ret = []
    for i in range(5):
        ret.append(str(counter) + str(counter))
        counter += 2
    print(ret)

    ret = []
    ret = [str(i * 2)*2 for i in range(5)]
    print(ret)

    # 2
    counter = 7
    ret = []
    for i in range(5):
        ret.append(counter)
        counter += 10
    print(ret)

    ret = []
    ret = [7 + (10 * i) for i in range(5)]
    print(ret)

    # 3
    ret = [0, 0, 0]
    for i in range(5):
        ind = len(ret)
        ret.append(ret[ind - 3])
        ret.append(ret[ind - 2] + 1)
        ret.append(ret[ind - 1] + 2)
    print(ret)

    ret = []
    nums = [2,3,4,5,6,7,8,9]
    notprime = [0,2,3,5,7]
    for i in range(100):
        for x in nums:
            if i in notprime:
                break
            if i % x == 0:
                ret.append(i)
                break
    print(ret)

    # 4
    ret = []
    ret = [i for i in range(100) for x in [2, 3, 4, 5, 6, 7, 8, 9] if i % x == 0 and i not in [0, 2, 3, 5, 7]]
    print( list(set(ret)) )

    ret, state = [], True
    for i in range(2, 101):
        state = True
        for x in range(2, i):
            if i % x == 0:
                state = False
                break
        if state: ret.append(i)
    print(ret)

    # 5
    ret = []
    ret = [i for i in range(2, 101) if True not in [True if i % x == 0 else False for x in range(2, i)]]
    print(ret)


    #7
    def transpose(l):
        ret = []
        for i in range(len(l[0])):
            temp = []
            for x in range(len(l)):
                temp.append(l[x][i])
            ret.append(temp)
        return ret

    def transpose2(l):
        ret = [[l[x][i] for x in range(len(l))] for i in range(len(l[0]))]
        return ret

    print(transpose([[1,2,3],[4,5,6],[7,8,9]]))
    print(transpose2([[1,2,3],[4,5,6],[7,8,9]]))

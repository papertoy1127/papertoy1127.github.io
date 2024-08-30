alnum = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'

def arr2int(b): return sum(a * (1 << i) for i,a in enumerate(b[::-1]))

def solve(b):
    res = []
    

    idx = 0
    while idx < len(b) - 4:
        mode = arr2int(b[idx:idx+4])
        idx += 4
        if mode == 0b0000: break
        elif mode == 0b0001:
            count = arr2int(b[idx:idx+10])
            idx += 10
            while count > 2:
                nums = str(arr2int(b[idx:idx+10])).zfill(3)
                idx += 10
                res += [nums[0], nums[1], nums[2]]
                count -= 3

            if count == 2:
                nums = str(arr2int(b[idx:idx+7])).zfill(2)
                idx += 7
                res += [nums[0], nums[1]]
            elif count == 1:
                nums = str(arr2int(b[idx:idx+4])).zfill(1)
                idx += 4
                res += [nums[0]]

        elif mode == 0b0010:
            count = arr2int(b[idx:idx+9])
            idx += 9
            while count > 1:
                alnums = arr2int(b[idx:idx+11])
                idx += 11
                res.append(alnum[alnums // 45])
                res.append(alnum[alnums % 45])
                count -= 2

            if count == 1:
                alnums = arr2int(b[idx:idx+6])
                idx += 6
                res.append(alnum[alnums])

        elif mode == 0b0100:
            count = arr2int(b[idx:idx+8])
            idx += 8
            while count > 0:
                bit_8 = arr2int(b[idx:idx+8])
                idx += 8
                if bit_8 < 0x20 or bit_8 > 0x7e:
                    res.append('\\' + hex(bit_8)[2:].zfill(2).upper())
                else:
                    res.append(chr(bit_8).replace('\\', '\\\\').replace('#', '\\#'))
                count -= 1

        elif mode == 0b1000:
            count = arr2int(b[idx:idx+8])
            idx += 8
            while count > 0:
                bit_13 = arr2int(b[idx:idx+13])
                idx += 13
                res.append('#' + hex(bit_13)[2:].zfill(4).upper())
                count -= 1
    print(len(res), ''.join(res))


t = int(input())
for i in range(t):
    b = []
    h = input()
    for i in h:
        i = int(i, 16)
        b.append(int(bool(i&8)))
        b.append(int(bool(i&4)))
        b.append(int(bool(i&2)))
        b.append(int(bool(i&1)))
    solve(b)

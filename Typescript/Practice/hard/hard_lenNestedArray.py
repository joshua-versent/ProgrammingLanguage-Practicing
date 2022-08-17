#!/usr/bin/env python

def getLength(arr):
    if len(arr) == 0:
        return 0
    if len(arr) == 1:
        if type(arr[0]) == int:
            return 1
        else:
            return getLength(arr[0])
    else:
        if type(arr[0]) == int:
            return 1 + getLength(arr[1:])
        else:
            return getLength(arr[0]) + getLength(arr[1:])

print(getLength([1, [2, [3, 4]],5]))

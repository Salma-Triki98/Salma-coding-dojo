


def countdown(x):
    arr = []
    for i in range(x,-1,-1):
        arr.append(i)
    print(arr)
    return arr

y= countdown(5)  
print(y)      


def print_and_return(a):
    print(a[0])
    return[a[1]]

list =  print_and_return([1,2])
print(list)

def first_plus_length(s):
    sum= s[0]+ len(s)
    return sum

result= first_plus_length([1,2,3,4,5]) 
print(result)

newlist = []
def values_greater_than_second(list1):
    count = 0 
    if len(list1)>1:
        for i in  range(0,len(list1)):
            if list1[i]>list1[1]:
                newlist.append(list1[i])
            else:
                count = count + 1
        print(count)
        return newlist
    else:
        return False

    
z = values_greater_than_second([5,2,3,2,1,4]) 
print(z)

s = values_greater_than_second([3])
print(s)


list3=[]
def length_and_value(size,value):
    for i in range(0,size):
        list3.append(value)
    return(list3)

result=length_and_value(4,7)
print(result)
    


        





# Basic
for i in range(151):
    print(i)

# Multiple of five
for i in range(5,1001,5):
    print(i)

# Counting the dojo way
for i in range(1,101):
    if i%10 == 0:
        print("Coding Dojo")
    elif i%5 == 0:
        print("coding")
    else: 
        print(i)

# Whoa
sum=0
for i in range(0,500000):
    if i%2 !=0:
        sum=sum+i
print(sum)

# Countdown by Fours
for i in range(2018,0,-4):
    print(i)

# Flexible Counter
low_num = 2
high_num = 9
mult = 3
for i in range(low_num,high_num+1):
    if i%mult==0:
        print(i)



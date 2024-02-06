# inputRange = int(input('enter the range ---------- '))
# my_list =[]
# for num in range(1,inputRange+1):
#     if num <2:
#         my_list.append(num)
#     else:
#         my_list.append('#')
#         my_list.append(num)
#     if num %2 == 0:
#         reverseList = my_list[::-1]
#         for item in reverseList:
#             print(item,end=" ")
#         print('\n')
#     else:
#         for item in my_list:
#             print(item, end= " ")
#         print('\n')

alphabets = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
print(len(alphabets))
inputString = input('enter the input string--------')
reverseString = inputString[::-1]
for str in reverseString:
    for alpha in alphabets:
        if str == alpha:
            ind=alphabets.index(alpha)
            print(alphabets[ind+1],end=' ')
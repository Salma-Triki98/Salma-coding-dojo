x = [ [5,2,3], [10,8,9] ] 
students = [
    {'first_name':  'Michael', 'last_name' : 'Jordan'},
    {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0]=15
print(x)

students[0]['last_name']= 'Bryant'
print(students)

sports_directory['soccer'][0]='Andres'
print(sports_directory)

z[0]['y']=30
print(z)


students = [
        {'first_name':  'Michael', 'last_name' : 'Jordan'},
        {'first_name' : 'John', 'last_name' : 'Rosales'},
        {'first_name' : 'Mark', 'last_name' : 'Guillen'},
        {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

def iterateDictionary(some_lists):
        for i in range(0,len(some_lists)):
            resultat=''
            for key, vale in some_lists[i].items():
                resultat+= f'{key} - {vale}, '
            print(resultat)
        
y=iterateDictionary(students)


def iterateDictionary2(key_name, some_list):
    for i in range(0,len(some_list)):
        for key,vale in some_list[i].items():
            if key == key_name:
                print(vale)

e=iterateDictionary2('first_name', students)


dojo = {
    'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
    'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}

            

for key, value in dojo.items():
    print(len(value), key)
    for i in value: 
        print(i)
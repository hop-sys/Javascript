import json
json_str = '{"name":"Rumi","age":16,"active":true}'
py_data = json.loads(json_str)

for i in range (10):
    print("The new value of i is: ", i)
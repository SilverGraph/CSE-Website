import json

l={}
a = 1
for i in range(5):
    # _id = str(a)
    l['id_' + str(a)] = {}
    l['id_' + str(a)]['email'] = "asdfas"
    l['id_' + str(a)]['date'] = a + 20
    l['id_' + str(a)]['photo_url'] = "https://example-url.com"
    a += 1
print(json.dumps(l, sort_keys=True, indent=4))     
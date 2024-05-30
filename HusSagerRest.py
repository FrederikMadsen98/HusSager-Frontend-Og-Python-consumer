import requests

base_url = 'https://localhost:7045'
endpoint = '/api/hussager'

url = base_url + endpoint

# Laver et get request til rest servicen
response = requests.get(url, verify=False)

if response.status_code == 200:
    # Hvis status koden er 200, konverteres responsen til json
    data = response.json()

    # Tjekker om dataen er en liste
    if isinstance(data, list):
        # Hvis dataen er en liste printer den hver værdi i på linjerne i listen
        for item in data:
            print(item)
    else:
            print(data)
else:
    # Hvis statuskoden ikke er 200, skal der printes en error message
    print(f'Error: Received status code {response.status_code}')
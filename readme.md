# Contacts App Server (Simple CRUD)
@Author: Frederic Lossignol
Ce serveur est construit sur Express (NodeJS). 
L'API permet de gérer en CRUD une donnée de type Array of Contact

***endpoints*** : 
- [GET] **/contacts** 
reponse 200 :  un Array de contacts | format JSON
  ``` 
  [
  {"id":1,"name":"Bill Gates","type":"teacher"},
  {"id":2,"name":"Steve Jobs","type":"student"}
  ]
  ```
- [POST] **/contacts** 
ajoute un contact
payload | format JSON
reponse 201 :  Contact Object | format JSON
  ``` 
  {"name":"Elon Musk","type":"student"}  
  ```
- [DELETE] **/contacts/{id}** (delete un contact)
  param: id | format number
  response 200 : id


## Commencer avec ce serveur

- **Download** le projet en local
- **npm install** pour installer les dépendances
- **npm run dev** lance le serveur de développement sur http://localhost:3000

Si vous souhaitez build l'application : 
- **npm run build** compile le projet avec tsup et génère notre fichier de destination
- **npm run start** lance l'application après le build
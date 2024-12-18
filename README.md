# Nodejs - Routing

### Esercizio
1. Usando l’array dei post fornito con le relative immagini, creare un file di routing (`routers/posts.js`) che conterrà le rotte necessario per l’entità `post`.
2. All’interno creare le rotte per le operazioni CRUD (*Index, Show, Create, Update e Delete)*
3. Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.

##### Ad esempio:
- Se viene chiamata `/posts` col verbo `GET` ci aspettiamo “Lista dei post”;
- Se viene chiamato `/posts/1` col verbo `DELETE` ci aspettiamo “Cancellazione del post 1"
e via dicendo…

4. Registrare il router dentro `app.js` con il prefisso `posts/`.

### Bonus
- Provare a restituire la lista dei post dalla rotta *index*, in formato `json`
- Provare a restituire un singolo post dalla rotta *show,* sempre in formato `json`
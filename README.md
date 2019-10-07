# Rocketseat Lives

Temas diversos abordados nas lives do bootcamp

## Extensões utilizadas no VSCode

- Dracula Official
- Material Icon Theme
- Rocketseat React Native
- Rocketseat ReactJS
- Color Highlight

## Configurações do VSCode

As configurações devem ser feitas no arquivo json de configurações do VS Code.

### Habilitando o jsx no Emmet

```json
    "emmet.syntaxProfiles": {
      "javascript": "jsx",
    },
    "emmet.includeLanguages": {
      "javascript": "javascriptreact"
    }
```

### Problemas com CORS

A dependência `cors` instalada no backend da aplicação permite configurar o acesso à API.

Deve ser importada no arquivo `server.js` e usada antes das chamadas app.use():  `app.use(cors())`.

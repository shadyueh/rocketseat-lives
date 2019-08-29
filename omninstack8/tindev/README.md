## Instalação do React-Native via yarn

Adicione a dependência ao projeto

```
yarn global add react-native-cli
```

Coloque o caminho do yarn global no PATH do terminal

```
export PATH="$(yarn global bin):$PATH"
```

## Criação da App React-Native

```
react-native init <app-name>
```

## Ambiente mobile

Para executar a aplicação no dispositivo móvel
segue-se para habilitar o dispositivo para a depuração USB.

No caso do sistema Android, JDK8 e android SDK devem estar instalados. As instruções estão em [docs.rocketseat.dev]

### Para localizar o device

```
adb devices
```

### Para executar a aplicação react

Em um terminal inicie o Metro Bundler executando o comando a seguir dentro do diretório da aplicação móvel:

```
yarn start
```

Depois de carregado, inicie a aplicação com

```
react-native run-android
```

### Ative o live reload na app instalada

Chacoalhe o dispositivo para o menu aparecer
e então selecione a opção 'live reload'

# Configurando o TypeScript
Comando: ```npm i typescript --save-dev```

# Iniciando o TypeScript no Projeto
Comando: ```npx tsc --init```

# Opcionais
* TSLINT
    * Comando para instalação: ```npm i tslint --save-dev```
    * npx tslint --init 

# Configurando testes
* Lib de testes + Config node to run TS files -> ```npm i -D jest @types/jest ts-node --save-dev```
* Compilador da VERCEL em rust pra transpilar rapidamente o código em javaScript```npm i -D @swc/jest @swc/cli @swc/core```

# Inicializando JEST
* Passo 1 ``` npx jest --init ```
* passo 2 Adicionado a seguinte linha de código no arquivo **jest.config.ts**
```
transform: {
    "^.+\.(t|j)sx?$": ["@swc/jest"],
} 
```

# Rodando o teste.
``` npm test ```
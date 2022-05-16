
# Instalando docker
Instale o Docker Desktop no Windows
Instalar interativamente
Clique duas vezes em Docker Desktop Installer.exe para executar o instalador.

Se você ainda não baixou o instalador (Docker Desktop Installer.exe), pode obtê-lo no Docker Hub. Normalmente, ele é baixado na pasta Downloads ou você pode executá-lo na barra de downloads recentes na parte inferior do navegador da web.

Quando solicitado, verifique se a opção Usar WSL 2 em vez de Hyper-V na página Configuração está selecionada ou não, dependendo de sua escolha de back-end.

Se o seu sistema suportar apenas uma das duas opções, você não poderá selecionar qual back-end usar.

Siga as instruções no assistente de instalação para autorizar o instalador e prosseguir com a instalação.

Quando a instalação for bem-sucedida, clique em Fechar para concluir o processo de instalação.

Se sua conta de administrador for diferente de sua conta de usuário, você deverá adicionar o usuário ao grupo docker-users. Execute o Gerenciamento do Computador como administrador e navegue até Usuários e Grupos Locais > Grupos > usuários docker. Clique com o botão direito do mouse para adicionar o usuário ao grupo. Saia e faça login novamente para que as alterações entrem em vigor.

## Subindo Container
nos arquivos da api dataconatainer compose-yml navegue ate ela pelo cmd e execute o comando docker-compose up,
depois entre no http://localhost:8085 digite testesharenergy@admin.com e senha admin123 você chegara na tela abaixo
![image](https://user-images.githubusercontent.com/67244309/168502874-5643c4d4-cf37-4e70-b533-7c94e4c7ab68.png)


clique bdteste se nao aparecer e so criar clicando com botao direito
na sequencia pediar a senha do postgres digite admin12345.

# Criando a tabela 

clique em testesharenergy depois clique em schemas e na opção tables botao direito clique na opção querytools
agora va na pasta da api => database => createSql


![image](https://user-images.githubusercontent.com/67244309/168503475-b0746ff7-b1e2-4546-93e2-035b0eb971c1.png)



 selecione to o seu contudo copie e cole todo seu conteúdo e execute a querytool ele criara toda a sua tabela
 
 
 
 ![image](https://user-images.githubusercontent.com/67244309/168503635-44fd83f5-c13a-4502-8e74-a949c03048a0.png)
 
 
 em seguida botao direito em cima da article clique na opçao restore selecione a opçao de upload de arquivo e dê duplo clique em qualquer espaço # \*VAZIO DA TELA*
 navege até a api => dataconatainer => BKPtestesharenergy e clique e confirme e o banco de dados estará pronto para ser usado
 
 
 
 ![image](https://user-images.githubusercontent.com/67244309/168503870-38fca708-828c-40ef-8100-97d6ddb7437b.png)
 
 
 

 só será necessario fazer isso uma vez...depois da primeira basta ir no cmd navegar até a pasta do projeto api onde esta o arquivo yml e executar docker-compose start

 #                              O Projeto

### Página inicial 




![image](https://user-images.githubusercontent.com/67244309/168506310-65a32942-1307-4e7c-b604-b159fde0b672.png)

Composta por menu padrao e status de usuario logado ou nao totalmente responsivo com uso de bootstrap e tbm personalização em css.
Usuario so fara pesquisa ou ir para detalhes se estiver devidamente logado .
não estando logado ao tentar acessar detalhes ou pesquisar sera redirecionado automaticamente para login.

# Visualização Mobile 


![image](https://user-images.githubusercontent.com/67244309/168506753-5322ba31-e2a7-4670-b0c1-719f3e6d796c.png)


* # O Login



![image](https://user-images.githubusercontent.com/67244309/168506983-3dcf88b4-ae59-42ae-9e68-91a7247ccae7.png)


# Mobile



![image](https://user-images.githubusercontent.com/67244309/168507418-99168de2-fe44-4f30-8f28-497fa52f3ef7.png)


## cadastro ##




![image](https://user-images.githubusercontent.com/67244309/168507513-97766298-f885-46b9-9e9b-0c311f6b5e59.png)

totalmente simples e objetivo !
Depois de logado o usuario tera acesso as outras funções e status estara on e com botao de logout...




![image](https://user-images.githubusercontent.com/67244309/168508421-2c620201-3b58-4151-8c19-98469ecb0547.png)

-- FIM--


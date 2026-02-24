#### Desenvolvimento de uma API Rest com Node.js



###### Aula 01.2:



API: Application Programming Interface. É um conjunto de regras e definições que permite que diferentes software se comuniquem entre si.



Uma API é como um "conector" que deixa diferentes programas conversarem entre si. Em vez de precisar entender tudo que acontece dentro de um software. Eles usam a API para fornecer esse tipo de serviço.



Através das APIs é possível criar aplicativos que usam funcionalidades de outros lugares.



API REST: É um estilo de arquitetura REST, utilizando HTTP para comunicação e geralmente operando com métodos HTTP (GET, POST, PUT, DELETE) para manipular recursos.

&nbsp;    PC----JSON, passa para os métodos HTTP e depois----SERVIDOR.



GET: é usado para solicitar dados de um recurso especifico. Ele é usado para recuperar informações, e não modifica-las.



POST: é usado para enviar dados para o servidor criar um novo recurso.



PUT: ele faz a operação para substituir o recurso existente.



DELETE: é usado para deletar.



##### Códigos de status POST:



&nbsp;**200K (OK**): Indica que a requisição foi bem sucedida. É o código que o servidor retorna a requisição foi processada com sucesso.



&nbsp;**201 (Create)**: Indica que a requisição foi bem sucedida e resultou na criação de um novo recurso no servidor.



&nbsp;**204 (No Content)**: Indica que a requisição foi bem sucedida, mas não há conteúdo para retornar ao cliente. É comum em resposta de requisições que não retornam dados, como atualização de status.



&nbsp;**400 (Bad Request)**: Indica que a requisição feita pelo cliente é inválida, geralmente devido a dados malformados ou ausentes.



&nbsp;**404 (Not Found)**: Indica que o recurso requisitado não foi encontrado no servidor. É o código de erro padrão quando uma URL não corresponde a nenhum recurso disponível.



&nbsp;**500 (Internetal Server Error)**: Isso significa que algo deu errado no servidor quando tentava processar a requisição, mas o servidor não consegue especificar a natureza exata do problema.



##### 





&nbsp;


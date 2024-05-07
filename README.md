Nome:
regex
Copy code
^[A-Za-zÀ-ú\s]+$
Esta expressão garante que o campo de nome contenha apenas letras (maiúsculas e minúsculas) e espaços.

Email:
regex
Copy code
^[^\s@]+@[^\s@]+\.[^\s@]+$
Essa expressão valida um formato de email básico, garantindo a presença de "@" e "." em posições adequadas.

Telefone:
regex
Copy code
^\([0-9]{2}\)\s?[0-9]{4,5}-?[0-9]{4}$
Esta expressão valida diversos formatos comuns de números de telefone brasileiros, incluindo opções com ou sem espaços e hífens.


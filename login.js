class UsuarioService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    // Método para login
    async login(email, senha) {
        const usuario = { email, senha };

        try {
            const response = await fetch(`${this.baseUrl}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(usuario)
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('token', data.token);
                localStorage.setItem('nomeUsuario', data.nome);
                window.location.href = '/agenda-horarios.html';
            } else {
                alert('Email ou senha incorretos.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro de conexão.');
        }
    }

    // Método para editar um usuário
    async editarUsuario(id, dadosAtualizados) {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${this.baseUrl}/usuarios/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`  // Envia o token de autenticação
                },
                body: JSON.stringify(dadosAtualizados)
            });

            if (response.ok) {
                alert('Usuário atualizado com sucesso.');
                window.location.reload();  // Recarrega a página para refletir as mudanças
            } else {
                alert('Erro ao atualizar usuário.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro de conexão ao tentar editar o usuário.');
        }
    }

    // Método para deletar um usuário
    async deletarUsuario(id) {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${this.baseUrl}/usuarios/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`  // Envia o token de autenticação
                }
            });

            if (response.ok) {
                alert('Usuário deletado com sucesso.');
                window.location.reload();  // Recarrega a página após deletar o usuário
            } else {
                alert('Erro ao deletar usuário.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro de conexão ao tentar deletar o usuário.');
        }
    }

    // Método para editar um endereço
    async editarEndereco(id, enderecoAtualizado) {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${this.baseUrl}/enderecos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`  // Envia o token de autenticação
                },
                body: JSON.stringify(enderecoAtualizado)
            });

            if (response.ok) {
                alert('Endereço atualizado com sucesso.');
                window.location.reload();  // Recarrega a página para refletir as mudanças
            } else {
                alert('Erro ao atualizar endereço.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro de conexão ao tentar editar o endereço.');
        }
    }

    // Método para deletar um endereço
    async deletarEndereco(id) {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${this.baseUrl}/enderecos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`  // Envia o token de autenticação
                }
            });

            if (response.ok) {
                alert('Endereço deletado com sucesso.');
                window.location.reload();  // Recarrega a página após deletar o endereço
            } else {
                alert('Erro ao deletar endereço.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro de conexão ao tentar deletar o endereço.');
        }
    }

    // Método para editar um número
    async editarNumero(id, numeroAtualizado) {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${this.baseUrl}/numeros/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`  // Envia o token de autenticação
                },
                body: JSON.stringify(numeroAtualizado)
            });

            if (response.ok) {
                alert('Número atualizado com sucesso.');
                window.location.reload();  // Recarrega a página para refletir as mudanças
            } else {
                alert('Erro ao atualizar número.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro de conexão ao tentar editar o número.');
        }
    }

    // Método para deletar um número
    async deletarNumero(id) {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${this.baseUrl}/numeros/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`  // Envia o token de autenticação
                }
            });

            if (response.ok) {
                alert('Número deletado com sucesso.');
                window.location.reload();  // Recarrega a página após deletar o número
            } else {
                alert('Erro ao deletar número.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro de conexão ao tentar deletar o número.');
        }
    }

    // Verifica se o usuário está logado
    static isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }

    // Método para fazer logout
    static logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('nomeUsuario');
        window.location.href = '/login.html';
    }
}

// Função para lidar com o login
function loginHandler() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    const usuarioService = new UsuarioService('http://localhost:8080');  // URL da sua API
    usuarioService.login(email, senha);
}

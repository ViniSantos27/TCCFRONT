import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';

// Componente com Imagem (removido)
const ImageComponent = () => {
  return (
    <div className="image-container">
      {/* Imagem removida */}
    </div>
  );
};

// Página Inicial
const Home = () => {
  return (
    <div className="login-container">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/schedule">Agenda de Horários</Link></li>
            <li><Link to="/establishment">Estabelecimento</Link></li>
            <li><Link to="/register">Cadastro de Clientes</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="container">
          <h1>Agendamento <br /> Eficiente</h1>
          <p>A plataforma de agendamentos, onde a eficiência encontra a simplicidade para otimizar seu tempo.</p>
          <Link to="/login" className="login-button">LOGIN</Link>
        </div>
        <ImageComponent /> {/* Componente removido */}
      </main>
      <footer>
        <p>&copy; 2023 Agendamento Eficiente. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

// Página de Login
const Login = () => {
  const navigate = useNavigate();

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  const handleForgotPasswordClick = () => {
    window.location.href = '#recovery';
  };

  return (
    <div className="login-container">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/schedule">Agenda de Horários</Link></li>
            <li><Link to="/establishment">Estabelecimento</Link></li>
            <li><Link to="/register">Cadastro de Clientes</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="login-section">
          <h2>Login</h2>
          <form onSubmit={handleLoginClick}>
            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit" className="login-button">Entrar</button>
            <button type="button" className="forgot-password-button" onClick={handleForgotPasswordClick}>
              Esqueceu a senha?
            </button>
          </form>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Agendamento Eficiente. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

// Página de Cadastro de Clientes
const Register = () => {
  const [clients, setClients] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    cpf: '',
    birthdate: '',
    email: '',
    phone: '',
    cep: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClients([...clients, formData]);
    setFormData({
      name: '',
      cpf: '',
      birthdate: '',
      email: '',
      phone: '',
      cep: ''
    });
  };

  return (
    <div className="register-container">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/schedule">Agenda de Horários</Link></li>
            <li><Link to="/establishment">Estabelecimento</Link></li>
            <li><Link to="/register">Cadastro de Clientes</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="register-page">
          <div className="register-section">
            <h2>Cadastro de Cliente</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="name">Nome:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="cpf">CPF:</label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="birthdate">Data de Nascimento:</label>
                <input
                  type="date"
                  id="birthdate"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-row">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="phone">Telefone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="cep">CEP:</label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="register-button">Cadastrar</button>
            </form>
            <div className="client-list">
              <h3>Clientes Cadastrados</h3>
              <table className="client-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Data de Nascimento</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>CEP</th>
                  </tr>
                </thead>
                <tbody>
                  {clients.map((client, index) => (
                    <tr key={index}>
                      <td>{client.name}</td>
                      <td>{client.cpf}</td>
                      <td>{client.birthdate}</td>
                      <td>{client.email}</td>
                      <td>{client.phone}</td>
                      <td>{client.cep}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Agendamento Eficiente. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

// Página de Agenda de Horários
const Schedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState({ id: '', time: '', client: '', establishment: '' });
  const [schedule, setSchedule] = useState([
    { id: 1, time: '09:00', client: 'João Silva', establishment: 'Estabelecimento A' },
    { id: 2, time: '10:00', client: 'Ana Souza', establishment: 'Estabelecimento B' },
    { id: 3, time: '11:00', client: 'Luiz Santos', establishment: 'Estabelecimento C' },
  ]);

  const openModal = (data) => {
    setEditData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    setSchedule(schedule.map(item => item.id === editData.id ? editData : item));
    closeModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  };

  const handleDelete = (id) => {
    setSchedule(schedule.filter(item => item.id !== id));
  };

  return (
    <div className="schedule-container">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/schedule">Agenda de Horários</Link></li>
            <li><Link to="/establishment">Estabelecimento</Link></li>
            <li><Link to="/register">Cadastro de Clientes</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="schedule-section">
          <h2>Agenda de Horários</h2>
          <table className="schedule-table">
            <thead>
              <tr>
                <th>Hora</th>
                <th>Cliente</th>
                <th>Estabelecimento</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map(item => (
                <tr key={item.id}>
                  <td>{item.time}</td>
                  <td>{item.client}</td>
                  <td>{item.establishment}</td>
                  <td>
                    <button onClick={() => openModal(item)}>Editar</button>
                    <button onClick={() => handleDelete(item.id)} style={{ backgroundColor: 'red', color: 'white' }}>Excluir</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <h3>Editar Agendamento</h3>
                <form onSubmit={handleEditSubmit}>
                  <label>Hora:</label>
                  <input type="time" name="time" value={editData.time} onChange={handleChange} required />
                  <label>Cliente:</label>
                  <input type="text" name="client" value={editData.client} onChange={handleChange} required />
                  <label>Estabelecimento:</label>
                  <input type="text" name="establishment" value={editData.establishment} onChange={handleChange} required />
                  <button type="submit">Salvar</button>
                  <button type="button" onClick={closeModal}>Cancelar</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Agendamento Eficiente. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

// Página de Estabelecimento
const Establishment = () => {
  const [establishments, setEstablishments] = useState([]);
  const [formData, setFormData] = useState({ name: '', address: '', contact: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEstablishments([...establishments, formData]);
    setFormData({ name: '', address: '', contact: '' });
  };

  return (
    <div className="establishment-container">
      <header>
        <nav>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/schedule">Agenda de Horários</Link></li>
            <li><Link to="/establishment">Estabelecimento</Link></li>
            <li><Link to="/register">Cadastro de Clientes</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="establishment-section">
          <h2>Cadastro de Estabelecimento</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            <label htmlFor="address">Endereço:</label>
            <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required />
            <label htmlFor="contact">Contato:</label>
            <input type="text" id="contact" name="contact" value={formData.contact} onChange={handleChange} required />
            <button type="submit">Cadastrar</button>
          </form>
          <div className="establishment-list">
            <h3>Estabelecimentos Cadastrados</h3>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Endereço</th>
                  <th>Contato</th>
                </tr>
              </thead>
              <tbody>
                {establishments.map((establishment, index) => (
                  <tr key={index}>
                    <td>{establishment.name}</td>
                    <td>{establishment.address}</td>
                    <td>{establishment.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <footer>
        <p>&copy; 2023 Agendamento Eficiente. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

// Componente App
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/establishment" element={<Establishment />} />
      </Routes>
    </Router>
  );
};

export default App;

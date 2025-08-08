const express = require('express');
const app = express();
const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];
  
function filtrorPorEspecialidad(especialidad) {
    return usersData.filter(user => user.specialty === especialidad);
  } 


function plantilla(specialty, path, users) {
    const userList = users.map(user => `
        <li>
        <p><strong>Id:</strong> ${user.id}</p>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Age:</strong> ${user.age}</p>
        </li>`).join('');
        const numeroDeUsuarios = users.length;
        
    return `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${specialty}</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, sans-serif;
            margin: 0;
            padding: 2rem;
            background: linear-gradient(135deg, #eef2f3, #cfd9df);
            color: #2c3e50;
        }
        h1 {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }
        h2 {
            text-align: center;
            font-weight: normal;
            color: #34495e;
            margin-top: 0;
            margin-bottom: 1.5rem;
        }
        p {
            text-align: center;
            margin: 0.4rem 0;
        }
        ul {
            list-style: none;
            padding: 0;
            max-width: 500px;
            margin: 1rem auto;
        }
        ul li {
            background: white;
            margin: 0.5rem 0;
            padding: 0.8rem 1rem;
            border-radius: 8px;
            box-shadow: 0 2px 6px rgba(0,0,0,0.08);
            transition: transform 0.2s ease;
        }
        ul li:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.12);
        }
        nav {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-top: 2rem;
            gap: 0.8rem;
        }
        nav a {
            text-decoration: none;
            background: #3498db;
            color: white;
            padding: 0.6rem 1rem;
            border-radius: 6px;
            transition: background 0.2s ease, transform 0.2s ease;
        }
        nav a:hover {
            background: #2980b9;
            transform: translateY(-2px);
        }
    </style>
</head>
<body>
    <h1>ESPECIALIDAD</h1>
    <h2>${specialty}</h2>
    <p>Current Path: ${path}</p>
    <p>Número de usuarios: ${numeroDeUsuarios}</p>
    <ul>${userList}</ul>
    <nav>
        <a href="/qas">QAs</a>  
        <a href="/developers">DEVELOPERS</a>
        <a href="/marketing">MARKETING</a>
        <a href="/ventas">VENTAS</a>
        <a href="/ciberseguridad">CIBERSEGURIDAD</a>
        <a href="/datascience">DATA SCIENCE</a>
        <a href="/ux">UX</a>
    </nav>
</body>
</html>
`;

  }

    app.get('/', (req, res) => {
        res.send(plantilla('Pagina principal', req.path, []));
      });
      
    app.get('/qas', (req, res) => {
        const qas = filtrorPorEspecialidad('QAs');
       res.send(plantilla('QAs', req.path, qas));
      });
      app.get('/developers', (req, res) => {
        const developers = filtrorPorEspecialidad('developers');
        res.send(plantilla('DEVELOPERS', req.path, developers));
       });
       app.get('/marketing', (req, res) => {
        const marketing = filtrorPorEspecialidad('marketing');
        res.send(plantilla('MARKETING', req.path, marketing));
       });
       app.get('/ventas', (req, res) => {
        const ventas = filtrorPorEspecialidad('ventas');
        res.send(plantilla('VENTAS', req.path, ventas));
       });

      app.use((req, res) => {
        res.status(404).send(`<h2>PAGINA NO ENCONTRADA</h2>
        <p>Ruta ingresada: ${req.path}</p> <a href="/">VOLVER al inicio</a>`);
      });
      
      app.listen(3000, () => {
        console.log(
          'app-express.js se esta escuchando en puerto http://localHost:3000/'
        );
      });
      
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
            <p>id: ${user.id}</p>
            <p>name: ${user.name}</p>
            <p>age: ${user.age}</p>
        </li>`).join('');
        const numeroDeUsuarios = users.length;
        
    return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${specialty}</title>
    </head>
    <h1>ESPECIALIDAD</H1>
    <h2>${specialty}</h2>
    <p>Current Path: ${path}</p>
    <p>Numero de usuarios: ${numeroDeUsuarios}</p>
    <ul>${userList}</ul>
    <nav>
    <a href="/qas">QAs</a>  
    <a href="/developers">DEVELOPERS</a>
    <a href="/marketing>MARKETING</a>
    <a href="/ventas">VENTAS</a>
    <a href="/ciberseguridad">CIBERSEGURIDAD</a>
    <a href="/datascience">DATA SCIENCE</a>
    <a href="/ux">UX</a>
    </nav>`;
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
      
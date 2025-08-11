<?php

$errores = [];

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $dni = $_POST['dni'];
    $nombre_usuario = $_POST['nombre_usuario'];
    $contraseña = $_POST['contraseña'];
    $confirmar_contraseña = $_POST['confirmar_contraseña'];

    if(!$nombre){
        $errores[] = 'El campo nombre no puede estar vacio'; 
    }

    if(!$apellido){
        $errores[] = 'El campo apellido no puede estar vacio'; 
    }

    if(!$telefono){
        $errores[] = 'El campo telefono no puede estar vacio'; 
    }

    if(!$email){
        $errores[] = 'El campo email no puede estar vacio'; 
    }

    if(!$dni){
        $errores[] = 'El campo dni no puede estar vacio'; 
    }

    if(!$nombre_usuario){
      $errores[] = 'El campo nombre_usuario no puede estar vacio';
    }

    if(!$contraseña){
        $errores[] = 'El campo contraseña no puede estar vacio'; 
    }

    if(!$confirmar_contraseña){
        $errores[] = 'El campo confirmar_contraseña no puede estar vacio'; 
    }

    if(empty($errores)){

        try {
            require 'conexion.php';

            $id_con = base_proyectos();

            $query = "INSERT INTO usuarios_paradiise (nombre,apellido,telefono,email,dni,nombre_usuario,contrasenia,confirmar_contrasenia) VALUES ('$nombre','$apellido','$telefono','$email','$dni','$nombre_usuario','$contraseña','$confirmar_contraseña')";

            // print_r($query);
            $resultado = sqlsrv_query($id_con,$query);


        } catch (\Throwable $th) {
            var_dump($th);
        }
    }
}

?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Inicio de Sesión / Registro</title>
  <link rel="stylesheet" href="../css/normalize.css" />
  <link rel="stylesheet" href="../css/style.css" />
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script></head>

<body class="login-page">
   <!-- Es la parte de Iniciar Sesion  -->
  <form class="container">
    <h2>Iniciar Sesión</h2>
    <div class="form-group">
      <label for="login-email">Username</label>
      <input type="text" id="login-email" placeholder="Username" />
    </div>
    <div class="form-group">
      <label for="login-password">Contraseña</label>
      <input type="password" id="login-password" placeholder="Contraseña" />
    </div>
    <button class="btn">Ingresar</button>
    <div class="link">
      <p><a href="#">¿Olvidaste tu contraseña?</a></p>
      <p><a href="#registro">Crear cuenta</a></p>
    </div>
  </form>
    <!-- Cierra la parte de iniciar sesion  -->

    <!-- Inicia la parte del registro -->
  <form action="" method="POST" class="container" id="registro">
  <h2>Crear Cuenta</h2>

  <div class="form-group">
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre" placeholder="Nombre" required />
  </div>
  <div class="form-group">
    <label for="apellido">Apellido</label>
    <input type="text" id="apellido" name="apellido" placeholder="Apellido" required />
  </div>
  <div class="form-group">
    <label for="telefono">Teléfono</label>
    <input type="tel" id="telefono" name="telefono" placeholder="Teléfono" required />
  </div>
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="Correo electrónico" required />
  </div>
  <div class="form-group">
    <label for="dni">DNI (por ser una tienda)</label>
    <input type="text" id="dni" name="dni" placeholder="DNI" required />
  </div>
  <div class="form-group">
    <label for="usuario">Nombre de Usuario</label>
    <input type="text" id="usuario" name="nombre_usuario" placeholder="Nombre de Usuario" required />
  </div>
  <div class="form-group password_container">
    <label for="registro_password">Contraseña</label>
    <input type="password" id="registro_password" name="contraseña" placeholder="Contraseña" required />
  </div>
  <div class="form-group">
    <label for="confirmar_password">Confirmar Contraseña</label>
    <input type="password" id="confirmar_password" name="confirmar_contraseña" placeholder="Confirmar contraseña" required />
  </div>
  <div class="captcha">
    Agregar CAPTCHA
  </div>
  <input type="submit" class="btn_registro" id="btn-crear" value="Crear cuenta" >
</form>

  <!-- Cierra la parte del registo -->


  <!--
  <div class="container" id="registro">
    <h2>Crear Cuenta</h2>
    <div class="form-group">
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" placeholder="Nombre" />
    </div>
    <div class="form-group">
      <label for="apellido">Apellido</label>
      <input type="text" id="apellido" placeholder="Apellido" />
    </div>
    <div class="form-group">
      <label for="telefono">Teléfono</label>
      <input type="tel" id="telefono" placeholder="Teléfono" />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" placeholder="Correo electrónico" />
    </div>
    <div class="form-group">
      <label for="dni">DNI (por ser una tienda)</label>
      <input type="text" id="dni" placeholder="DNI" />
    </div>
    <div class="form-group">
      <label for="usuario">Nombre de Usuario</label>
      <input type="text" id="usuario" placeholder="Nombre de Usuario" />
    </div>
    <div class="form-group">
      <label for="registro-password">Contraseña</label>
      <input type="password" id="registro-password" placeholder="Contraseña" />
    </div>
    <div class="form-group">
      <label for="confirmar-password">Confirmar Contraseña</label>
      <input type="password" id="confirmar-password" placeholder="Confirmar contraseña" />
    </div>
    <div class="captcha">
      Agregar CAPTCHA
    </div>
    <button class="btn">Crear Cuenta</button>
  </div> -->
  <!-- <script src="../js/register.js"></script> -->
</body>
</html>

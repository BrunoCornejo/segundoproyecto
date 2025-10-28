import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navegacion = useNavigate();

  //Se guarda el usuario en el LocalStorage. USUARIOS=[]
  function obtenerDelLocalStorage() {
    const usuariosDelLocalStorage =
      JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuariosDelLocalStorage;
  }

  function guardarEnLocalStorage(nuevoListado) {
    localStorage.setItem("usuarios", JSON.stringify(nuevoListado));
  }
  function onSubmit(data) {
    try {
      const nuevoUsuario = {
        id: Date.now(),
        email: data.email,
        password: data.password,
        createdAt: new Date().toISOString(),
      };
      console.log(nuevoUsuario);

      
      const listadoUsuariosLS = obtenerDelLocalStorage();
      guardarEnLocalStorage([...listadoUsuariosLS, nuevoUsuario]);
      
      alert("Usuario registrado con éxito");
      reset();

      //Redireccionar al Login
      navegacion("/");
    } catch (error) {
      console.log(error);
      alert("No se pudo registrar el usuario");
    }
  }
  console.log(errors);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="ejemplo@email.com"
          isInvalid={errors.email}
          //   isValid={!errors.email}
          {...register("email", {
            required: "El campo es obligatorio",
            minLength: {
              value: 5,
              message: "Debe ingresar al menos 5 caracteres",
            },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Debe ingresar un email válido",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.email?.message}
        </Form.Control.Feedback>
        {/* <Form.Control.Feedback type="valid">Bien hecho</Form.Control.Feedback> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          isInvalid={errors.password}
          {...register("password", {
            required: "El campo es obligatorio",
            minLength: {
              value: 4,
              message: "Debe ingresar al menos 4 caracteres",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password?.message}
        </Form.Control.Feedback>{" "}
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
    </Form>
  );
}
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { guardarEnSessionStorage } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";

export default function FormLogin() {
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

  function obtenerDelLocalStorage() {
    const usuariosDelLocalStorage =
      JSON.parse(localStorage.getItem("usuarios")) || [];
    return usuariosDelLocalStorage;
  }

  function onSubmit(data) {
 

    const usuariosDelLocalStorage = obtenerDelLocalStorage();
  

    //Verifico que el usuario exista
    const usuarioExistente = usuariosDelLocalStorage.find((usuario) => {
      return usuario.email === data.email;
    });


    //Reviso que la contraseña sea correccta
    if (!usuarioExistente) {
      alert("Los datos ingresados son incorrectos");
      return;
    }

    if (usuarioExistente.password !== data.password) {
      alert("Los datos ingresados son incorrectos");
      return;
    }

    guardarEnSessionStorage("usuario", usuarioExistente);
    alert("Has iniciado sesión correctamente");
    reset();
    navegacion("/");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Ingrese su email"
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
              value: 5,
              message: "Debe ingresar al menos 5 caracteres",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors?.password?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Iniciar Sesión
      </Button>
    </Form>
  );
}

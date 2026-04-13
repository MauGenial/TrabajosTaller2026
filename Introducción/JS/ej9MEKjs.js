function ejercicio9(){
   let p1 = new Persona("Josefina", 34, "Femenina")
   console.log(p1.obtDetalles());

   let p2 = new Estudiante("Mau", 16, "Masculino", "4 15", "Mañana")
   console.log(p2.registrar());
   p2.obtDetalles();
   
   let p3 = new Profesor("Cobra", 49, "Masculino", "Ingles", "2")
   console.log(p3.asignar());
   p3.obtDetalles();
}

   function Persona(nombre, edad, genero){
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
   }

   Persona.prototype.obtDetalles = function(){
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Genero: ${this.genero}`);
   }

   function Estudiante(nombre, edad, genero, curso, grupo){
        Persona.call(this, nombre, edad, genero);
        this.curso = curso;
        this.grupo = grupo;
   }
   
   Estudiante.prototype = Object.create(Persona.prototype);
   Estudiante.prototype.constructor = Estudiante;

   Estudiante.prototype.registrar = function(){
        console.log(`${this.nombre} ha sido registrado en el curso ${this.curso}, grupo ${this.grupo}`)
   }

   function Profesor(nombre, edad, genero, asignatura, nivel){
        Persona.call(this, nombre, edad, genero);
        this.asignatura = asignatura;
        this.nivel = nivel;
   }

   Profesor.prototype = Object.create(Persona.prototype);
   Profesor.prototype.constructor = Profesor;

   Profesor.prototype.asignar = function(){
        console.log(`El profesor ${this.nombre}, con nivel ${this.nivel}, se le asigna la asignatura de ${this.asignatura}`)
   }


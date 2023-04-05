//require("dotenv").config();

const { Router } = require("express");
const router = Router();
const { Usuarios, Provincias, Ciudades } = require('../db')


router.get('/', async (req,res)=>{

  if(req.query.nombre){
    let { nombre } = req.query
    //console.log(nombre)
   
    let user = await Usuarios.findAll({ //aca creo un arreglo con todos los registros de la tabla dog
      include:[
        Provincias, Ciudades
      ]     
      })
 
   const result = user.filter(el=>el.nombre.toLowerCase().includes(nombre.toLowerCase()))
   console.log(result)
    res.status(200).json(result)
  }else{

  let dogsDB1 = await Usuarios.findAll({ //aca creo un arreglo con todos los registros de la tabla dog
      include:[
        Provincias, Ciudades
      ]     
      });       
      //console.log(dogsDB1)
   res.json(dogsDB1)
}})

router.post("/", async (req, res) => {
    let { nombre, apellido, edad, dni, email, genero, provincias, ciudades } = req.body;
  
    const capitalizar = (name) => {
      return name.charAt(0).toUpperCase() + name.slice(1);
    };
  
    if (!nombre || !apellido || !edad)
      return res.status(400).json({ msg: "faltan datos" });
  
     
        function cap(name){
          return name.charAt(0).toUpperCase() + name.slice(1)
        }
        // let image1 = await (
        //   await axios.get("https://dog.ceo/api/breeds/image/random")
        // ).data.message;
       
        const userCREATED = await Usuarios.findOrCreate({
          //devuelvo un array (OJOOO!!!!)
    
          where: {
            nombre: cap(nombre),
            apellido:cap(apellido),
            edad,
            dni,
            email,
            genero,
            // image: image? image : image1,
          },
        });
    
  
      await userCREATED[0].setProvincias(provincias)
      await userCREATED[0].setCiudades(ciudades) // relaciono ID temperaments al dog creado
      console.log(userCREATED[0])
  
      res.status(200).json(userCREATED);
     
    }
  );
  //-------fin post----

  router.delete('/',async(req,res)=>{
    let { id } = req.query
      await Usuarios.destroy({
        where:{
          id: id,
        }
      })
      res.status(200).json(id)
  })

module.exports = router
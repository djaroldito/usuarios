const { Router } = require('express')
const router = Router()

const axios = require('axios')
const { Ciudades } = require('../db')

router.get('/', async (req, res)=>{

    const ciuLLenas = await Ciudades.findAll()
    let ciuLLenas2 = ciuLLenas.sort((prev, next) => {
        if(prev.nombre > next.nombre) return 1
        if(prev.nombre < next.nombre) return -1
        return 0
    })
    
    if (ciuLLenas.length >=1 ) return res.json(ciuLLenas2)
 
    const result = await axios.get('https://infra.datos.gob.ar/catalog/modernizacion/dataset/7/distribution/7.4/download/municipios.json')
    const r = result.data.municipios
    //    console.log(r)

    const conv1 = (data) =>{
        if(data){
        return data} else{
            return 'null'
        }
    }
    let ciu = r.map((el) => {
        return {
            id: el.id,
            idProv: conv1(el.provincia.id),
            nombre: el.nombre
            
        }
        
    })

    console.log(ciu)
       
         ciu.forEach(el => {

            
            if (el) { 
                Ciudades.findOrCreate({
                    where: { 
                        id: el.id,
                        idProv: el.idProv,
                        nombre: el.nombre,

    
                                }
                });
            }
        });       
    
        ciu = await Ciudades.findAll();
        let ciu2 = ciu.sort((prev, next) => {
            if(prev.nombre > next.nombre) return 1
            if(prev.nombre < next.nombre) return -1
            return 0
        })
            res.status(200).json(ciu2);
        



      })

      




      module.exports = router

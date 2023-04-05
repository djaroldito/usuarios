const { Router } = require('express')
const router = Router()

const axios = require('axios')
const { Provincias } = require('../db')

router.get('/', async (req, res)=>{

    const provLLenas = await Provincias.findAll()
    let provLLenas2 = provLLenas.sort((prev, next) => {
        if(prev.nombre > next.nombre) return 1
        if(prev.nombre < next.nombre) return -1
        return 0
    })

    //console.log(nacLLenas)
    if (provLLenas.length >=1 ) return res.json(provLLenas2)
 
    const result = await axios.get('https://apis.datos.gob.ar/georef/api/provincias')
    const r = result.data.provincias
    //    console.log(r)
    let prov = r.map((el) => {
        return {
            id: el.id,
            nombre: el.nombre
            
        }
        
    })

    console.log(prov)
       
         prov.forEach(el => {
            if (el) { 
                Provincias.findOrCreate({
                    where: { 
                        id: el.id,
                        nombre: el.nombre,
    
                                }
                });
            }
        });       
    
        prov = await Provincias.findAll();
        let prov2 = prov.sort((prev, next) => {
            if(prev.nombre > next.nombre) return 1
            if(prev.nombre < next.nombre) return -1
            return 0
        })
            res.status(200).json(prov2);
        



      })

      




      module.exports = router

   
const express = require('express')
const app= express()
const PORT = 3000
app.get('/', (req,res)=>{



    res.send({data:'SOY APP1' })
})


app.listen(PORT ,()=>{



    console.log('APP 1 corriendo por el puerto', PORT)
})
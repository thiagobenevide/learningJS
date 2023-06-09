var listaArray = []
listaArray.push("Thiago")
listaArray.push("Cláudio")
listaArray.push("José")
console.log(listaArray)
listaArray.unshift("Carla")
console.log(listaArray)
listaArray.pop()
listaArray.shift()
console.log(listaArray)
console.log(listaArray.indexOf('Cláudio'))

throw new Error("Houve um erro mas estamos verificando o problema")

let count = 0
/*
while(count<listaArray.length){
    document.write(listaArray[count] + '<br/>')
    count++
}
*/


listaArray.forEach(function(valor, indice, array){
    document.write('indice ' + indice + '<br/>')
    document.write('indice ' + valor + '<br/>')
    document.write('indice ' + array + '<br/>' )
})


function getVideo(video){
    try{

    }catch{

    }finally{

    }
}
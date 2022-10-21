
// getLocation()

async function getLocation(){

        let cp = document.getElementById('cp').value
        console.log(cp)


    const response = await fetch(`http://sepomex.icalialabs.com/api/v1/zip_codes?zip_code=${cp}`)
        // console.log(await response.json());
        document.getElementById('elementList').innerHTML = '';
        let data = await response.json()
        const zip_codes = data.zip_codes
        console.log(zip_codes)

        
        let estado = data.zip_codes[0].d_estado
        console.log(estado)
        document.getElementById('estado').innerHTML = estado;

        let municipio = data.zip_codes[0].d_mnpio
        console.log(municipio)
        document.getElementById('municipio').innerHTML = municipio;
        
        const listElement = `<li class="py-3 sm:py-4">
                        <div class="flex items-center space-x-4">
                            
                            <div class="flex-1 min-w-0">
                                <p id="ciudad" class="text-sm font-thin text-gray-900 truncate dark:text-white">
                                    Ciudad 1
                                </p>
                                
                            </div>
                            <div id="asentamiento" class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                Tipo de asentamiento
                            </div>
                        </div>
                    </li>`
        zip_codes.forEach(element => {
            document.getElementById('elementList').innerHTML += `<li class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
                
                <div class="flex-1 min-w-0">
                    <p id="ciudad" class="text-sm font-thin text-gray-900 truncate dark:text-white">
                        ${element.d_asenta}
                    </p>
                    
                </div>
                <div id="asentamiento" class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                ${element.d_tipo_asenta}
                </div>
            </div>
        </li>`
        });


}





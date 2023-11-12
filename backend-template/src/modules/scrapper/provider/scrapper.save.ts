
import axios from 'axios'
import * as fs from 'fs'
import {existsSync, mkdirSync} from 'fs'
import {join} from 'path'


export const save_images = async (result : string[],mainCarname ) : Promise<void> => {
    let count : number = 0
    try {

        const filePath = join(__dirname, `../../../data/${mainCarname}/`)
        if (!existsSync(filePath)) {
            mkdirSync(filePath)
        }
        for (const i of result) {
            try {
                const response = await axios.get(i, {
                    responseType: 'arraybuffer'
                })
                count++
                const spliter = i.split('/')
                const image_name = spliter[spliter.length - 1]
                fs.writeFileSync(`${filePath}${count}${image_name}.jpg`, response.data)
                // console.log('Image saved as ok.jpg');
                console.log(` image ${count} sucsesfuly stored`)
            }catch (err){
                console.log(err)
                continue
            }
        }
    } catch (error) {
        console.error(error)
    }

}
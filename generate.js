import fs from 'fs'


const generate = (extra, flags) => {
    if (!fs.existsSync(flags.filename)) {
        console.log(`ERROR: No file named ${envPath}`)
        return
    }

    let data = fs.readFileSync(flags.filename, 'utf8')

    if (flags.readAll) {
        console.log(data)
        return
    }

    let allVars = data.split('\n')

    if (flags.read) {
        allVars.forEach((v) => {
            let name = v.split('=')
            if (name[0] == flags.read) {
                console.log(`${name[0]} = ${name[1]}`)
                return
            }
        })
    } 
    if (flags.add) {
        fs.appendFileSync(flags.filename, `\n${flags.add}=${extra[0]}`)
    }

    if (flags.remove) {
        for (let i = 0; i < allVars.length; i++) {
            if (allVars[i].split("=")[0] == flags.remove) {
                allVars.splice(i, 1)
            }
        }
        fs.writeFileSync(flags.filename, allVars.join("\n"))
    }

}

export default generate
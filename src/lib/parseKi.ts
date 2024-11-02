export const parseKi = (value: string): number => {
    // Eliminamos espacios adicionales y convertimos la cadena a minúsculas
    const trimmedValue = value.trim().toLowerCase()

    // Definimos las equivalencias para cada sufijo
    const suffixes: { [key: string]: number } = {
        thousand: 1_000,
        million: 1_000_000,
        billion: 1_000_000_000,
        trillion: 1_000_000_000_000,
        quadrillion: 1_000_000_000_000_000,
        quintillion: 1_000_000_000_000_000_000,
        sextillion: 1_000_000_000_000_000_000_000,
        septillion: 1_000_000_000_000_000_000_000_000,
    }

    // Expresión regular para capturar el número y el sufijo
    const regex = /^([\d.]+)\s*(thousand|million|billion|trillion|quadrillion|quintillion|sextillion|septillion)$/i
    const match = trimmedValue.match(regex)

    if (!match) {
        const thousandStr = trimmedValue.replace(/\./g, '')
        // Convertimos la parte numérica a un valor de tipo number
        const numericValue = parseFloat(thousandStr)
        // Si no hace match con el formato esperado, retornamos null
        return numericValue
    }

    // Extraemos el número y el sufijo
    let numberPart = match[1]
    const suffix = match[2]

    // Eliminamos los puntos de la parte numérica
    numberPart = numberPart.replace(/\./g, '')

    // Convertimos la parte numérica a un valor de tipo number
    const numericValue = parseFloat(numberPart)

    // Multiplicamos el número base por el valor del sufijo
    return numericValue * suffixes[suffix]
}

export const parseKi = (value: string): bigint | null => {
    // Eliminamos espacios adicionales y convertimos la cadena a minúsculas
    const trimmedValue = value.trim().toLowerCase()

    // Diccionario de sufijos con valores `bigint`
    const suffixes: { [key: string]: bigint } = {
        billion: BigInt(1_000_000_000),
        trillion: BigInt(1_000_000_000_000),
        quadrillion: BigInt(1_000_000_000_000_000),
        quintillion: BigInt(1_000_000_000_000_000_000),
        sextillion: BigInt(1_000_000_000_000_000_000_000),
        septillion: BigInt(1_000_000_000_000_000_000_000_000),
    }

    // Expresión regular para capturar el número y el sufijo
    const regex = /^([\d.]+)\s*(billion|trillion|quadrillion|quintillion|sextillion|septillion)?$/i
    const match = trimmedValue.match(regex)

    if (!match) {
        // Si no hace match con el formato esperado, retornamos null
        return null
    }

    // Extraemos el número y el sufijo (si está presente)
    const numberPart = match[1]
    const suffix = match[2]

    // Convertimos la parte numérica a `bigint`
    const numericValue = BigInt(Math.floor(parseFloat(numberPart) * 1000)) / BigInt(1000)

    // Si no hay sufijo, asumimos que el número está en miles
    if (!suffix) {
        return BigInt(parseFloat(numberPart) * 1000)
    }

    // Multiplicamos el número base por el valor del sufijo
    return numericValue * suffixes[suffix]
}

export const formatKi = (value: bigint | null): string => {
    // ⁰¹²³⁴⁵⁶⁷⁸⁹
    if (value === null) return '¿?'
    if (value < 1_000n) return value.toString()
    if (value < 1_000_000n) return `10³`
    if (value < 1_000_000_000n) return `10⁶`
    if (value < 1_000_000_000_000n) return `10⁹`
    if (value < 1_000_000_000_000_000n) return `10¹²`
    if (value < 1_000_000_000_000_000_000n) return `10¹⁵`
    if (value < 1_000_000_000_000_000_000_000n) return `10¹⁸`
    if (value < 1_000_000_000_000_000_000_000_000n) return `10²¹`
    if (value < 1_000_000_000_000_000_000_000_000_000n) return `10²⁴`
    return `Ilimitado`
}

// export const calculateKi = (currentKi: string, maxKi: string): number | null => {
//     const currentKiBigInt = parseKi(currentKi)
//     const maxKiBigInt = parseKi(maxKi)
//     if (currentKiBigInt === null || maxKiBigInt === null) return null
//     const calcBigInt = maxKiBigInt % currentKiBigInt
//     console.log({ calcBigInt, maxKiBigInt, currentKiBigInt })
//     return 0
// }

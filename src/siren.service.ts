import { IAmTheTest } from "./siren.interface";

export class SirenService implements IAmTheTest {

    checkSirenValidity(siren: string): boolean {
        try {
            if (isNaN(parseInt(siren)) || siren.length !== 9) {
                return false
            }

            const numbers: number[] = siren.split('').map(v => parseInt(v))

            let sum = 0
            for (let index = numbers.length; index >= 1; index--) {
                if ((index % 2) === 0) {
                    let val = 2 * numbers[index - 1]
                    sum += this.computeNumbers(val)
                } else {
                    sum += (1 * numbers[index - 1])
                }
            }
            return (sum % 10) === 0

        } catch (e) {
            return false
        }
    }

    computeFullSiren(sirenWithoutControlNumber: string): string {

        const numbers: number[] = sirenWithoutControlNumber.split('').map(v => parseInt(v))

        let sum = 0
        for (let index = numbers.length; index >= 1; index--) {
            if ((index % 2) === 0) {
                let val = 2 * numbers[index - 1]
                sum += this.computeNumbers(val)
            } else {
                sum += (1 * numbers[index - 1])
            }
        }

        const rest = sum % 10
        const controlNumber = (rest === 0) ? 0 : 10 - rest
        return sirenWithoutControlNumber + controlNumber.toString()

    }

    private computeNumbers(value: number) {
        let sum = 0
        while (value !== 0) {
            sum += value % 10;
            value = Math.floor(value / 10)
        }
        return sum
    }

}
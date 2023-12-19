
export interface IAmTheTest{
    checkSirenValidity(siren: string): boolean
    computeFullSiren(sirenWithoutControlNumber: string): string
};
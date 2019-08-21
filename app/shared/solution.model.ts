export class Solution {
    _id: string;
    nom: string;
    valideParAdmin: boolean;
    auteur: string;
    dateDeCreation: Date;

    type: string;
    dechetId: string;
    localisationSolution: string;
    content: any;


    constructor(nom: string, auteur: string, public cvalideParAdmin?, public cid?, public ctype?, public cdechetId?, public clocalisationSolution?, public ccontent?) {
        this.nom = nom;
        this.auteur = auteur;

        this.dateDeCreation = new Date();

        if (cid) {
            this._id = cid;
        }

        if (ctype) {
            this.type = ctype;
        }

        if (cvalideParAdmin) {
            this.valideParAdmin = cvalideParAdmin;
        } else {
            this.valideParAdmin = false;
        }

        if (cdechetId) {
            this.dechetId = cdechetId;
        }

        if (clocalisationSolution) {
            this.localisationSolution = clocalisationSolution;
        }

        if (ccontent) {
            this.content = ccontent;
        }
    }
}
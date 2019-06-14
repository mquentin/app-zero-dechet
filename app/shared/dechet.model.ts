export class Dechet {
    _id: string;
    nom: string;
    rechercheValorisation: any[];
    astuce: any[];
    solutionOuverte: any[];
    solutionConsigne: any[];
    solutionValorisation: any[];
    solutionRecyclage: any[];
    solutionVrac: any[];
    valideParAdmin: boolean;
    auteur: string;
    dateDeCreation: Date;

    constructor(nom: string, auteur: string, public cvalideParAdmin?, public cid?, public crechercheValorisation?, public castuce?, public csolutionOuverte?, public csolutionConsigne?, public csolutionValorisation?, public csolutionRecyclage?, public csolutionVrac?) {
        this.nom = nom;
        this.auteur = auteur;

        this.dateDeCreation = new Date();

        if (cid) {
            this._id = cid;
        }

        if (crechercheValorisation) {
            this.rechercheValorisation = crechercheValorisation;
        } else {
            this.rechercheValorisation = [];
        }

        if (castuce) {
            this.astuce = castuce;
        } else {
            this.astuce = [];
        }

        if (csolutionOuverte) {
            this.solutionOuverte = csolutionOuverte;
        } else {
            this.solutionOuverte = [];
        }

        if (csolutionConsigne) {
            this.solutionConsigne = csolutionConsigne;
        } else {
            this.solutionConsigne = [];
        }

        if (csolutionValorisation) {
            this.solutionValorisation = csolutionValorisation;
        } else {
            this.solutionValorisation = [];
        }

        if (csolutionRecyclage) {
            this.solutionRecyclage = csolutionRecyclage;
        } else {
            this.solutionRecyclage = [];
        }

        if (csolutionVrac) {
            this.solutionVrac = csolutionVrac;
        } else {
            this.solutionVrac = [];
        }


        if (cvalideParAdmin) {
            this.valideParAdmin = cvalideParAdmin;
        } else {
            this.valideParAdmin = false;
        }
    }
}
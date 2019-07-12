export class Dechet {
    _id: string;
    nom: string;
    valideParAdmin: boolean;
    auteur: string;
    dateDeCreation: Date;

    content: any;
    astuce: any;

    constructor(nom: string, auteur: string, public cvalideParAdmin?, public cid?, public castuce?, public cContent?) {
        this.nom = nom;
        this.auteur = auteur;

        this.dateDeCreation = new Date();

        if (cid) {
            this._id = cid;
        }

        if (cContent) {
            this.content = cContent;
        }

        if (castuce) {
            this.astuce = castuce;
        }

        if (cvalideParAdmin) {
            this.valideParAdmin = cvalideParAdmin;
        } else {
            this.valideParAdmin = false;
        }
    }
}
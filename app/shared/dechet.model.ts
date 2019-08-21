export class Dechet {
    _id: string;
    nom: string;
    valideParAdmin: boolean;
    auteur: string;
    dateDeCreation: Date;

    info: string;
    content: any;

    constructor(nom: string, auteur: string, public cvalideParAdmin?, public cid?, public cInfo?, public cContent?) {
        this.nom = nom;
        this.auteur = auteur;

        this.dateDeCreation = new Date();

        if (cid) {
            this._id = cid;
        }

        if (cInfo) {
            this.info = cInfo;
        }

        if (cContent) {
            this.content = cContent;
        }

        if (cvalideParAdmin) {
            this.valideParAdmin = cvalideParAdmin;
        } else {
            this.valideParAdmin = false;
        }
    }
}
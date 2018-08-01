import { Injectable } from '@angular/core';
// se crea servicio desde donde se enviara la lista notes
@Injectable()
export class NotesService {
    
    notes = [
        { id: 1, tittle: 'Nota 1', description: 'descripcion de nota 1' },
        { id: 2, tittle: 'Nota 2', description: 'descripcion de nota 2' },
        { id: 3, tittle: 'Nota 3', description: 'descripcion de nota 3' }
    ];
// metodo publico que devuelve la lista notes cargada
    public getNotes() {
        return this.notes;
    }

  
}


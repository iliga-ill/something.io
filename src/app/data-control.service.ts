import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataControlService {

  path="http://localhost:3000/Players";

  constructor(public http: HttpClient) {
    
  }

  getPlayers(): Promise<any> {
    return this.http.get(this.path).toPromise();
  }

  addPlayer(data) {
    return this.http.post(this.path, data).toPromise();
  }

  onDeleteById(id: number) {
    const url = `${this.path}/${id}`; 
    return this.http.delete(url).toPromise()
  }

  changeWorker(worker){
    const url = `${this.path}/${worker.id}`;
    return this.http.put(url, worker).toPromise()
  }
}

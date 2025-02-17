import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private _httpClient:HttpClient) { }

  baseUrl:String="/api/v1/candidates";
  fetchAllCandidates():Observable<Candidate[]>{
    return this._httpClient.get<Candidate[]>(`${this.baseUrl}`);
  }

  //http angular post method

  createCandidate(data:Candidate){
    return this._httpClient.post<Candidate>(`${this.baseUrl}`,data);
  }

  updateCandidate(data:Candidate){
    return this._httpClient.put<Candidate>(`${this.baseUrl}/${data.id}`,data);
  }

  deleteCandidate(id:Number){
    return this._httpClient.delete<Candidate>(`${this.baseUrl}/${id}`);
  }

}

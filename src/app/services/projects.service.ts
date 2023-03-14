import { Project } from '../models/project';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { BehaviorSubject, Observable, Observer, Subject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  public MySubject : BehaviorSubject<boolean>

  constructor(private httpClient : HttpClient)
  {
     this.MySubject = new BehaviorSubject<boolean>(false)
  }

  hideDetails : boolean = false

  toggleDetails(){
    this.MySubject.next(!this.MySubject.value)
  }

  //Get All Records
  getAllProjects():Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("/api/projects",{responseType:"json"})
  }

  getProjectByProjectID(ProjectID: number): Observable<Project>
  {
    return this.httpClient.get<Project>("/api/projects/searchbyprojectid/" + ProjectID, { responseType: "json" });
  }

  //Insert Record
  insertProject(newProject: Project): Observable<Project>
  {
    var requestHeaders = new HttpHeaders();
    requestHeaders = requestHeaders.set("X-XSRF-TOKEN", sessionStorage['XSRFRequestToken']);
    return this.httpClient.post<Project>("/api/projects", newProject, { headers: requestHeaders, responseType: "json" });
  }

  //Update Record
  updateProject(existingProject: Project): Observable<Project>
  {
    return this.httpClient.put<Project>("/api/projects/" + existingProject,{responseType:"json"});
  }

  //Delete Record
  deleteProject(ProjectID: number): Observable<Project>
  {
    return this.httpClient.delete<Project>("/api/projects?ProjectID=" + ProjectID);
  }

  //Search Record
  searchProject(searchBy:string, searchText:string): Observable<Project[]>
  {
    return this.httpClient.get<Project[]>("/api/projects/search/" + searchBy +"/" + searchText, {responseType:"json"});
  }
}

import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'email', 'address', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Candidate>();
  @ViewChild(MatSort) sort: any;
  @ViewChild(MatPaginator) paginator: any;
  candidate:Candidate={
    id:0,
    name:'',
    email:'',
    address:''


  }

  candidates:Candidate[]=[];
  filteredCandidates:Candidate[]=[];

  constructor(private candidateService:CandidateService){}

  ngAfterViewInit(): void {
    this.candidateService.fetchAllCandidates().subscribe((data)=>{
      this.candidates=data;
      this.dataSource = new MatTableDataSource<Candidate>(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
    
  }



  //Search functionality

  searchCandidate(input:String){
    this.filteredCandidates=this.candidates.filter(item=>item.name.toLowerCase().includes(input.toLowerCase())
  || item.email.toLowerCase().includes(input.toLowerCase())
  || item.address.toLowerCase().includes(input.toLowerCase()));
  this.dataSource = new MatTableDataSource<Candidate>(this.filteredCandidates);
  }

  addOrEditCandidate(candidate:Candidate){
    if(candidate.id!==0){
      this.candidateService.updateCandidate(candidate).subscribe({
        next:(data)=>{
          console.log(`New Candidate updated successfully!`);
          window.location.reload();
          
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }else{
      this.candidateService.createCandidate(candidate).subscribe({
        next:(data)=>{
          console.log(`New Candidate created successfully!`);
          window.location.reload();
          
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
    }

  }


  //Función limpiar texto

  clearAll(){
    this.candidate.name="",
    this.candidate.email="",
    this.candidate.address=""
  }


  populateFormFields(candidate:Candidate){
    this.candidate.id=candidate.id;
    this.candidate.name=candidate.name;
    this.candidate.email=candidate.email
    this.candidate.address=candidate.address;
  }


  deleteCandidate(id:Number){
      const isConfirmed=window.confirm("Are you sure you want to delete?")
      if(isConfirmed){
        this.candidateService.deleteCandidate(id).subscribe((data)=>{
          this.candidates=this.candidates.filter(item=>item.id!==id)
        })
        window.location.reload();
      }
  }



}

import { CanComponentDeactivate } from 'src/app/guards/can-deactivate-guard.service';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SignUpViewModel } from 'src/app/models/sign-up-view-model';
import { CustomValidatorsService } from 'src/app/services/custom-validators.service';
import { Country } from 'src/app/models/country';
import { CountriesService } from 'src/app/services/countries.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, CanComponentDeactivate
{
  signUpForm:FormGroup | any;
  genders = ["male", "female"]
  countries:Country[] = [ ]
  registerError:string = ""

  canLeave: boolean = true

  constructor(private countriesService : CountriesService, private formBuilder:FormBuilder, private customValidatorsService : CustomValidatorsService, private loginService : LoginService, private router: Router)
  {
  }

  ngOnInit()
  {
    this.countriesService.getCountries().subscribe((response) =>{
      this.countries = response;
    })

    this.signUpForm = this.formBuilder.group({
      personName:this.formBuilder.group({
        firstName:["", [Validators.required,Validators.minLength(2)]],
        lastName:["", [Validators.required,Validators.minLength(2)]],
      }),
      email:["", [Validators.required,Validators.email],[this.customValidatorsService.DuplicateEmailValidator()],{updateOn:'blur'}],
      mobile:["", [Validators.required,Validators.pattern(/^[789]\d{9}$/)]],
      dateOfBirth:["", [Validators.required,CustomValidatorsService.minimumAgeValidator(18)]],
      password:["", [Validators.required]],
      confirmPassword:["", [Validators.required]],
      gender:["", [Validators.required]],
      countryID:["", [Validators.required]],
      receiveNewsLetters:[""],
      skills:this.formBuilder.array([])
    },
    {
      validators:[
        this.customValidatorsService.compareValidator("confirmPassword", "password")
      ]
    })

    this.signUpForm.valueChanges.subscribe((value: any) =>
    {
      //console.log(value);
      this.canLeave = false
    });
  }

  onSubmitClick()
  {
    //Display current form value
    this.signUpForm["submitted"] = true;
    console.log(this.signUpForm);

    if (this.signUpForm.valid)
    {
      var signUpViewModel = this.signUpForm.value as SignUpViewModel;
      this.loginService.Register(signUpViewModel).subscribe(
        (response) =>
        {
          this.canLeave = true
          this.router.navigate(["/employee","tasks"]);
        },
        (error) =>
        {
          console.log(error);
          this.registerError = "Unable to submit";
        });
    }
  }

  onAddSkill()
  {
    var formGroup = new FormGroup({
      skillName: new FormControl(null, [Validators.required]),
      skillLevel: new FormControl(null, [Validators.required])
    });

    (<FormArray>this.signUpForm.get("skills")).push(formGroup);
  }

  onRemoveClick(index:number){
    (<FormArray>this.signUpForm.get("skills")).removeAt(index)
  }
}

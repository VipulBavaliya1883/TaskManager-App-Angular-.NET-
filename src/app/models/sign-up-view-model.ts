export class SignUpViewModel {
  personName: any;
  email: any;
  mobile: any;
  dateOfBirth: any;
  password: any;
  gender: any;
  countryID: any;
  receiveNewsLetters: any;
  skills: any;

  constructor(
    personName: any = null,
    email: string | any = null,
    mobile: string | any = null,
    dateOfBirth: string | any = null,
    password: string | any = null,
    gender: string | any = null,
    countryID: number | any = null,
    receiveNewsLetters: boolean = false,
    skills: any = null
  ) {
    this.personName = personName;
    this.email = email;
    this.mobile = mobile;
    this.dateOfBirth = dateOfBirth;
    this.password = password;
    this.gender = gender;
    this.countryID = countryID;
    this.receiveNewsLetters = receiveNewsLetters;
    this.skills = skills;
  }
}
